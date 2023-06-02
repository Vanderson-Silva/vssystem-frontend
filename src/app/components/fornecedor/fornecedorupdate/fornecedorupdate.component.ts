import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-fornecedorupdate',
  templateUrl: './fornecedorupdate.component.html',
  styleUrls: ['./fornecedorupdate.component.css']
})
export class FornecedorUpdateComponent implements OnInit {
  constructor(
    private router: Router,
    private service: FornecedorService,
    private route: ActivatedRoute
  ) {}

  //criando uma instancia de Todo
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

  ngOnInit(): void {
    this.fornecedor.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.fornecedor.id).subscribe((resposta) => {
      this.fornecedor = resposta;
    });
  }
  // metodo de atualizar
  update(): void {
    this.service.update(this.fornecedor).subscribe(
      (resposta) => {
        this.service.message("Fornecedor Atualizado com Sucesso!");
        this.router.navigate(["fornecedorlist"]);
      },
      (err) => {
        this.service.message("Erro ao Atualizar Fornecedor!");
        this.router.navigate(["fornecedorlist"]);
      }
    );
  }

  formataData(): void {
    let dataCadastro = new Date(this.fornecedor.dataCadastro);
    this.fornecedor.dataCadastro = `${dataCadastro.getDate()}/${
      dataCadastro.getMonth() + 1
    }/${dataCadastro.getFullYear()}`;
  }

  create(): void {
    this.formataData();
    this.service.create(this.fornecedor).subscribe(
      (resposta) => {
        this.service.message("Fornecedor Alterado com Sucesso!");
        this.router.navigate(["fornecedorlist"]);
      },
      (err) => {
        this.service.message("Erro ao Alterar o Fornecedor");
        this.router.navigate(["fornecedorlist"]);
      }
    );
  }
  cancelar(): void {
    this.router.navigate(["fornecedorlist"]);
  }
}

