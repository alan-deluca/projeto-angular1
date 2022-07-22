import { Injectable, OnInit } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  //Produtos do carrinho
  itens: IProdutoCarrinho[] = [];

  //Valor total do carrinho
  vlrTotal: number = 0;

  constructor() {

    console.log("Qtd itens carrinho: " + this.itens.length);
    //Buscar os itens do carrinho existentes no local storage
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");

    console.log("Construtor carrinho");
    console.log("Qtd itens carrinho: " + this.itens.length);

  }

  obterCarrinho() {

    //Nesse exemplo o carrinho fica salvo no local storage do browser, mas não é a melhor maneira
    //return JSON.parse(localStorage.getItem("carrinho") || "");
    return this.itens
  }

  addAoCarrinho(produto: IProdutoCarrinho) {

    //Adicionei o novo produto ao vetor de itens. O push é um append
    this.itens.push(produto);

    //Salvei o vetor no local storage como JSON.
    localStorage.setItem("carrinho", JSON.stringify(this.itens));

  }

  limparCarrinho() {

    this.itens = [];
    localStorage.clear();

  }

  removerItemCarrinho(idProduto: number) {

    const itemIndex = this.itens.findIndex((obj) => {
      return obj.id == idProduto;
    });

    if (itemIndex !== -1) {
      //Remove 1 elemento a partir do índice especificado
      this.itens.splice(itemIndex, 1);

      //Atualizar o storage.
      localStorage.setItem("carrinho", JSON.stringify(this.itens));
    }

  }

  getValorTotal() {

    this.vlrTotal = 0;

    for (let index = 0; index < this.itens.length; index++) {
      const element = this.itens[index];

      this.vlrTotal = this.vlrTotal + (element.preco * element.quantidade);

    }

    return this.vlrTotal;
  }

  atualizarItemCarrinho(item: IProdutoCarrinho) {

    const itemIndex = this.itens.findIndex((obj) => {
      return obj.id == item.id;
    });

    console.log("Index: " + itemIndex);
    this.itens[itemIndex] = item;

    //Atualizar o storage.
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
}
