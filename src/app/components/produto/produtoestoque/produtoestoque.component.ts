import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtoestoque',
  templateUrl: './produtoestoque.component.html',
  styleUrls: ['./produtoestoque.component.css']
})
export class ProdutoestoqueComponent implements OnInit {

  constructor(
    private router: Router,
    private service: ProdutoService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.produto.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  produto: Produto = {    
    referencia: "",
    descricao: "",
    dataCadastro: new Date(),
    status: ""  ,
    qtdmlprod: "",
    valorCompra: 0.0,
    valorVenda: 0.0,
    fornecedor: "",
    qdtEstoque: 0, 

  }

  findById(): void {
    this.service.findById(this.produto.id).subscribe((resposta) => {
      this.produto = resposta;
    });
  }
  // metodo de atualizar
  update(): void {
    this.service.update(this.produto).subscribe(
      (resposta) => {
        this.service.message("Produto Atualizado com Sucesso!");
        this.router.navigate(["produtolist"]);
      },
      (err) => {
        this.service.message("Erro ao Atualizar Produto!");
        this.router.navigate(["produtolist"]);
      }
    );
  }

  formataData(): void {
    let dataCadastro = new Date(this.produto.dataCadastro);
    this.produto.dataCadastro = `${dataCadastro.getDate()}/${
      dataCadastro.getMonth() + 1
    }/${dataCadastro.getFullYear()}`;
  }

  cancelar(): void {
    this.router.navigate(["produtolist"]);
  }

}