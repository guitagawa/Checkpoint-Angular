import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-meses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meses.component.html',
  styleUrl: './meses.component.css'
})
export class MesesComponent {

  numero: number = 0

}

