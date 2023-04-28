import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ClienteService } from "src/app/services/cliente.service";

export interface Cliente {
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

@Component({
  selector: "app-cliente-list",
  templateUrl: "./cliente-list.component.html",
  styleUrls: ["./cliente-list.component.css"],
})
export class ClienteListComponent implements OnInit {
  constructor(private service: ClienteService) {}

  ngOnInit(): void {}
}
