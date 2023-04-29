import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../models/cliente";
import { environment } from "../environment/environment";

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${environment.baseUrl}/api/clientes`);
  }
}
