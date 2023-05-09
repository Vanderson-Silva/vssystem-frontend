import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Cliente } from "src/app/models/cliente";

@Component({
  selector: "app-cliente-create",
  templateUrl: "./cliente-create.component.html",
  styleUrls: ["./cliente-create.component.css"],
})
export class ClienteCreateComponent {
  constructor(private router: Router) {}

  //criando uma instancia de Todo
  cliente: Cliente = {
    nome: "",
    dataCadastro: new Date(),
    status: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    telefone: "",
    celular: "",
  };

  formataData(): void {
    let dataCadastro = new Date(this.cliente.dataCadastro);
    this.cliente.dataCadastro = `${dataCadastro.getDate()}/${
      dataCadastro.getMonth() + 1
    }/${dataCadastro.getFullYear()}`;
  }

  cancelar(): void {
    this.router.navigate(["clientes-list"]);
  }
}
