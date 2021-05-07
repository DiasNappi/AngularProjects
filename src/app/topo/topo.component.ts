import { Oferta } from "./../shared/oferta.model";
import { Observable } from "rxjs/Observable";
import { OfertaService } from "./../ofertas.service";
import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-topo",
  templateUrl: "./topo.component.html",
  styleUrls: ["./topo.component.css"],
  providers: [OfertaService],
})
export class TopoComponent implements OnInit {
  public ofertas: Observable<Oferta[]>;

  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private OfertaService: OfertaService) {}

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((termo: string) => {
        if (termo.trim() === "") {
          return Observable.of<Oferta[]>([]);
        }
        return this.OfertaService.pesquisaOfertas(termo); //Retornando Oferta[]
      })
      .catch((erro: any) => {
        console.log(erro);
        return Observable.of<Oferta[]>([]);
      });
  }

  public pesquisa(termoDaPesquisa: string): void {
    this.subjectPesquisa.next(termoDaPesquisa);
  }

  public limpPesquisa() {
    this.subjectPesquisa.next("");
  }
}
