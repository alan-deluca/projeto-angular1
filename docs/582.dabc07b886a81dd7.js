"use strict";(self.webpackChunkprojeto_exemplo=self.webpackChunkprojeto_exemplo||[]).push([[582],{7582:(v,h,e)=>{e.r(h),e.d(h,{CarrinhoModule:()=>x});var s=e(6895),u=e(1706),n=e(1571),d=e(5087),c=e(433);function g(o,r){if(1&o){const t=n.EpF();n.TgZ(0,"li"),n._UZ(1,"img",8),n.TgZ(2,"p"),n._uU(3),n.qZA(),n.TgZ(4,"p"),n._uU(5),n.ALo(6,"currency"),n.qZA(),n.TgZ(7,"label"),n._uU(8," Quantidade: "),n.TgZ(9,"input",9),n.NdJ("change",function(){const p=n.CHM(t).$implicit,l=n.oxw(2);return n.KtG(l.atualizarQtdCarrinho(p))})("ngModelChange",function(a){const l=n.CHM(t).$implicit;return n.KtG(l.quantidade=a)}),n.qZA()(),n.TgZ(10,"button",10),n.NdJ("click",function(){const p=n.CHM(t).$implicit,l=n.oxw(2);return n.KtG(l.removerProduto(p.id))}),n._UZ(11,"i",11),n.qZA()()}if(2&o){const t=r.$implicit;n.xp6(1),n.Q6J("src",t.imagem,n.LSH),n.xp6(2),n.Oqu(t.descricao),n.xp6(2),n.Oqu(n.xi3(6,4,t.preco,"BRL")),n.xp6(4),n.Q6J("ngModel",t.quantidade)}}function C(o,r){if(1&o){const t=n.EpF();n.TgZ(0,"div")(1,"ul"),n.YNc(2,g,12,7,"li",5),n.qZA(),n.TgZ(3,"h2",6),n._uU(4),n.ALo(5,"currency"),n.qZA(),n.TgZ(6,"button",7),n.NdJ("click",function(){n.CHM(t);const a=n.oxw();return n.KtG(a.comprar())}),n._uU(7,"Comprar"),n.qZA()()}if(2&o){const t=n.oxw();n.xp6(2),n.Q6J("ngForOf",t.itensCarrinho),n.xp6(2),n.hij("Total: ",n.xi3(5,2,t.carrinhoService.getValorTotal(),"BRL"),"")}}function m(o,r){1&o&&(n.TgZ(0,"h2"),n._uU(1,"Carrinho vazio!"),n.qZA())}const _=[{path:"",component:(()=>{class o{constructor(t,i){this.carrinhoService=t,this.router=i,this.itensCarrinho=[]}ngOnInit(){this.itensCarrinho=this.carrinhoService.obterCarrinho()}removerProduto(t){this.carrinhoService.removerItemCarrinho(t)}atualizarQtdCarrinho(t){this.carrinhoService.atualizarItemCarrinho(t)}comprar(){alert("Parab\xe9ns, compra finalizada"),this.carrinhoService.limparCarrinho(),this.router.navigate(["produtos"])}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(d.e),n.Y36(u.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-carrinho"]],decls:7,vars:2,consts:[[1,"carrinho-container"],[1,"cart-title"],[1,"fa-solid","fa-cart-shopping"],[4,"ngIf","ngIfElse"],["SemProduto",""],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],[3,"src"],["type","number",3,"ngModel","change","ngModelChange"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(t,i){if(1&t&&(n.TgZ(0,"div",0)(1,"h2",1),n._UZ(2,"i",2),n._uU(3,"Carrinho"),n.qZA(),n.YNc(4,C,8,5,"div",3),n.YNc(5,m,2,0,"ng-template",null,4,n.W1O),n.qZA()),2&t){const a=n.MAs(6);n.xp6(4),n.Q6J("ngIf",i.itensCarrinho.length>0)("ngIfElse",a)}},dependencies:[s.sg,s.O5,c.Fj,c.wV,c.JJ,c.On,s.H9],styles:[".carrinho-container[_ngcontent-%COMP%]{padding:120px 10px}.cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}"]}),o})()}];let f=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.Bz.forChild(_),u.Bz]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[s.ez,f,c.u5]}),o})()}}]);