import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Cliente } from "src/app/models/cliente";
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: "app-cliente-update",
  templateUrl: "./clienteupdate.component.html",
  styleUrls: ["./clienteupdate.component.css"],
})
export class ClienteUpdateComponent implements OnInit {
  constructor(
    private router: Router,
    private service: ClienteService,
    private route: ActivatedRoute
  ) {}

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

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.cliente.id).subscribe((resposta) => {
      this.cliente = resposta;
    });
  }
  // metodo de atualizar
  update(): void {
    this.service.update(this.cliente).subscribe(
      (resposta) => {
        this.service.message("Cliente Atualizado com Sucesso!");
        this.router.navigate(["clientelist"]);
      },
      (err) => {
        this.service.message("Erro ao Atualizar Cliente!");
        this.router.navigate(["clientelist"]);
      }
    );
  }

  formataData(): void {
    let dataCadastro = new Date(this.cliente.dataCadastro);
    this.cliente.dataCadastro = `${dataCadastro.getDate()}/${
      dataCadastro.getMonth() + 1
    }/${dataCadastro.getFullYear()}`;
  }

  create(): void {
    this.formataData();
    this.service.create(this.cliente).subscribe(
      (resposta) => {
        this.service.message("Cliente Alterado com Sucesso!");
        this.router.navigate(["clientelist"]);
      },
      (err) => {
        this.service.message("Erro ao Alterar o Cliente");
        this.router.navigate(["clientelist"]);
      }
    );
  }
  cancelar(): void {
    this.router.navigate(["clientelist"]);
  }
}
