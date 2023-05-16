import { Component, OnInit } from '@angular/core';
import { Client } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Client[] = [];

  constructor (private produtoService: ProdutoService){}

  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos() {
    this.produtoService.getProdutos().subscribe(
      {
        next : data => this.produtos = data
      }
    );
  }
}
