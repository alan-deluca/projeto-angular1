import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  produto: IProduto | undefined;

  qtdEscolhida = 1
  constructor(private produtosService: ProdutosService,
              private route: ActivatedRoute,
              private notificacao: NotificacaoService,
              private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {

    //Obter o ID do produto na URL
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));

    //Buscar os detalhes do produto para mostrar na página
    this.produto = this.produtosService.getOne(produtoId);

    window.scrollTo(0,0);
    
  }

  adicionarAoCarrinho(){
    this.notificacao.notificar("Produto " + this.produto?.descricao + "    ao carrinho");
    
    const prodCarrinho: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.qtdEscolhida
    }

    this.carrinhoService.addAoCarrinho(prodCarrinho);

  }
}
