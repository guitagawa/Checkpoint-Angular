import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MesesComponent } from './meses/meses.component';
import { ComprasComponent } from './compras/compras.component';
import { IdadeComponent } from './idade/idade.component';
import { Lista2Component } from './lista2/lista2.component';
import { StatusComponent } from './status/status.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ValorComponent } from './valor/valor.component';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MesesComponent, ComprasComponent,
    IdadeComponent,Lista2Component,StatusComponent
    ,UsuarioComponent,ValorComponent,LoginComponent,ProdutoComponent,CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'meu-app';
}
