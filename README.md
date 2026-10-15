# Demonstração na Vercel

Esta publicação serve para visualizar as páginas, sem API ou banco de dados.
A página inicial abre direto. Para visualizar o login e o cadastro, acesse
`/login`. O botão **Conhecer o portal** permite voltar à demonstração sem
informar credenciais. Login e cadastro reais ficam desativados nesse build.

## Publicar

1. Envie o projeto para seu repositório no GitHub.
2. Na Vercel, importe o repositório e selecione o framework **Vite**.
3. Use a raiz do projeto como diretório do projeto e publique.

O arquivo `vercel.json` configura o comando `npm run build:demo`, a pasta
`dist` e as rotas. Não é necessário configurar banco ou variáveis no painel.

## Conferir localmente

```sh
npm install
npm run build:demo
npm run preview
```

O modo de demonstração é ativado pelo arquivo `.env.demonstracao`.
Os comandos `npm run dev` e `npm run build` continuam usando a autenticação
original, que depende do servidor. Para voltar a usar a autenticação na
publicação, será preciso hospedar a API e trocar o comando de build.

Os dados de perfil e achados e perdidos ficam apenas no navegador utilizado;
não são compartilhados entre visitantes. Nenhuma conta é criada na demonstração.
