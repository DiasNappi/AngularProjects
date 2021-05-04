import { routes } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { TopoComponent } from "./topo/topo.component";
import { HomeComponent } from "./home/home.component";
import { RodapeComponent } from "./rodape/rodape.component";
import { DiversaoComponent } from "./diversao/diversao.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { RouterModule } from "@angular/router";
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    DiversaoComponent,
    RestaurantesComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
  ],
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
