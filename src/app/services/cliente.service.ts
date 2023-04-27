import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cliente } from "../models/cliente";
import { environment } from "../environment/environment";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }
}
