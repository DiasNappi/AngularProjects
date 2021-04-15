import { DiversaoComponent } from "./diversao/diversao.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";
import { componentFactoryName } from "@angular/compiler";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "restaurantes",
    component: RestaurantesComponent,
  },
  {
    path: "diversao",
    component: DiversaoComponent,
  },
];
