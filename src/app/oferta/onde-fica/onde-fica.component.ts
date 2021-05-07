import { OfertaService } from "./../../ofertas.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-onde-fica",
  templateUrl: "./onde-fica.component.html",
  styleUrls: ["./onde-fica.component.css"],
  providers: [OfertaService],
})
export class OndeFicaComponent implements OnInit {
  public ondeFica: string = "";
  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertaService
  ) {}

  ngOnInit() {
    this.route.parent.params.subscribe((parametros: Params) => {
      this.ofertaService
        .getOndeFicaOfertasPorId(parametros.id)
        .then((resposta: string) => {
          this.ondeFica = resposta;
        });
    });
  }
}
