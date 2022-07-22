import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

    produtos: IProduto[] = produtos;

    
  constructor() { 
    //console.log(produtos);
  }

  getAll(){
    return this.produtos;
  }

  getOne(produtoId: number){
    //const produto: IProduto = this.produtos.find(produto => produto.id = produtoId)!;


    //console.log("ID: " + produto.id + "Descr:" + produto.descricao);
    return this.produtos.find(produto => produto.id == produtoId)
  }
}
