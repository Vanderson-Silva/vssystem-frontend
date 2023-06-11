import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-fornecedorcreate',
  templateUrl: './fornecedorcreate.component.html',
  styleUrls: ['./fornecedorcreate.component.css']
})

export class FornecedorcreateComponent implements OnInit{
  formulario: FormGroup;
  status: string = "";

  @ViewChild("campoNome", { static: false }) campoNome!: ElementRef; // variavel para atribuir o curson no campo nome.


  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ["", Validators.required],
    });
  }

  constructor( private router: Router,private fornecedorService: FornecedorService, private formBuilder: FormBuilder) {
    this.formulario = new FormGroup({
      nome: new FormControl("", Validators.required),
    });
  }



  //criando uma instancia de Fornecedor
  fornecedor: Fornecedor = {
    nome: "",
   cnpj: "",
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
      let dataCadastro = new Date(this.fornecedor.dataCadastro);
      this.fornecedor.dataCadastro = `${dataCadastro.getDate()}/${
        dataCadastro.getMonth() + 1
      }/${dataCadastro.getFullYear()}`;
    }

    cancelar(): void {
      this.router.navigate(["fornecedorlist"]);
    }

    create(status: string): void {
      this.formataData();
      if (this.fornecedor.nome == "") {
        this.fornecedorService.message("Campo Nome esta Vazio!");
        this.campoNome.nativeElement.focus(); // coloca o cursos para digitar no campo selecionado
      } else {
        this.fornecedor.status = status;
        this.fornecedorService.create(this.fornecedor).subscribe(
          (resposta) => {
            this.fornecedorService.message("Fornecedor Salvo com Sucesso!");
            this.router.navigate(["fornecedorlist"]);
          },
          (err) => {
            this.fornecedorService.message("Erro ao salvar o Fornecedor");
            this.router.navigate(["fornecedorlist"]);
          }
        );
      }
    }
    // validacao de campo de formulario.
  get nomeFormControl(): FormControl {
    return this.formulario.get("nome") as FormControl;
  }
}
