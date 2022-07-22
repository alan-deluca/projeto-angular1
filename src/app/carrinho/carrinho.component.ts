import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho[] = [];

  constructor(public carrinhoService: CarrinhoService,
    private router: Router) { }

  ngOnInit(): void {

    //Obter os produtos do carrinho
    this.itensCarrinho = this.carrinhoService.obterCarrinho();

  }

  removerProduto(idProduto: number) {

    this.carrinhoService.removerItemCarrinho(idProduto);

    0
  }

  atualizarQtdCarrinho(item:IProdutoCarrinho) {
    this.carrinhoService.atualizarItemCarrinho(item);
  }

  comprar() {

    alert("Parabéns, compra finalizada");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }
}


