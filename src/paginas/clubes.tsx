import { Link } from "react-router-dom";
import { pegarPerfil } from "../dados/perfil";

export default function Clubes() {
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
            <Link to="/eventos" className="hover:underline">
              Eventos
            </Link>
            <Link to="/clubes" className="underline underline-offset-4">
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

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Participe
          </span>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Meus Clubes</h1>
          
          <p className="mt-3 leading-relaxed text-slate-500">
            Conheça os clubes da escola, descubra novas atividades e encontre o
            lugar ideal para desenvolver seus talentos.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2">

          <div className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            
            <div className="" />
            
            <h2 className="text-xl font-bold text-slate-900">
              Clube de Esportes
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Pratique diferentes modalidades, desenvolva o trabalho em equipe e
              participe dos treinos e competições da escola.
            </p>

            <Link to="/clubes/esportes" aria-label="Saiba mais sobre Clube de Esportes" className="mt-5 inline-flex items-center text-sm font-bold text-blue-700 hover:underline">
              Saiba mais{" "}

              <span className="ml-2 transition group-hover:translate-x-1">
                →
              </span>

            </Link>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            
            <div className="" />

            <h2 className="text-xl font-bold text-slate-900">Taekwondo</h2>
            
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Aprenda técnicas de defesa, disciplina e respeito enquanto
              fortalece o corpo e a mente.
            </p>

            <Link to="/clubes/taekwondo" aria-label="Saiba mais sobre Taekwondo" className="mt-5 inline-flex items-center text-sm font-bold text-blue-700 hover:underline">
              Saiba mais{" "}
              <span className="ml-2 transition group-hover:translate-x-1">
                →
              </span>

            </Link>

          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
           
            <div className="" />

            <h2 className="text-xl font-bold text-slate-900">
              Clube de Robótica
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Crie projetos, programe robôs e transforme ideias em soluções
              usando tecnologia e muita criatividade.
            </p>

            <Link to="/clubes/robotica" aria-label="Saiba mais sobre Clube de Robótica" className="mt-5 inline-flex items-center text-sm font-bold text-blue-700 hover:underline">
              Saiba mais{" "}
              
              <span className="ml-2 transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            
            <div className="" />

            <h2 className="text-xl font-bold text-slate-900">
              Clube de Leitura
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Descubra novas histórias, compartilhe suas leituras favoritas e
              participe de conversas inspiradoras.
            </p>

            <Link to="/clubes/leitura" aria-label="Saiba mais sobre Clube de Leitura" className="mt-5 inline-flex items-center text-sm font-bold text-blue-700 hover:underline">
              Saiba mais{" "}
              <span className="ml-2 transition group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

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
