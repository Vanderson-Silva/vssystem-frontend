import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produtoupdate',
  templateUrl: './produtoupdate.component.html',
  styleUrls: ['./produtoupdate.component.css']
})
export class ProdutoupdateComponent {




  
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

}
