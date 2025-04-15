import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-valor',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './valor.component.html',
  styleUrl: './valor.component.css'
})

export class ValorComponent {
  numero: string = "";
}
