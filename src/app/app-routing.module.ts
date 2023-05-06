import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { HomeComponent } from "./components/home/home.component";
import { ClienteListComponent } from "./components/cliente/cliente-list/cliente-list.component";
import { ClienteCreateComponent } from "./components/cliente/cliente-create/cliente-create.component";

const routes: Routes = [
  {
    path: "",
    component: SidenavComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "clientes-list", component: ClienteListComponent },
      { path: "clientes-create", component: ClienteCreateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
