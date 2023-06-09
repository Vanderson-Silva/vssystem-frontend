import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { HomeComponent } from "./components/home/home.component";
import { ClienteListComponent } from "./components/cliente/clientelist/clientelist.component";
import { ClienteCreateComponent } from "./components/cliente/clientecreate/clientecreate.component";
import { ClienteUpdateComponent } from "./components/cliente/clienteupdate/clienteupdate.component";
import { FornecedorComponent } from "./components/fornecedor/fornecedorlist/fornecedorlist.component";
import { FornecedorcreateComponent } from "./components/fornecedor/fornecedorcreate/fornecedorcreate.component";
import { ProdutolistComponent } from "./components/produto/produtolist/produtolist.component";
import { FornecedorUpdateComponent } from "./components/fornecedor/fornecedorupdate/fornecedorupdate.component";
import { ProdutocreateComponent } from "./components/produto/produtocreate/produtocreate.component";
import { ProdutoupdateComponent } from "./components/produto/produtoupdate/produtoupdate.component";
import { ProdutoestoqueComponent } from "./components/produto/produtoestoque/produtoestoque.component";

const routes: Routes = [
  {
    path: "",
    component: SidenavComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "clientelist", component: ClienteListComponent },
      { path: "clientecreate", component: ClienteCreateComponent },
      { path: "clientelist/clienteupdate/:id", component: ClienteUpdateComponent},
      {path: "fornecedorlist",component:FornecedorComponent},
      { path: "fornecedorcreate", component: FornecedorcreateComponent },
      { path: "fornecedorlist/fornecedorupdate/:id", component: FornecedorUpdateComponent},
      { path: "produtolist", component: ProdutolistComponent },
      {path: "produtocreate", component: ProdutocreateComponent},
      { path: "produtolist/produtoupdate/:id", component: ProdutoupdateComponent},
      { path: "produtolist/produtoestoque/:id", component: ProdutoestoqueComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
