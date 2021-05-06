import { Observable } from "rxjs/Observable";
import { URL_API } from "./shared/app.api";
import { Injectable } from "@angular/core";
import { Http, HttpModule } from "@angular/http";
import { Oferta } from "./shared/oferta.model";
import "rxjs/add/operator/toPromise";
@Injectable()
export class OfertaService {
  constructor(private http: Http) {}

  public getOferta(): Promise<Oferta[]> {
    return this.http
      .get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  public getOfertasCategoria(categoria: string): Promise<Oferta[]> {
    return this.http
      .get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  public getOfertasPorId(id: number): Promise<Oferta> {
    return this.http
      .get(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta.json()[0]);
  }

  public getComoUsarOfertasPorId(id: number): Promise<string> {
    return this.http
      .get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta.json()[0].descricao;
      });
  }

  public getOndeFicaOfertasPorId(id: number): Promise<string> {
    return this.http
      .get(`${URL_API}/onde-fica?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta.json()[0].descricao;
      });
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http
      .get(`${URL_API}/ofertas?descricao_oferta=${termo}`)
      .map((reposta: any) => reposta.json());
  }
}
