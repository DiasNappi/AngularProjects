import { OfertaService } from "./../ofertas.service";
import { Oferta } from "./../shared/oferta.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-diversao",
  templateUrl: "./diversao.component.html",
  styleUrls: ["./diversao.component.css"],
  providers: [OfertaService],
})
export class DiversaoComponent implements OnInit {
  public ofertas: Oferta[];

  constructor(public ofertaService: OfertaService) {}

  ngOnInit() {
    this.ofertaService
      .getOfertasCategoria("diversao")
      .then((ofertas: Oferta[]) => (this.ofertas = ofertas));
  }
}
