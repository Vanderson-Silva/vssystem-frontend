import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Cliente } from "src/app/models/cliente";
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: "app-cliente-update",
  templateUrl: "./cliente-update.component.html",
  styleUrls: ["./cliente-update.component.css"],
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
        this.router.navigate(["clientes-list"]);
      },
      (err) => {
        this.service.message("Erro ao Atualizar Cliente!");
        this.router.navigate(["clientes-list"]);
      }
    );
  }
}
