import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})


export class UsuarioComponent {

  usuarios: Usuario[] = [{nome: "Ana", idade:25 },{nome: "Carlos", idade: 30}]

}

interface Usuario{
  nome: string;
  idade: number;
}