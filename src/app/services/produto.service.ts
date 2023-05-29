import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({ providedIn: 'root'})

export class ProdutoService {
  baseUrlProduto = environment.baseUrlProduto;

  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  // Metodo Responsavel por listar todos produtos.
  findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrlProduto);
  }

  // metodo para Excluir um produto pelo id.
  delete(id: any): Observable<void> {
    const url = `${this.baseUrlProduto}/${id}`;
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

  // metodo para salvar um produto.
  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrlProduto, produto);
  }

  findById(id: any): Observable<Produto> {
    const url = `${this.baseUrlProduto}/${id}`;
    return this.http.get<Produto>(url);
  }

  // metodo para Atualizar um Produto.
  update(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrlProduto}/${produto.id}`;
    return this.http.put<Produto>(url, produto);
  }
}

