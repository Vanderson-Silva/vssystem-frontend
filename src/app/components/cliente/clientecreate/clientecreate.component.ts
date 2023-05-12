import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Cliente } from "src/app/models/cliente";
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: "app-cliente-create",
  templateUrl: "./clientecreate.component.html",
  styleUrls: ["./clientecreate.component.css"],
})
export class ClienteCreateComponent {
  constructor(private router: Router, private clienteService: ClienteService) {}

  status: string = "";

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

  // metodo para selecionar o evento de
  onStatusSelected(event: any) {
    this.status = event.value;
  }

  formataData(): void {
    let dataCadastro = new Date(this.cliente.dataCadastro);
    this.cliente.dataCadastro = `${dataCadastro.getDate()}/${
      dataCadastro.getMonth() + 1
    }/${dataCadastro.getFullYear()}`;
  }

  cancelar(): void {
    this.router.navigate(["clientelist"]);
  }

  create(status: string): void {
    this.formataData();
    this.cliente.status = status;
    this.clienteService.create(this.cliente).subscribe(
      (resposta) => {
        this.clienteService.message("Cliente Salvo com Sucesso!");
        this.router.navigate(["clientelist"]);
      },
      (err) => {
        this.clienteService.message("Erro ao salvar o Cliente");
        this.router.navigate(["clientelist"]);
      }
    );
  }
}
