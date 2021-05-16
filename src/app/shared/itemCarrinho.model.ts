export class ItemCarrinho {
  constructor(
    public id: number,
    public img: object,
    public valor: number,
    public titulo: string,
    public descricao_oferta: string,
    public quantidade: number
  ) {}
}
