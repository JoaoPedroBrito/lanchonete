import { Categoria } from "./categoria";

export interface Produto {
    codigo: number;
    nome: string;
    descricao: string;
    valor: number;
    categoria: Categoria;
}