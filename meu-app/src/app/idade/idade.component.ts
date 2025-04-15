import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-idade',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './idade.component.html',
  styleUrl: './idade.component.css'
})
export class IdadeComponent {
idade: number = 0;
}
