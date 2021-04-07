import { Oferta } from './../shared/oferta.model';
import { OfertaService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertaService ]
})
export class HomeComponent implements OnInit {
  public ofertas: Oferta[]

  constructor(private ofertasService: OfertaService) { }

  ngOnInit() {
    this.ofertasService.getOferta()
    .then(( ofertas: Oferta[]) =>{
      this.ofertas = ofertas
    })
    .catch((parametro: any) => {
      console.log(parametro)
    })
    }
  }


