
import { Link } from "react-router-dom";

export default function Inicio() {
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
            <Link to="/" className="underline underline-offset-4">
              Início
            </Link>
            <Link to="/eventos" className="hover:underline">Eventos</Link>
            <Link to="/clubes" className="hover:underline">Clubes</Link>
            <Link to="/agenda" className="hover:underline">Agenda Escolar</Link>
            <Link to="/achados-e-perdidos" className="hover:underline">
              Achados e Perdidos
            </Link>
          </div>



          <div className="flex items-center gap-2 text-white">
            <span className="hidden text-xs sm:block">Olá, Jian Teles</span>
            <img
              src="/imagens/perfil-tcc.png"
              alt="Foto do perfil"
              className="h-9 w-9 rounded-full object-cover"
            />
          </div>


        </div>


      </nav>


      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-14 px-6 py-12 sm:px-10">
        
        
        <div className="flex items-center justify-between gap-8">


          <div>
            <h1 className="text-xl font-bold text-blue-700 sm:text-2xl">
              Bom te ver por aqui, [Nome do Aluno]!
            </h1>
            <p className="mt-2 text-sm sm:text-base">
              Confira seus horários, recados e tarefas do dia para manter tudo sob controle.
            </p>
          </div>

          <img
            src="/imagens/logo-sanico.jpg"
            alt="Logo da Escola Estadual Sanico Teles"
            className="hidden h-36 w-40 shrink-0 rounded-lg object-contain sm:block"
          />
          
        </div>

        
      </section>



      <footer className="bg-blue-950 p-2">
        <p className="text-center text-sm font-bold text-white">Escola Estadual Sanico Teles</p>
      </footer>
    </main>


  );
}
