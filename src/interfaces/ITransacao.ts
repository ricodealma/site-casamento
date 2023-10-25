export interface ITransacao {
    id?: number;
    idPresenteEsperado: number;
    idAmigo?: number;
    numeroCotasDoadas: number;
    valorTotal: number;
}