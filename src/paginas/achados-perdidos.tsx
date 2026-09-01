import { Link } from "react-router-dom";

export default function AchadosPerdidos() {
  return (

    <main className="flex min-h-screen flex-col bg-white text-[#172033]">
      
      <nav className="bg-blue-700 px-5 py-3 shadow-md">
        
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-5">
          <img src="/imagens/logo-sanico.jpg" alt="Logo da escola" className="h-12 w-12 rounded-full object-cover" />

          <div className="hidden items-center gap-6 text-sm font-semibold text-white md:flex">
            <Link to="/" className="hover:underline">Início</Link>
            <Link to="/eventos" className="hover:underline">Eventos</Link>
            <Link to="/clubes" className="hover:underline">Clubes</Link>
            <Link to="/agenda" className="hover:underline">Agenda Escolar</Link>
            <Link to="/achados-e-perdidos" className="underline underline-offset-4">Achados e Perdidos</Link>
          </div>

          <div className="flex items-center gap-2 text-white">
            <span className="hidden text-xs sm:block">Olá, Jian Teles</span>
            <img src="/imagens/perfil-tcc.png" alt="Foto do perfil" className="h-9 w-9 rounded-full object-cover" />
          </div>
        
        </div>

      </nav>

      <section className="mx-auto w-full max-w-262.5 flex-1 px-4.5 py-7.5 sm:px-8 sm:py-10">
        <
          div className="flex items-start justify-start gap-3 text-left sm:justify-center">
         

          <div>
            <h1 className="text-[25px] font-bold text-[#1554ad] sm:text-[30px]">Achados e Perdidos</h1>
            <p className="mt-1.25 max-w-130 text-slate-500">Encontre objetos perdidos ou anuncie algo que você encontrou na escola.</p>
          </div>

        </div>

        <div className="mt-8.75 grid grid-cols-1 gap-2.5 min-[601px]:grid-cols-2 min-[851px]:grid-cols-[minmax(220px,2fr)_repeat(3,1fr)_auto]">
          
          <input className="min-w-0 rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-700 min-[601px]:col-span-2 min-[851px]:col-span-1" type="text" placeholder="🔍  Buscar objeto..." />
          
          <select className="min-w-0 rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-700" defaultValue="">
            <option value="" disabled>Categoria</option>
            <option>Material escolar</option>
            <option>Roupas</option>
            <option>Acessórios</option>
          </select>
          
          <select className="min-w-0 rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-700" defaultValue="">
            <option value="" disabled>Local</option>
            <option>Biblioteca</option>
            <option>Quadra</option>
            <option>Sala de aula</option>
            <option>refeitório</option>
            <option>laboratório de informática</option>
            <option>laboratório de quimica</option>
            <option>auditório</option>
            <option>sala de video</option>
            <option>sala maker</option>
            <option>banheiro</option>
            

          </select>

          <input className="min-w-0 rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-700" type="date" aria-label="Filtrar por data" />
          
          <button className="rounded-lg bg-[#1554ad] px-4 py-2.5 font-bold text-white min-[601px]:col-span-2 min-[851px]:col-span-1">Encontrei um objeto!</button>
        
        </div>

        <h2 className="mb-5 mt-10.5 text-[21px] font-bold text-[#1554ad]">Objetos encontrados recentemente:</h2>

        <div className="grid gap-4.5">
          
          <div className="grid grid-cols-1 gap-6 rounded-[14px] border border-[#dbe3ef] bg-white p-5 shadow-[0_5px_18px_rgba(30,64,175,0.07)] min-[601px]:grid-cols-[1fr_180px]">
            
            <div>
              <h3 className="mb-3 text-lg font-bold text-[#1554ad]">Mochila Roxa</h3>
              <p className="mt-1.75 leading-[1.45]"><strong>Data:</strong> 19/08/2026</p>
              <p className="mt-1.75 leading-[1.45]"><strong>Local:</strong> Foi encontrada na Biblioteca.</p>
              <p className="mt-1.75 leading-[1.45]"><strong>Descrição:</strong> A mochila tem um chaveiro de coração e estava em um canto no chão perto dos livros.</p>
            </div>

            <div className="flex min-h-32.5 items-center justify-center overflow-hidden rounded-xl bg-slate-100 sm:min-h-36.25">
              <img className="h-27.5 w-27.5 rounded-full object-cover" src="/imagens/logo-sanico.jpg" alt="Logo da Escola Sanico Teles" />
            </div>

          </div>

          <div className="grid grid-cols-1 gap-6 rounded-[14px] border border-[#dbe3ef] bg-white p-5 shadow-[0_5px_18px_rgba(30,64,175,0.07)] min-[601px]:grid-cols-[1fr_180px]">
            
            <div>
              <h3 className="mb-3 text-lg font-bold text-[#1554ad]">Chaveiro</h3>
              <p className="mt-1.75 leading-[1.45]"><strong>Data:</strong> 24/08/2026</p>
              <p className="mt-1.75 leading-[1.45]"><strong>Local:</strong> Foi encontrado na quadra da escola.</p>
              <p className="mt-1.75 leading-[1.45]"><strong>Descrição:</strong> Tem duas chaves e três chaveiros: um de morango, outro de coração rosa e um da Torre Eiffel.</p>
            </div>

            <div className="flex min-h-32.5 items-center justify-center overflow-hidden rounded-xl bg-slate-100 sm:min-h-36.25">
              <img className="h-27.5 w-27.5 rounded-full object-cover" src="/imagens/logo-sanico.jpg" alt="Logo da Escola Sanico Teles" />
            </div>

          </div>

          <div className="grid grid-cols-1 gap-6 rounded-[14px] border border-[#dbe3ef] bg-white p-5 shadow-[0_5px_18px_rgba(30,64,175,0.07)] min-[601px]:grid-cols-[1fr_180px]">
            
            <div>
              <h3 className="mb-3 text-lg font-bold text-[#1554ad]">Moletom Azul Claro</h3>
              <p className="mt-1.75 leading-[1.45]"><strong>Data:</strong> 19/08/2026</p>
              <p className="mt-1.75 leading-[1.45]"><strong>Local:</strong> Foi encontrado na sala 20.</p>
              <p className="mt-1.75 leading-[1.45]"><strong>Descrição:</strong> Encontrei ele caído no chão perto da mesa do professor. O moletom não tem nenhum desenho.</p>
            </div>

            <div className="flex min-h-32.5 items-center justify-center overflow-hidden rounded-xl bg-slate-100 sm:min-h-36.25">
              <img className="h-27.5 w-27.5 rounded-full object-cover" src="/imagens/logo-sanico.jpg" alt="Logo da Escola Sanico Teles" />
            </div>

          </div>

        </div>

      </section>

      <footer className="bg-[#172e70] p-3 text-center text-xs text-white">
        <p>© 2026 Escola Estadual Sanico Teles · Portal Escolar</p>
        <p>Desenvolvido pelos alunos do Técnico em Informática</p>
      </footer>

    </main>
  );
}
