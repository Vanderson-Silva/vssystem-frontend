import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { HomeComponent } from "./components/home/home.component";
import { ClienteListComponent } from "./components/cliente/clientelist/clientelist.component";
import { ClienteCreateComponent } from "./components/cliente/clientecreate/clientecreate.component";
import { ClienteUpdateComponent } from "./components/cliente/clienteupdate/clienteupdate.component";

const routes: Routes = [
  {
    path: "",
    component: SidenavComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "clientelist", component: ClienteListComponent },
      { path: "clientecreate", component: ClienteCreateComponent },
      {
        path: "clientelist/clienteupdate/:id",
        component: ClienteUpdateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
