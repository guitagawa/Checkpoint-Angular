import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  imports: [CommonModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  produtos: Produto[] = [{nome: "Notebook", preco: 300, promocao: true},
    {nome: "Mouse",preco:50,promocao:false}]
}

interface Produto{
  nome: string;
  preco: number;
  promocao: boolean;
}