import { Link, useParams } from "react-router-dom";

const clubes = [
  {
    id: "esportes",
    nome: "Clube de Esportes",
    imagem: "/imagens/logo-sanico.jpg",
    descricao: "Um espaço para praticar diferentes modalidades, desenvolver o trabalho em equipe e participar dos treinos e competições da escola.",
    atividades: "Treinos, jogos coletivos e atividades para desenvolver coordenação, cooperação e respeito aos colegas.",
    dias: "A confirmar",
    horario: "A confirmar",
    local: "A confirmar",
  },
  {
    id: "taekwondo",
    nome: "Taekwondo",
    imagem: "/imagens/logo-sanico.jpg",
    descricao: "Aprenda sobre disciplina e respeito enquanto desenvolve o equilíbrio, a concentração e o condicionamento físico.",
    atividades: "Alongamentos, exercícios de equilíbrio e prática orientada dos movimentos e fundamentos do taekwondo.",
    dias: "A confirmar",
    horario: "A confirmar",
    local: "A confirmar",
  },
  {
    id: "robotica",
    nome: "Clube de Robótica",
    imagem: "/imagens/logo-sanico.jpg",
    descricao: "Explore a tecnologia e a criatividade para transformar ideias em projetos e resolver desafios em equipe.",
    atividades: "Montagem de protótipos, introdução à programação e desenvolvimento de projetos de robótica.",
    dias: "A confirmar",
    horario: "A confirmar",
    local: "A confirmar",
  },
  {
    id: "leitura",
    nome: "Clube de Leitura",
    imagem: "/imagens/logo-sanico.jpg",
    descricao: "Descubra novas histórias e compartilhe suas leituras favoritas em um espaço de conversa e imaginação.",
    atividades: "Rodas de leitura, troca de indicações de livros e conversas sobre personagens, autores e histórias.",
    dias: "A confirmar",
    horario: "A confirmar",
    local: "A confirmar",
  },
];

export default function DetalhesClube() {
  const { clube } = useParams();
  const escolhido = clubes.find((item) => item.id === clube);

  if (!escolhido) {
    return (
      <main className="min-h-screen bg-white p-10 text-slate-900">
        <h1 className="text-2xl font-bold">Clube não encontrado</h1>
        <Link to="/clubes" className="mt-5 inline-block text-blue-700 underline">Voltar aos clubes</Link>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <nav className="bg-blue-700 px-6 py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link to="/clubes" className="font-bold text-white hover:underline">← Voltar aos clubes</Link>
          <img src="/imagens/logo-sanico.jpg" alt="Logo da escola" className="h-12 w-12 rounded-full object-cover" />
        </div>
      </nav>

      <section className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        <p className="text-sm font-bold tracking-widest text-blue-700">CLUBES DA ESCOLA</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{escolhido.nome}</h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">{escolhido.descricao}</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <figure>
            <img src={escolhido.imagem} alt={"Ilustração do " + escolhido.nome} className="aspect-[4/3] w-full rounded-2xl object-cover" />
            <figcaption className="mt-2 text-sm text-slate-500">Imagem ilustrativa do clube.</figcaption>
          </figure>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Horários e local</h2>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm text-slate-500">Dias dos encontros</dt>
                <dd className="mt-1 font-semibold">{escolhido.dias}</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">Horário</dt>
                <dd className="mt-1 font-semibold">{escolhido.horario}</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">Local</dt>
                <dd className="mt-1 font-semibold">{escolhido.local}</dd>
              </div>
            </dl>
            <p className="mt-6 border-t border-slate-200 pt-4 text-sm text-slate-600">A programação oficial ainda não foi cadastrada. Consulte a coordenação para confirmar os encontros.</p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold">Conheça as atividades</h2>
          <p className="mt-3 leading-7 text-slate-600">{escolhido.atividades}</p>
          <h2 className="mt-6 text-xl font-bold">Quer participar?</h2>
          <p className="mt-3 leading-7 text-slate-600">Procure a coordenação da escola para saber sobre inscrições, vagas e materiais necessários.</p>
        </div>
      </section>

      <footer className="bg-blue-950 p-3 text-center text-sm font-bold text-white">Escola Estadual Sanico Teles</footer>
    </main>
  );
}
