import { ItemCarrinho } from "./itemCarrinho.model";
export class Pedido {
  constructor(
    public endereco: string,
    public complemento: string,
    public numero: string,
    public formaPagamento: string,
    public itens: ItemCarrinho[]
  ) {}
}
