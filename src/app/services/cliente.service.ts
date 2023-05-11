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
  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  // Metodo Responsavel por listar todos clientes.
  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${environment.baseUrl}/api/clientes`);
  }

  // metodo para Excluir um cliente pelo id.
  delete(id: any): Observable<void> {
    const url = `${environment.baseUrl}/api/clientes/${id}`;
    console.log(url);
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
    return this.http.post<Cliente>(`${environment.baseUrl}/api`, cliente);
  }
  // metodo para Atualizar um cliente.
  update(cliente: Cliente): Observable<Cliente> {
    const url = `${environment.baseUrl}/api/clientes/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente);
  }

  findById(id: any): Observable<Cliente> {
    const url = `${environment.baseUrl}/api/${id}`;
    return this.http.get<Cliente>(url);
  }
}
