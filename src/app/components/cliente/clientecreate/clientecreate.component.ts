import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Cliente } from "src/app/models/cliente";
import { ClienteService } from "src/app/services/cliente.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-cliente-create",
  templateUrl: "./clientecreate.component.html",
  styleUrls: ["./clientecreate.component.css"],
})
export class ClienteCreateComponent implements OnInit {
  formulario: FormGroup;

  @ViewChild("campoNome", { static: false }) campoNome!: ElementRef; // variavel para atribuir o curson no campo nome.

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ["", Validators.required],
    });
  }

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private formBuilder: FormBuilder
  ) {
    this.formulario = new FormGroup({
      nome: new FormControl("", Validators.required),
    });
  }

  status: string = "";

  //criando uma instancia de Todo
  cliente: Cliente = {
    nome: "",
    cpf: "",
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
    if (this.cliente.nome == "") {
      this.clienteService.message("Campo Nome esta Vazio!");
      this.campoNome.nativeElement.focus(); // coloca o cursos para digitar no campo selecionado
    } else {
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
  // validacao de campo de formulario.
  get nomeFormControl(): FormControl {
    return this.formulario.get("nome") as FormControl;
  }
}
