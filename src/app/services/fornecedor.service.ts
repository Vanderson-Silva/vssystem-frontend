import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Fornecedor } from '../models/fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  baseUrlFornecedor = environment.baseUrlFornecedor;

  constructor(private http:HttpClient) { }

    // Metodo Responsavel por listar todos fornecedores.
    findAll(): Observable<Fornecedor[]> {
      return this.http.get<Fornecedor[]>(this.baseUrlFornecedor);
    }


    findById(id: any): Observable<Fornecedor> {
      const url = `${this.baseUrlFornecedor}/${id}`;
      return this.http.get<Fornecedor>(url);
    }
  
 
 
}
