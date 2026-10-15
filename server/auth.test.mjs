import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createAuthServer } from './auth.mjs';

test('cadastro, credenciais, persistência e revogação de sessão', async () => {
  const dir = mkdtempSync(join(tmpdir(), 'portal-auth-'));
  const path = join(dir, 'test.sqlite');
  let server;
  let base;
  async function start() {
    server = createAuthServer(path);
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    base = `http://127.0.0.1:${server.address().port}`;
  }
  const stop = () => new Promise(resolve => server.close(resolve));
  const request = (action, body, cookie, headers = {}) => fetch(`${base}/api/auth/${action}`, {
    method: body === undefined ? 'GET' : 'POST',
    headers: { 'Content-Type': 'application/json', ...(cookie ? { Cookie: cookie } : {}), ...headers },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  try {
    await start();
    assert.deepEqual(await (await request('session')).json(), { usuario: null });
    const account = { matricula: '001234', nome: 'Aluno Teste', email: ' Aluno@Exemplo.com ', nascimento: '2005-02-20', senha: 'senha-teste-123' };
    assert.equal((await request('register', { ...account, nascimento: '2005-02-31' })).status, 400);
    assert.equal((await request('register', account, undefined, { Origin: 'https://outro.site' })).status, 403);
    for (const email of [undefined, '', 'sem-arroba', 'aluno@', 'aluno @exemplo.com']) {
      assert.equal((await request('register', { ...account, email })).status, 400);
    }
    const register = await request('register', account);
    assert.equal(register.status, 201);
    assert.match(register.headers.get('set-cookie'), /HttpOnly; SameSite=Lax/);
    const cookie = register.headers.get('set-cookie').split(';')[0];
    const user = (await register.json()).usuario;
    assert.equal(user.email, 'aluno@exemplo.com');
    assert.deepEqual(Object.keys(user).sort(), ['email', 'id', 'matricula', 'nome']);
    assert.equal((await request('register', account)).status, 409);
    assert.equal((await request('login', { ...account, senha: 'incorreta' })).status, 401);
    assert.equal((await request('login', { ...account, matricula: '999' })).status, 401);
    await stop();
    await start();
    assert.deepEqual((await (await request('session', undefined, cookie)).json()).usuario, user);
    assert.equal((await request('logout', {}, cookie)).status, 200);
    assert.equal((await (await request('session', undefined, cookie)).json()).usuario, null);
    const login = await request('login', account);
    assert.equal(login.status, 200);
    assert.equal((await login.json()).usuario.matricula, '001234');
    assert.equal((await (await request('session', undefined, `portal_session=${'a'.repeat(64)}`)).json()).usuario, null);
    for (let i = 0; i < 30; i++) await request('login', { ...account, senha: 'incorreta' });
    assert.equal((await request('login', account)).status, 429);
  } finally {
    if (server?.listening) await stop();
    rmSync(dir, { recursive: true, force: true });
  }
});
