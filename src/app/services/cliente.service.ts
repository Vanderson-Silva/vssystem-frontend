import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../models/cliente";
import { environment } from "../environment/environment";

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  // Metodo Responsavel por listar todos clientes.
  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${environment.baseUrl}/api/clientes`);
  }

  delete(id: any): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
