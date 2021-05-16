import { Oferta } from "./shared/oferta.model";
import { ItemCarrinho } from "./shared/itemCarrinho.model";
import { OuterSubscriber } from "rxjs/OuterSubscriber";
export class CarrinhoService {
  public itens: ItemCarrinho[] = [];

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public incluirItem(oferta: Oferta) {
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.valor,
      oferta.titulo,
      oferta.descricao_oferta,
      1
    );

    let ItemEncontrado = this.itens.find(
      (item: ItemCarrinho) => item.id === oferta.id
    );

    if (ItemEncontrado) {
      ItemEncontrado.quantidade += 1;
    } else {
      this.itens.push(itemCarrinho);
    }
  }

  public precoTotal(): number {
    let total: number = 0;

    this.itens.map((item: ItemCarrinho) => {
      total = total + item.valor * item.quantidade;
    });
    return total;
  }

  public adicionarCarrinho(item: ItemCarrinho) {
    item.quantidade += 1;
  }

  public diminuirCarrinho(item: ItemCarrinho) {
    if (item.quantidade === 1) {
      this.itens.splice(this.itens.indexOf(item), 1);
    } else {
      item.quantidade -= 1;
    }
  }

  public limparCarrinho() {
    this.itens = [];
  }
}
