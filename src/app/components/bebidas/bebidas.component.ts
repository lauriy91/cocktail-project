import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BebidaComponent } from '../bebida/bebida.component';
import { BebidasService } from 'src/app/services/bebidas.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-bebidas',
  standalone: true,
  imports: [CommonModule, BebidaComponent],
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent {
  @Input() titulo: string = '';
  bebidas: any = [];
  constructor(
    private bebidasService: BebidasService,
  ) { }

  ngOnInit() {
    this.getBebidas();
  }

  getBebidas() {
    this.bebidasService.getRandomDrinks().pipe(delay(3000)).subscribe((response: any) => {
      this.bebidas = response.drinks;
    });
  }

}
