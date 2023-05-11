import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Cliente } from "src/app/models/cliente";
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: "app-cliente-create",
  templateUrl: "./cliente-create.component.html",
  styleUrls: ["./cliente-create.component.css"],
})
export class ClienteCreateComponent {
  constructor(private router: Router, private clienteService: ClienteService) {}

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

  create(): void {
    this.formataData();
    this.clienteService.create(this.cliente).subscribe(
      (resposta) => {
        this.clienteService.message("Cliente Salvo com Sucesso!");
        this.router.navigate(["clientes-list"]);
      },
      (err) => {
        this.clienteService.message("Erro ao salvar o Cliente");
        this.router.navigate(["clientes-list"]);
      }
    );
  }
}
