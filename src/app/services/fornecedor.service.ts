import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Fornecedor } from '../models/fornecedor';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({providedIn: "root",})

export class FornecedorService {
  baseUrlFornecedor = environment.baseUrlFornecedor;

  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  // Metodo Responsavel por listar todos fornecedor.
  findAll(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.baseUrlFornecedor);
  }

  // metodo para Excluir um fornecedor pelo id.
  delete(id: any): Observable<void> {
    const url = `${this.baseUrlFornecedor}/${id}`;
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

  // metodo para salvar um fornecedor.
  create(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.baseUrlFornecedor, fornecedor);
  }

  findById(id: any): Observable<Fornecedor> {
    const url = `${this.baseUrlFornecedor}/${id}`;
    return this.http.get<Fornecedor>(url);
  }

  // metodo para Atualizar um fornecedor.
  update(fornecedor: Fornecedor): Observable<Fornecedor> {
    const url = `${this.baseUrlFornecedor}/${fornecedor.id}`;
    return this.http.put<Fornecedor>(url, fornecedor);
  }
}