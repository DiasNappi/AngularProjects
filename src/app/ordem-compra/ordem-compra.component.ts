import { Pedido } from "./../shared/pedido.model";
import { OrdemCompraService } from "./../ordem-compra.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ordem-compra",
  templateUrl: "./ordem-compra.component.html",
  styleUrls: ["./ordem-compra.component.css"],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  public idPedidoCompra: number;

  public pedido = new Pedido("", "", "", "");

  public endereco: string = "";
  public numero: string = "";
  public complemento: string = "";
  public formaPagamento: string = "";

  public enderecoValido: boolean = false;
  public numeroValido: boolean = false;
  public complementoValido: boolean = false;
  public formaPagamentoValido: boolean = false;

  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementoEstadoPrimitivo: boolean = true;
  public formaPagamentoEstadoPrimitivo: boolean = true;

  public formValido: string = "disabled";

  constructor(private ordemCompraService: OrdemCompraService) {}

  ngOnInit() {}

  public atualizaEndereco(endereco: string) {
    this.endereco = endereco;

    this.enderecoEstadoPrimitivo = false;

    if (endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
    this.atualizaFormValido();
  }

  public atualizaNumero(numero: string) {
    this.numero = numero;
    this.numeroEstadoPrimitivo = false;

    if (numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
    this.atualizaFormValido();
  }

  public atualizaComplemento(complemento: string) {
    this.complemento = complemento;
    this.complementoEstadoPrimitivo = false;

    if (complemento.length > 0) {
      this.complementoValido = true;
    } else {
      this.complementoValido = false;
    }
    this.atualizaFormValido();
  }

  public atualizaFormaPagamento(formaPagamento: string) {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoEstadoPrimitivo = false;

    if (formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
    this.atualizaFormValido();
  }

  public atualizaFormValido() {
    if (this.enderecoValido && this.formaPagamentoValido && this.numeroValido) {
      this.formValido = "";
    } else {
      this.formValido = "disabled";
    }
  }

  public confirmarCompra() {
    this.pedido.endereco = this.endereco;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagamento;
    this.pedido.numero = this.numero;

    this.ordemCompraService
      .efetivarCompra(this.pedido)
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido;
      });
  }
}
