import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../models/cliente";
import { environment } from "../environment/environment";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  // Metodo Responsavel por listar todos clientes.
  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${environment.baseUrl}/api/clientes`);
  }

  // metodo para Excluir um cliente pelo id.
  delete(id: any): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  // metodo para Exibir uma mensagem de confirmacao ao usuario.
  message(msg: String): void {
    this.snack.open(`${msg}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 4000,
    });
  }
}
