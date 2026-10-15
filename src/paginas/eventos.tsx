import { Link } from "react-router-dom";
import { pegarPerfil } from "../dados/perfil";

export default function Eventos() {
  const perfil = pegarPerfil();
  return (
    <main className="flex min-h-screen flex-col bg-white text-slate-900">
      <nav className="bg-blue-700 px-5 py-3 shadow-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-5">
          <img
            src="/imagens/logo-sanico.jpg"
            alt="Logo da escola"
            className="h-12 w-12 rounded-full object-cover"
          />

          <div className="hidden items-center gap-6 text-sm font-semibold text-white md:flex">
            <Link to="/" className="hover:underline">
              Início
            </Link>
            <Link to="/eventos" aria-current="page" className="underline underline-offset-4">
              Eventos
            </Link>
            <Link to="/clubes" className="hover:underline">
              Clubes
            </Link>
            <Link to="/agenda" className="hover:underline">
              Agenda Escolar
            </Link>
            <Link to="/horarios" className="hover:underline">
              Horários Escolares
            </Link>
            <Link to="/achados-e-perdidos" className="hover:underline">
              Achados e Perdidos
            </Link>
          </div>

          <div className="flex items-center gap-2 text-white">
            <span className="hidden text-xs sm:block">Olá, {perfil.nome}</span>
            <img
              src={perfil.foto}
              alt="Foto do perfil"
              className="h-9 w-9 rounded-full object-cover"
            />
            <Link to="/configuracoes" aria-label="Configurações" className="text-lg hover:text-blue-200">
              ⚙
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto w-full max-w-6xl flex-1 px-6 py-12 sm:px-10">
        <div className="mb-8 max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">Participe</span>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Eventos da escola</h1>
          <p className="mt-3 leading-relaxed text-slate-500">
            Confira encontros, competições e atividades para aprender e se divertir com a escola.
          </p>
          <p className="mt-3 text-sm text-slate-500">Eventos de exemplo. Datas, horários e locais ainda serão confirmados.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">

         
          <article className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Esportes</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">Interclasse</h2>
            <p className="mb-5 mt-3 text-sm leading-6 text-slate-600">
              Torça pela sua turma e participe das competições esportivas da escola. Um momento de integração, trabalho em equipe e muita diversão.
            </p>
            <div className="mt-auto space-y-2 border-t border-slate-200 pt-4 text-sm text-slate-600">
              <p><strong>Data:</strong> A confirmar</p>
              <p><strong>Horário:</strong> A confirmar</p>
              <p><strong>Local:</strong> A confirmar</p>
            </div>
          </article>

          
          <article className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Tecnologia e inovação</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">FETIN</h2>
            <p className="mb-5 mt-3 text-sm leading-6 text-slate-600">
              Conheça projetos criativos, experiências e ideias desenvolvidas pelos estudantes. Venha compartilhar conhecimentos e descobrir novas tecnologias.
            </p>
            <div className="mt-auto space-y-2 border-t border-slate-200 pt-4 text-sm text-slate-600">
              <p><strong>Data:</strong> A confirmar</p>
              <p><strong>Horário:</strong> A confirmar</p>
              <p><strong>Local:</strong> A confirmar</p>
            </div>
          </article>

          
          <article className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Respeito e convivência</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">Palestra sobre bullying</h2>
            <p className="mb-5 mt-3 text-sm leading-6 text-slate-600">
              Uma conversa sobre empatia, respeito e prevenção ao bullying. Vamos aprender a reconhecer situações de violência e construir uma escola mais acolhedora.
            </p>
            <div className="mt-auto space-y-2 border-t border-slate-200 pt-4 text-sm text-slate-600">
              <p><strong>Data:</strong> A confirmar</p>
              <p><strong>Horário:</strong> A confirmar</p>
              <p><strong>Local:</strong> A confirmar</p>
            </div>
          </article>

          
          <article className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Arte e cultura</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">Feira Cultural</h2>
            <p className="mb-5 mt-3 text-sm leading-6 text-slate-600">
              Um encontro para valorizar os talentos dos alunos, com apresentações, exposições de trabalhos e atividades culturais para toda a comunidade escolar.
            </p>
            <div className="mt-auto space-y-2 border-t border-slate-200 pt-4 text-sm text-slate-600">
              <p><strong>Data:</strong> A confirmar</p>
              <p><strong>Horário:</strong> A confirmar</p>
              <p><strong>Local:</strong> A confirmar</p>
            </div>
          </article>
        </div>
      </section>

      <footer className="bg-blue-950 p-2">
        <p className="text-center text-sm font-bold text-white">
          Escola Estadual Sanico Teles
        </p>
      </footer>
    </main>
  );
}
