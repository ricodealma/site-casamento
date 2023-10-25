import { ITransacao } from "./ITransacao"

export interface IAmigo {
    id?: number
    nome: string
    telefone?: string
    mensagem?: string;
    transacoes: ITransacao[]
}