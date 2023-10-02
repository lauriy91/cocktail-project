import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BebidasComponent } from '../bebidas/bebidas.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BebidasComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
}
