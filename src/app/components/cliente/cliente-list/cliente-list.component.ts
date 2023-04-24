import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

export interface PeriodicElement {
  id?: number;
  nome: string;
  dataNascimento: string;
  dataCadastro: string;
  status: string;
  endereco: string;
  numero: number;
  bairro: string;
  cidade: string;
  telefone: string;
  celular: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    nome: "Hydrogen",
    dataNascimento: "22/04/2023",
    dataCadastro: "22/04/2023",
    status: "A",
    endereco: "Besourinho Amtista",
    numero: 594,
    bairro: "San Rafael V",
    cidade: "Arapongas",
    telefone: "(43) 3252-5647",
    celular: "(43) 9 8831-8144",
  },
  {
    id: 2,
    nome: "Hydrogen",
    dataNascimento: "22/04/2023",
    dataCadastro: "22/04/2023",
    status: "A",
    endereco: "Besourinho Amtista",
    numero: 594,
    bairro: "San Rafael V",
    cidade: "Arapongas",
    telefone: "(43) 3252-5647",
    celular: "(43) 9 8831-8144",
  },
  {
    id: 3,
    nome: "Hydrogen",
    dataNascimento: "22/04/2023",
    dataCadastro: "22/04/2023",
    status: "A",
    endereco: "Besourinho Amtista",
    numero: 594,
    bairro: "San Rafael V",
    cidade: "Arapongas",
    telefone: "(43) 3252-5647",
    celular: "(43) 9 8831-8144",
  },
  {
    id: 4,
    nome: "Hydrogen",
    dataNascimento: "22/04/2023",
    dataCadastro: "22/04/2023",
    status: "A",
    endereco: "Besourinho Amtista",
    numero: 594,
    bairro: "San Rafael V",
    cidade: "Arapongas",
    telefone: "(43) 3252-5647",
    celular: "(43) 9 8831-8144",
  },
  {
    id: 5,
    nome: "Hydrogen",
    dataNascimento: "22/04/2023",
    dataCadastro: "22/04/2023",
    status: "A",
    endereco: "Besourinho Amtista",
    numero: 594,
    bairro: "San Rafael V",
    cidade: "Arapongas",
    telefone: "(43) 3252-5647",
    celular: "(43) 9 8831-8144",
  },
  {
    id: 6,
    nome: "Hydrogen",
    dataNascimento: "22/04/2023",
    dataCadastro: "22/04/2023",
    status: "A",
    endereco: "Besourinho Amtista",
    numero: 594,
    bairro: "San Rafael V",
    cidade: "Arapongas",
    telefone: "(43) 3252-5647",
    celular: "(43) 9 8831-8144",
  },
  {
    id: 7,
    nome: "Hydrogen",
    dataNascimento: "22/04/2023",
    dataCadastro: "22/04/2023",
    status: "A",
    endereco: "Besourinho Amtista",
    numero: 594,
    bairro: "San Rafael V",
    cidade: "Arapongas",
    telefone: "(43) 3252-5647",
    celular: "(43) 9 8831-8144",
  },
];

@Component({
  selector: "app-cliente-list",
  templateUrl: "./cliente-list.component.html",
  styleUrls: ["./cliente-list.component.css"],
})
export class ClienteListComponent implements OnInit {
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
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
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
}
