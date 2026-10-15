# Portal do Aluno

Requer Node.js 22.13 ou superior (SQLite nativo).

```sh
npm install
npm run dev
```

O comando inicia o Vite e a API local na porta 3001. Abra o endereço indicado pelo Vite, escolha **Criar conta** e informe nome, e-mail, matrícula, nascimento e senha (8 a 128 caracteres). Depois é possível sair e entrar usando a conta criada. Matrículas mantêm zeros à esquerda.

As contas ficam em `server/data/portal.sqlite`, ignorado pelo Git. As senhas são derivadas com scrypt e salt individual; sessões de sete dias usam cookies HttpOnly e são revogadas ao sair. Reiniciar o servidor preserva contas e sessões. O cadastro é aberto e não comprova vínculo com a escola. As preferências de perfil continuam locais ao navegador, separadas por matrícula; alteração e recuperação de senha ainda não estão implementadas.

```sh
npm run test:auth
npm run build
```

Para testar o build, execute `npm run server` e `npm run preview` em terminais separados. Para publicar, mantenha o backend Node e o arquivo SQLite em armazenamento persistente, encaminhe `/api` ao backend pelo mesmo domínio do frontend e use HTTPS com `NODE_ENV=production` (cookie Secure). Hospedar apenas `dist` não disponibiliza a autenticação. A API escuta em 127.0.0.1 e pode ficar atrás de um proxy; o proxy deve preservar o cabeçalho Host original. A limitação de tentativas é por endereço de conexão e fica em memória; em uma implantação com proxy/múltiplas instâncias, configure também a limitação de tentativas no proxy.
