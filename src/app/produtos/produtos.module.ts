import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CalculaprecoComponent } from './calculapreco/calculapreco.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { ServicoComponent } from './servico/servico.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CadastroProdutoComponent, CalculaprecoComponent, OrcamentoComponent, ServicoComponent],
  exports: [CadastroProdutoComponent]
})
export class ProdutosModule { }
