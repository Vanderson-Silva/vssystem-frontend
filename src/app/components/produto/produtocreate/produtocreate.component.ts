import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtocreate',
  templateUrl: './produtocreate.component.html',
  styleUrls: ['./produtocreate.component.css']
})
export class ProdutocreateComponent implements OnInit { 
   formulario: FormGroup
   status: string = "";

   @ViewChild("campoReferencia", { static: false }) campoReferencia!: ElementRef;
   @ViewChild("campoDescricao", { static: false }) campoDescricao!: ElementRef; // variavel para atribuir o curson no campo nome.

  constructor(private FormBuilder: FormBuilder, private router: Router,private produtoService: ProdutoService){
    this.formulario = new FormGroup({
      referencia: new FormControl("", Validators.required),
      descricao: new FormControl("",Validators.required),
     
    })
  }

 
  ngOnInit(): void {
    this.formulario = this.FormBuilder.group({
      referencia: ["",Validators.required],
      descricao:["",Validators.required],
     
    });
    
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

   // validacao de campo de formulario.
   get referenciaFormControl(): FormControl {
    return this.formulario.get("referencia") as FormControl;
   }

   get descricaoFormControl(): FormControl {
    return this.formulario.get("descricao") as FormControl;
   }

   get statusFormControl(): FormControl {
    return this.formulario.get("status") as FormControl;
   }

   get qtdmlprodFormControl(): FormControl {
    return this.formulario.get("qtdmlprod") as FormControl;
   }

   get valorCompraFormControl(): FormControl {
    return this.formulario.get("valorCompra") as FormControl;
   }

   get valorVendaprodFormControl(): FormControl {
    return this.formulario.get("valorVenda") as FormControl;
   }

   get fornecedorFormControl(): FormControl {
    return this.formulario.get("fornecedor") as FormControl;
   }

   get qdtEstoqueFormControl(): FormControl {
    return this.formulario.get("qdtEstoque") as FormControl;
   }


   // metodo para selecionar o evento de
   onStatusSelected(event: any) {
    this.status = event.value;
  }

 
  formataData(): void{
    let dataCadastro = new Date(this.produto.dataCadastro);
    this.produto.dataCadastro = `${dataCadastro.getMonth() + 1}/${
      dataCadastro.getDate()
      }/${dataCadastro.getFullYear()}`;
      console.log(dataCadastro);
  }

  create(status: string): void {
    this.formataData();
    if(this.produto.referencia ==""){
      this.produtoService.message("Campo Referencia nao pode ser Vazio!");
      this.campoReferencia.nativeElement.focus();// coloca o cursos para digitar no campo selecionado
    }else if(this.produto.descricao ==""){
      this.produtoService.message("Campo Descrição nao pode ser Vazio!")
      this.campoDescricao.nativeElement.focus();// coloca o cursos para digitar no campo selecionado
    }else{
      this.produto.status = status;
      const valorCompra = parseFloat(String(this.produto.valorCompra).replace(/\D/g, '').replace(',', '.'));
      const formatValorNumerico = (valorCompra / 100).toFixed(2);
      this.produto.valorCompra = Number(formatValorNumerico);

      const valorVenda = parseFloat(String(this.produto.valorVenda).replace(/\D/g, '').replace(',', '.'));
      const formatValor = (valorVenda / 100).toFixed(2);
      this.produto.valorVenda = Number(formatValor);
      this.produtoService.create(this.produto).subscribe(    
        (resposta) => {
          this.produtoService.message("Produto Salvo com Sucesso!");
          this.router.navigate(["produtolist"]);
        },
        (err) => {
          this.produtoService.message("Erro ao salvar o Produto");
          this.router.navigate(["produtolist"]);
        }
      );
    }
  }

  cancelar():void{
    this.router.navigate(["produtolist"]);
  }
}
