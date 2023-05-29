import { OnInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-produtolist',
  templateUrl: './produtolist.component.html',
  styleUrls: ['./produtolist.component.css']
})
export class ProdutolistComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private service: ProdutoService,public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  ELEMENT_DATA: Produto[] = [];

  displayedColumns: string[] = [
    "id",
    "referencia",
    "descricao",
    "dataCadastro",
    "status",
    "qtdmlprod",
    "valorCompra",
    "valorVenda",
    "fornecedor",
    "qdtEstoque",    
    "acoes",

  ];
  dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);

  cadastrar(): void {
    this.router.navigate(["produtocreate"]);
  }

  // Metodo de Listar todos os Produtos
  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Produto>(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }

  // metodo busca de Pesquisa.
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // metodo para excluir um produto
  delete(id: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: "Deseja realmente excluir esse produto?",
    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.service.delete(id).subscribe(
          (resposta) => {
            if (resposta == null) {
              this.service.message("Produto Excluido com Sucesso!");
            }
            this.findAll();
          },
          (error) => {
            console.error("Erro ao excluir Produto:", error);
            this.service.message("Erro ao excluir produto.");
          }
        );
      }
    });
  }
}


