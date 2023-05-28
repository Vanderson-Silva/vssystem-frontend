import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { DialogComponent } from '../../dialog/dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedorlist.component.html',
  styleUrls: ['./fornecedorlist.component.css']
})
export class FornecedorComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private service:FornecedorService, public dialog: MatDialog, private router:Router) {}

  ngOnInit(): void {
    this.findAll();
   
  }

  ELEMENT_DATA: Fornecedor[] = [];

  displayedColumns: string[] = [
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

 
 
  cadastrar(): void {
    this.router.navigate(["fornecedorcreate"]);
  }
  
// metodo de listar todos os Fornecedores
findAll(){
  this.service.findAll().subscribe((resposta) => {
    this.ELEMENT_DATA = resposta;
    this.dataSource = new MatTableDataSource<Fornecedor>(resposta);
    this.dataSource.paginator = this.paginator;
    console.log('Resposta Recebida:', resposta);
  },
  (error) => {
    console.error('Erro de Solicitacao' ,error);
  }
  );
}
 
 // metodo busca de Pesquisa.
 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

delete(id: any): void{
  const dialogRef = this.dialog.open(DialogComponent,{
    data: "Deseja Realmente Excluir esse Fornecedor?",
  });
  dialogRef.afterClosed().subscribe((result:boolean) => {
    if(result) {
      this.service.delete(id).subscribe(
        (resposta) => {
          if(resposta ==null){
            this.service.message("Fornecedor Excluido com Sucesso!");
          }
          this.findAll();
        },
        (error) => {
          console.error("Erro ao excluir Fornecedor:", error);
          this.service.message("Erro ao excluir Fornecedor.");
        }
        );
      }
    });
  }
}


