export type Usuario = { id: number; nome: string; matricula: string; email: string };

export async function autenticar(acao: 'session' | 'login' | 'register' | 'logout', dados?: Record<string, string>): Promise<Usuario | null> {
  let resposta: Response;
  try {
    resposta = await fetch(`/api/auth/${acao}`, {
      method: acao === 'session' ? 'GET' : 'POST',
      credentials: 'same-origin',
      headers: acao === 'session' ? undefined : { 'Content-Type': 'application/json' },
      body: acao === 'session' ? undefined : JSON.stringify(dados || {}),
    });
  } catch {
    throw new Error('Não foi possível conectar ao servidor. Tente novamente.');
  }
  const resultado = await resposta.json().catch(() => null);
  if (!resposta.ok || !resultado || !('usuario' in resultado)) throw new Error(resultado?.mensagem || 'O serviço de autenticação está indisponível.');
  return resultado.usuario;
}
