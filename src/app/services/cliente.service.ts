import { Cliente } from "src/app/models/cliente";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environment/environment";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  baseUrlCliente = environment.baseUrlCliente;

  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  // Metodo Responsavel por listar todos clientes.
  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrlCliente);
  }

  // metodo para Excluir um cliente pelo id.
  delete(id: any): Observable<void> {
    const url = `${this.baseUrlCliente}/${id}`;
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

  // metodo para salvar um cliente.
  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrlCliente, cliente);
  }

  findById(id: any): Observable<Cliente> {
    const url = `${this.baseUrlCliente}/${id}`;
    return this.http.get<Cliente>(url);
  }

  // metodo para Atualizar um cliente.
  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrlCliente}/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente);
  }
}
