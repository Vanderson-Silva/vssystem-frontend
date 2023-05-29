import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSidenavModule } from "@angular/material/sidenav";
import { ClienteListComponent } from "./components/cliente/clientelist/clientelist.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { MatCardModule } from "@angular/material/card";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClienteCreateComponent } from "./components/cliente/clientecreate/clientecreate.component";
import { MatNativeDateModule } from "@angular/material/core";
import { ClienteUpdateComponent } from "./components/cliente/clienteupdate/clienteupdate.component";
import { MaskComponent } from "./components/mask/mask.component";
import { FornecedorComponent } from './components/fornecedor/fornecedorlist/fornecedorlist.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FornecedorcreateComponent } from './components/fornecedor/fornecedorcreate/fornecedorcreate.component';
import { FornecedorUpdateComponent } from "./components/fornecedorupdate/fornecedorupdate.component";
import { ProdutolistComponent } from './components/produto/produtolist/produtolist.component';
import { ProdutoComponent } from './services/produto/produto.component';




@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ClienteListComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    MaskComponent,
    FornecedorComponent,
    FornecedorcreateComponent,
    FornecedorUpdateComponent,
    ProdutolistComponent,
    ProdutoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
