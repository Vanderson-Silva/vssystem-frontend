import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Cliente } from "src/app/models/cliente";
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: "app-cliente-list",
  templateUrl: "./cliente-list.component.html",
  styleUrls: ["./cliente-list.component.css"],
})
export class ClienteListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: ClienteService) {}

  ngOnInit(): void {
    this.findAll();
  }

  ELEMENT_DATA: Cliente[] = [];

  displayedColumns: string[] = [
    "id",
    "nome",
    "dataNascimento",
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
    this.service.delete(id).subscribe((resposta) => {
      if (resposta == null) {
        this.service.message("Cliente Excluido com Sucesso!");
      }
    });
  }
}
