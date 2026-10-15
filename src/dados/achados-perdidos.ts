export const categorias = ["Material escolar", "Roupas", "Acessórios", "Outros"];
export type Objeto = {
  id: string;
  nome: string;
  categoria: string;
  local: string;
  data: string;
  descricao: string;
  retirada: string;
  foto: string;
  devolvido: boolean;
};
const chave = "achados-perdidos-escolar-v1";
const exemplos: Objeto[] = [
  { id: "exemplo-mochila", nome: "Mochila Roxa", categoria: "Material escolar", local: "Biblioteca", data: "2026-08-19", descricao: "A mochila tem um pompom roxo na lateral e estava em um canto no chão perto dos livros.", retirada: "", foto: "/imagens/mochila-roxa.jpeg", devolvido: false },
  { id: "exemplo-chaveiro", nome: "Chaveiro", categoria: "Acessórios", local: "Quadra", data: "2026-08-24", descricao: "Tem duas chaves e três chaveiros: um de morango, outro de coração rosa e um da Torre Eiffel.", retirada: "", foto: "/imagens/chaveiro.png", devolvido: false },
  { id: "exemplo-moletom", nome: "Moletom Azul Claro", categoria: "Roupas", local: "Sala de aula", data: "2026-08-19", descricao: "Foi encontrado na sala 20, caído no chão perto da mesa do professor. O moletom não tem nenhum desenho.", retirada: "", foto: "/imagens/moletom-azul.png", devolvido: false },
];
export function hoje() {
  const data = new Date();
  return `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, "0")}-${String(data.getDate()).padStart(2, "0")}`;
}
export function dataValida(data: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) return false;
  const valor = new Date(`${data}T12:00:00Z`);
  return !Number.isNaN(valor.getTime()) && valor.toISOString().slice(0, 10) === data;
}
export function carregarObjetos(): { objetos: Objeto[]; erro: string } {
  try {
    const salvo = localStorage.getItem(chave);
    if (salvo === null) return { objetos: exemplos, erro: "" };
    const objetos: unknown = JSON.parse(salvo);
    if (!Array.isArray(objetos) || !objetos.every(item => item &&
      ["id", "nome", "categoria", "local", "data", "descricao", "retirada", "foto"].every(campo => typeof item[campo] === "string") &&
      dataValida(item.data) && typeof item.devolvido === "boolean")) throw new Error("Dados inválidos");
    return { objetos, erro: "" };
  } catch {
    return { objetos: [], erro: "Não foi possível carregar os registros salvos. Verifique o armazenamento do navegador antes de tentar novamente." };
  }
}
export function salvarObjetos(objetos: Objeto[]) {
  localStorage.setItem(chave, JSON.stringify(objetos));
}
const normalizar = (texto: string) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR").trim();
export function filtrarObjetos(objetos: Objeto[], filtros: { busca: string; categoria: string; local: string; data: string; status: string }) {
  return objetos.filter(objeto =>
    normalizar(`${objeto.nome} ${objeto.descricao}`).includes(normalizar(filtros.busca)) &&
    (!filtros.categoria || objeto.categoria === filtros.categoria) &&
    (!filtros.local || objeto.local === filtros.local) &&
    (!filtros.data || objeto.data === filtros.data) &&
    (!filtros.status || objeto.devolvido === (filtros.status === "devolvido"))
  ).sort((a, b) => b.data.localeCompare(a.data));
}
