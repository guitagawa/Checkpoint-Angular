import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista2',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './lista2.component.html',
  styleUrl: './lista2.component.css'
})
export class Lista2Component {
  compras: string[] = ["Estudar Angular","Fazer exercicio","Revisar codigo"]


  remover (index: number){
    this.compras.splice(index,1);
  }
}
