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
      .get(`${URL_API}?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  public getOfertasCategoria(categoria: string): Promise<Oferta[]> {
    return this.http
      .get(`${URL_API}?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  public getOfertasPorId(id: number): Promise<Oferta> {
    return this.http
      .get(`${URL_API}?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta.json()[0]);
  }

  // public getOferta2(): Promise<Oferta[]>{
  //     return new Promise((resolve, reject ) => {
  //         console.log('processamento')
  //         let deucerto = true
  //         if (deucerto){
  //         setTimeout(() => resolve(this.ofertas), 5000)
  //         }
  //         else{
  //         reject({mensagem_erro:404, mensagem :'Servidor não encontrado Yow'});
  //         }

  //     })
  //     .then((ofertas : Oferta[]) => {
  //         console.log('yow')
  //         return ofertas
  //     })
  //     .then((ofertas : Oferta[]) => {
  //         console.log('yow2')
  //         return new Promise((resolve2, reject2) => {
  //             setTimeout(() => {resolve2(ofertas)}, 5000)
  //         })
  //     })
  //     .then((ofertas : Oferta[]) => {
  //         console.log('yow3')
  //         return ofertas
  //     })
  // }
}
