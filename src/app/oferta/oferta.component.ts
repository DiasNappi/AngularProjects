import { Oferta } from "./../shared/oferta.model";
import { OfertaService } from "./../ofertas.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import "rxjs/Rx";
import { Observer, Subscription } from "rxjs/Rx";

@Component({
  selector: "app-oferta",
  templateUrl: "./oferta.component.html",
  styleUrls: ["./oferta.component.css"],
  providers: [OfertaService],
})
export class OfertaComponent implements OnInit {
  private tempoObservableSub: Subscription;
  private observarObservableSub: Subscription;
  public oferta: Oferta;
  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertaService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((parametros: Params) => {
      this.ofertaService
        .getOfertasPorId(parametros.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta;
        });
    });
  }
}
