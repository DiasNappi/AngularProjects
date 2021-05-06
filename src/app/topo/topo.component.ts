import { OfertaService } from "./../ofertas.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-topo",
  templateUrl: "./topo.component.html",
  styleUrls: ["./topo.component.css"],
  providers: [OfertaService],
})
export class TopoComponent implements OnInit {
  constructor(private OfertaService: OfertaService) {}

  ngOnInit() {}

  public pesquisa(termoDaPesquisa: string): void {
    console.log(termoDaPesquisa);
  }
}
