import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Cliente } from "src/app/models/cliente";
import { ClienteService } from "src/app/services/cliente.service";
import { DialogComponent } from "../../dialog/dialog.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-cliente-list",
  templateUrl: "./clientelist.component.html",
  styleUrls: ["./clientelist.component.css"],
})
export class ClienteListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: ClienteService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  ELEMENT_DATA: Cliente[] = [];

  displayedColumns: string[] = [
    "id",
    "nome",
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
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);

  cadastrar(): void {
    this.router.navigate(["clientecreate"]);
  }

  // Metodo de Listar todos os Clientes
  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Cliente>(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }

  // metodo busca de Pesquisa.
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // metodo para excluir um cliente
  delete(id: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: "Deseja realmente excluir esse cliente?",
    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.service.delete(id).subscribe(
          (resposta) => {
            if (resposta == null) {
              this.service.message("Cliente Excluido com Sucesso!");
            }
            this.findAll();
          },
          (error) => {
            console.error("Erro ao excluir cliente:", error);
            this.service.message("Erro ao excluir cliente.");
          }
        );
      }
    });
  }
}
