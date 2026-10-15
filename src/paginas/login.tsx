import { useState, type FormEvent } from "react";

import { modoDemonstracao, usuarioDemonstracao } from "../dados/demonstracao";

import { autenticar, type Usuario } from "../dados/autenticacao";

export default function Login({ entrar }: { entrar: (usuario: Usuario) => void }) {
  const [enviando, setEnviando] = useState(false);

  const [criandoConta, setCriandoConta] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mensagem, setMensagem] = useState("");

  function trocarFormulario(cadastro: boolean) {
    setCriandoConta(cadastro);
    setMostrarSenha(false);
    setMensagem("");
  }

  async function enviarFormulario(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    if (modoDemonstracao) {
      setMensagem("Login e cadastro indisponíveis nesta demonstração. Use o botão para conhecer o portal.");
      return;
    }

    if (enviando) {
      return;
    }

    const campos = new FormData(evento.currentTarget);
    const senha = campos.get("senha");
    const confirmacao = campos.get("confirmacao");

    if (criandoConta && senha !== confirmacao) {
      setMensagem("As senhas precisam ser iguais.");
      return;
    }

    setEnviando(true);
    setMensagem("");

    try {
   
      const dados: Record<string, string> = {};

      for (const [nome, valor] of campos) {
        dados[nome] = String(valor);
      }

      let usuario: Usuario | null;

      if (criandoConta) {
        usuario = await autenticar("register", dados);
      } else {
        usuario = await autenticar("login", dados);
      }

      if (usuario) {
        entrar(usuario);
      }
    } catch (erro) {
      if (erro instanceof Error) {
        setMensagem(erro.message);
      } else {
        setMensagem("Não foi possível entrar.");
      }
    } finally {
      setEnviando(false);
    }
  }


  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");
  const dataMaxima = `${ano}-${mes}-${dia}`;

  let textoBotao = "Entrar";

  if (criandoConta) {
    textoBotao = "Criar nova conta";
  }

  if (enviando) {
    textoBotao = "Aguarde...";
  }

  return (

    <main className="flex min-h-screen flex-col bg-white text-slate-900 md:flex-row">

      <section className="flex flex-col items-center justify-center gap-6 bg-[#9fcbea] px-5 py-8 text-[#002c65] md:w-1/2 md:gap-9 md:px-8" aria-label="Portal do Aluno">

        <div className="flex items-center gap-4">

          <img
            src="/imagens/logo-sanico.jpg"
            alt="Logo da escola"
            className="h-16 w-16 rounded-full md:h-20 md:w-20"
          />

          <h1 className="text-center font-serif text-3xl font-bold leading-tight md:text-4xl">Portal do Aluno<br />Sanico Teles</h1>

        </div>

       
        <img
          className="max-h-44 w-full max-w-44 rounded-3xl object-contain md:max-h-96 md:max-w-96"
          src="/imagens/login.jpeg"
          alt="Ilustração do Portal do Aluno"
        />

        <p className="text-center font-bold">A sua rotina escolar mais simples,<br />organizada e acessível.</p>

      </section>

      <section className="m-auto w-full max-w-xl px-6 py-8 md:w-1/2 md:px-12">

        <h2 className="text-center font-serif text-4xl font-bold">Bem-Vindos!</h2>

        <p className="mb-6 mt-1 text-center font-serif text-2xl">{criandoConta ? "Crie sua conta." : "Entre na sua conta."}</p>

        <div className="mb-6 flex gap-2" aria-label="Escolha o formulário">

          <button
            type="button"
            className="flex-1 cursor-pointer rounded-lg border border-slate-300 p-2 aria-pressed:bg-blue-800 aria-pressed:text-white"
            aria-pressed={!criandoConta}
            disabled={enviando}
            onClick={() => trocarFormulario(false)}
          >Entrar</button>

          <button
            type="button"
            className="flex-1 cursor-pointer rounded-lg border border-slate-300 p-2 aria-pressed:bg-blue-800 aria-pressed:text-white"
            aria-pressed={criandoConta}
            disabled={enviando}
            onClick={() => trocarFormulario(true)}
          >Criar conta</button>

        </div>

        {modoDemonstracao && (
          <div className="mb-6 rounded-lg bg-blue-50 p-4 text-center">
            <p className="text-sm text-blue-900">
              Versão de demonstração. Explore o portal sem criar uma conta.
            </p>

            <button
              type="button"
              onClick={() => entrar(usuarioDemonstracao)}
              className="mt-3 rounded-lg bg-blue-800 px-4 py-2 font-bold text-white hover:bg-blue-900"
            >
              Conhecer o portal
            </button>
          </div>
        )}

        <form
          key={String(criandoConta)}
          onSubmit={enviarFormulario}
          onChange={() => setMensagem("")}
        >

          <fieldset disabled={enviando} className="disabled:opacity-60">

            {criandoConta && (

              <div className="mb-4">

                <label className="mb-1 block text-sm font-bold" htmlFor="nome">Nome completo</label>

                <input
                  className="h-10 w-full min-w-0 rounded-lg border-2 border-slate-700 bg-white px-3 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                  id="nome"
                  name="nome"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={3}
                  pattern=".*\S.*"
                  maxLength={120}
                />

              </div>
            )}

            {criandoConta && (

              <div className="mb-4">

                <label className="mb-1 block text-sm font-bold" htmlFor="email">E-mail</label>

                <input
                  className="h-10 w-full min-w-0 rounded-lg border-2 border-slate-700 bg-white px-3 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                />

              </div>
            )}

            <div className="mb-4">

              <label className="mb-1 block text-sm font-bold" htmlFor="matricula">Número de matrícula</label>

              <input
                className="h-10 w-full min-w-0 rounded-lg border-2 border-slate-700 bg-white px-3 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                id="matricula"
                name="matricula"
                type="text"
                inputMode="numeric"
                pattern="[0-9]+"
                title="Digite somente os números da matrícula."
                autoComplete="username"
                required
                maxLength={30}
              />

            </div>

            {criandoConta && (

              <div className="mb-4">

                <label className="mb-1 block text-sm font-bold" htmlFor="nascimento">Data de nascimento</label>

                <input
                  className="h-10 w-full min-w-0 rounded-lg border-2 border-slate-700 bg-white px-3 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                  id="nascimento"
                  name="nascimento"
                  type="date"
                  autoComplete="bday"
                  max={dataMaxima}
                  required
                />

              </div>
            )}

            <div className="mb-4">

              <label className="mb-1 block text-sm font-bold" htmlFor="senha">{criandoConta ? "Crie sua senha" : "Senha"}</label>

              <input
                className="h-10 w-full min-w-0 rounded-lg border-2 border-slate-700 bg-white px-3 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                id="senha"
                name="senha"
                type={mostrarSenha ? "text" : "password"}
                autoComplete={criandoConta ? "new-password" : "current-password"}
                minLength={8}
                maxLength={128}
                required
                aria-describedby="dica-senha"
              />

              <small id="dica-senha" className="mt-1 block text-slate-500">Use pelo menos 8 caracteres.</small>

            </div>

            {criandoConta && (

              <div className="mb-4">

                <label className="mb-1 block text-sm font-bold" htmlFor="confirmacao">Confirme sua senha</label>

                <input
                  className="h-10 w-full min-w-0 rounded-lg border-2 border-slate-700 bg-white px-3 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                  id="confirmacao"
                  name="confirmacao"
                  type={mostrarSenha ? "text" : "password"}
                  autoComplete="new-password"
                  minLength={8}
                  maxLength={128}
                  required
                />

              </div>
            )}

            <button
              type="button"
              className="mb-5 ml-auto block cursor-pointer text-sm text-blue-700 hover:underline"
              aria-pressed={mostrarSenha}
              onClick={() => setMostrarSenha(!mostrarSenha)}
            >
              {mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
            </button>

            <button type="submit" className="mx-auto block cursor-pointer rounded-full bg-blue-800 px-8 py-3 text-sm font-bold text-white hover:bg-blue-900">{textoBotao}</button>

          </fieldset>

          <p className="mt-4 text-center text-sm" role="status">{mensagem}</p>

        </form>

        <p className="mt-4 text-center text-xs text-slate-500">Cadastre-se com sua matrícula para acessar o portal. O cadastro ainda não valida seu vínculo com a escola.</p>

      </section>

    </main>
  );
}
