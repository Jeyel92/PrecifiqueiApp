import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { Ingrediente } from '../Ingrediente';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  product: Produto = {
    nome: '',
    isProducer: true,
    ingredientes: [],
    tempo: 0,
    unidades: 0
  };

  total = 0;

   addIngrediente() {
    this.product.ingredientes.push(new Ingrediente());
  }


  somaValor(val) {
      this.total = this.total + val;
  }
  constructor() {
  this.addIngrediente();
  }

  ngOnInit() {}
}
