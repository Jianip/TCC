import { Link } from "react-router-dom";


const dias = [
  "", "", "", "1", "2", "3", "4",
  "5", "6", "7", "8", "9", "10", "11",
  "12", "13", "14", "15", "16", "17", "18",
  "19", "20", "21", "22", "23", "24", "25",
  "26", "27", "28", "29", "30", "31", "",
];


export default function Agenda() {
  return (

    <main className="flex min-h-screen flex-col bg-slate-50 text-slate-900">


      <nav className="bg-blue-700 px-5 py-3 shadow-md">

        <div className="mx-auto flex max-w-6xl items-center justify-between gap-5">
          <img src="/imagens/logo-sanico.jpg" alt="Logo da escola" className="h-12 w-12 rounded-full object-cover" />

          <div className="hidden items-center gap-6 text-sm font-semibold text-white md:flex">
            
            <Link to="/" className="hover:underline">Início</Link>
            <Link to="/eventos" className="hover:underline">Eventos</Link>
            <Link to="/clubes" className="hover:underline">Clubes</Link>
            <Link to="/agenda" className="underline underline-offset-4">Agenda Escolar</Link>
            <Link to="/achados-e-perdidos" className="hover:underline">Achados e Perdidos</Link>
          
          </div>

          <div className="flex items-center gap-2 text-white">

            <span className="hidden text-xs sm:block">Olá, Jian Teles</span>
            <img src="/imagens/perfil-tcc.png" alt="Foto do perfil" className="h-9 w-9 rounded-full object-cover" />
          
          </div>
        </div>

      </nav>


      <section className="mx-auto w-full max-w-7xl flex-1 px-4 py-7 min-[801px]:p-10">

        <p className="text-sm font-bold tracking-[0.2em] text-blue-600">ORGANIZE-SE</p>

        <h1 className="mt-2 text-4xl font-bold">Meu calendário</h1>

        <p className="mt-2 text-slate-500">
          Crie sua própria rotina com compromissos, lembretes, avaliações e atividades pessoais.
        </p>

        <div className="mt-9 flex flex-col items-start justify-between gap-5 min-[801px]:flex-row min-[801px]:items-center">
          
          <button className="w-fit rounded-xl bg-linear-to-r bg-blue-600 px-5 py-3 font-bold text-white shadow-sm">
            ＋ Novo compromisso
          </button>

          <div className="flex items-center gap-2">
            <button className="h-12 w-12 rounded-xl border border-slate-200 bg-white text-2xl">‹</button>
            <div className="rounded-xl border border-slate-200 bg-white px-8 py-3 font-bold">Julho 2026</div>
            <button className="h-12 w-12 rounded-xl border border-slate-200 bg-white text-2xl">›</button>
          </div>

        </div>

        <div className="mt-6 grid items-start gap-6 min-[801px]:grid-cols-[2fr_1fr]">

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            
            <div className="grid grid-cols-7 border-b border-slate-200 text-center text-xs font-bold sm:text-sm">
              {["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"].map((dia) => (
                <div key={dia} className="py-4">{dia}</div>
              ))}
            </div>

            <div className="grid grid-cols-7">
              {dias.map((dia, index) => (
                <div
                  key={index}
                  className="min-h-17.5 border-b border-r border-slate-200 p-2 text-sm min-[801px]:min-h-28 min-[801px]:p-3"
                >
                  {dia === "12" ? (
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">12</span>
                  ) : (
                    dia
                  )}
                </div>
              ))}
            </div>

          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            
            <div className="flex items-center gap-3">
              
              <h2 className="text-xl font-bold">Próximos compromissos</h2>
            </div>

            <p className="mt-1 text-sm text-slate-500">Monte sua agenda pessoal</p>

            <div className="mt-6 rounded-xl border border-dashed border-slate-300 px-4 py-7 text-center text-sm text-slate-500">
              Nenhum compromisso futuro.
            </div>

          </div>
          
        </div>
      </section>

      <footer className="bg-blue-950 p-2">
        <p className="text-center text-sm font-bold text-white">Escola Estadual Sanico Teles</p>
      </footer>
    </main>
  );
}
