import type { Usuario } from "./autenticacao";

// Ativado apenas no build de demonstração usado pela Vercel.
export const modoDemonstracao = import.meta.env.VITE_MODO_DEMONSTRACAO === "true";

export const usuarioDemonstracao: Usuario = {
  id: 0,
  nome: "Aluno",
  matricula: "demonstracao",
  email: "",
};
