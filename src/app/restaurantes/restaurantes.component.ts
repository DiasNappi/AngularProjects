import { OfertaService } from "./../ofertas.service";
import { Oferta } from "./../shared/oferta.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-restaurantes",
  templateUrl: "./restaurantes.component.html",
  styleUrls: ["./restaurantes.component.css"],
  providers: [OfertaService],
})
export class RestaurantesComponent implements OnInit {
  public ofertas: Oferta[];

  constructor(public ofertaService: OfertaService) {}

  ngOnInit() {
    this.ofertaService
      .getOfertasCategoria("restaurante")
      .then((ofertas: Oferta[]) => (this.ofertas = ofertas));
  }
}
