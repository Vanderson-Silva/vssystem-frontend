import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  baseUrlFornecedor = environment.baseUrlFornecedor;

  constructor(private http:HttpClient) { }

  findAll(): Observable<Fornecedor[]>{
    return this.http.get<Fornecedor[]>(this.baseUrlFornecedor);
  }
}
