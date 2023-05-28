import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';


@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedorlist.component.html',
  styleUrls: ['./fornecedorlist.component.css']
})
export class FornecedorComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private service:FornecedorService) {}

  ngOnInit(): void {
    this.findAll();
   
  }

  ELEMENT_DATA: Fornecedor[]=[];

 
  displayedColumsn: string[] = [
    "id",
    "nome",
    "cnpj",
    "dataCadastro",
    "status",
    "endereco",
    "numero",
    "bairro",
    "cidade",
    "telefone",
    "celular",
    "acoes",
  ];
  dataSource = new MatTableDataSource<Fornecedor>(this.ELEMENT_DATA);

  
// metodo de listar todos os Fornecedores
findAll(){
  this.service.findAll().subscribe((resposta) => {
    this.ELEMENT_DATA = resposta;
    this.dataSource = new MatTableDataSource<Fornecedor>(resposta);
    this.dataSource.paginator = this.paginator;
  });
}
 
 // metodo busca de Pesquisa.
 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

 

}


