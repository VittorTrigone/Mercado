import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Client[]> {
    let url = "http://localhost:3000/produtos";
    return this.http.get<Client[]>(url);
  }
}
