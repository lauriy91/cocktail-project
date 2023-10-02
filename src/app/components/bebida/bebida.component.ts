import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bebida',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.css']
})
export class BebidaComponent {
  @Input() titulo: string = '';
  @Input() imagen: string = '';
  @Input() id: string = '';

  constructor(
    private router : Router
  ){}

  detallesDireccion(){
    this.router.navigateByUrl(`detalles/${this.id}`)
  }
}
