import { OfertaService } from "./../ofertas.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-oferta",
  templateUrl: "./oferta.component.html",
  styleUrls: ["./oferta.component.css"],
  providers: [OfertaService],
})
export class OfertaComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertaService
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.params["id"]);
    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro))};  //Toda vez que o id é alterado ele chama a função console.log
  }
}
