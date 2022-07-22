import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: IProduto[] | undefined;

  constructor(private produtosService: ProdutosService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    const produtos = this.produtosService.getAll();

    //Obter o que está sendo digitado no campo de busca
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();

      
      if (descricao) {
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;
      }

      //Caso não haja filtro vamos mostrar todos os produtos
      this.produtos = this.produtosService.getAll();

    });
   
  }

}
