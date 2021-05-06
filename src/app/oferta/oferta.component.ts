import { Oferta } from "./../shared/oferta.model";
import { OfertaService } from "./../ofertas.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
    this.ofertaService
      .getOfertasPorId(this.route.snapshot.params["id"])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      });
    // this.route.params.subscribe(
    //   (parametro: any) => console.log(parametro),
    //   (erro: any) => console.log("deu erro"),
    //   () => console.log("completou")
    // );

    // let tempo = Observable.interval(500);
    // this.tempoObservableSub = tempo.subscribe((intervalo: number) => {
    //   console.log(intervalo);
    // });

    // let observar = Observable.create((parametro: Observer<string>) => {
    //   parametro.next("yow");
    //   parametro.error("deu ruim");
    //   // parametro.complete();
    // });

    //   this.observarObservableSub = observar.subscribe(
    //     (parametro: string) => console.log(parametro),
    //     (error: string) => console.log(error),
    //     () => console.log("deu bom")
    //   );
  }
}
