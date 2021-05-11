import { DescricaoReduzida } from "./util/descricao-reduzida.pipe";
import { routes } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { TopoComponent } from "./topo/topo.component";
import { HomeComponent } from "./home/home.component";
import { RodapeComponent } from "./rodape/rodape.component";
import { DiversaoComponent } from "./diversao/diversao.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { RouterModule } from "@angular/router";
import { OfertaComponent } from "./oferta/oferta.component";
import { ComoUsarComponent } from "./oferta/como-usar/como-usar.component";
import { OndeFicaComponent } from "./oferta/onde-fica/onde-fica.component";
import { OrdemCompraComponent } from "./ordem-compra/ordem-compra.component";
import { OrdemCompraSucessoComponent } from "./ordem-compra/ordem-compra-sucesso/ordem-compra-sucesso.component";
import { FormsModule } from "@angular/forms";

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
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt-Br" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
