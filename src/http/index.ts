import axios from "axios";
import { IAmigo } from "../interfaces/IAmigo";
import { IPresenteEsperado } from "../interfaces/IPresenteEsperado";

const http = axios.create({
    baseURL: 'https://localhost:7298',
})

export default http

export const selecionarPresentes = async () => {
    const resposta = await http.get<IPresenteEsperado[]>(`PresenteEsperado`)
    return resposta.data
  }

  export const CriarTransacao = async (amigo: IAmigo) => {
    const resposta = await http.post<IAmigo>(`CriarTransacao`, amigo)
    return resposta.data
  }