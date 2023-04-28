import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Cliente } from "src/app/models/cliente";

@Component({
  selector: "app-cliente-list",
  templateUrl: "./cliente-list.component.html",
  styleUrls: ["./cliente-list.component.css"],
})
export class ClienteListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ELEMENT_DATA: Cliente[] = [
    {
      id: 1,
      nome: "Vanderson",
      dataNascimento: new Date(),
      dataCadastro: new Date(),
      status: "Ativo",
      endereco: "Besourinho Ametista",
      numero: "594",
      bairro: "San Rafael V",
      cidade: "Arapongas",
      telefone: "(43) 3252-1328",
      celular: "(43) 9 8831-8144",
    },
  ];

  displayedColumns: string[] = [
    "id",
    "nome",
    "dataNascimento",
    "dataCadastro",
    "sexo",
    "status",
    "endereco",
    "numero",
    "acoes",
  ];
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);
}
