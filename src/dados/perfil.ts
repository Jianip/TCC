import type { Usuario } from "./autenticacao";

export type Perfil = { nome: string; email: string; foto: string };
let usuario: Usuario | null = null;
export function definirUsuarioPerfil(atual: Usuario | null) { usuario = atual; }
const chave = () => `perfil-escolar:${usuario?.matricula}`;
export function pegarPerfil(): Perfil {
  const padrao = { nome: usuario?.nome || "Aluno", email: usuario?.email || "", foto: "/imagens/perfil-tcc.png" };
  if (!usuario) return padrao;
  try {
    const salvo = JSON.parse(localStorage.getItem(chave()) || "null");
    return salvo && typeof salvo.nome === "string" && typeof salvo.email === "string" && typeof salvo.foto === "string" ? salvo : padrao;
  } catch { return padrao; }
}
export function salvarPerfil(perfil: Perfil) {
  if (usuario) localStorage.setItem(chave(), JSON.stringify(perfil));
}
