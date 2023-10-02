import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BebidasService } from 'src/app/services/bebidas.service';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {

  idDrink: string = '';
  detalles:any;

  constructor(
    private activatedroute: ActivatedRoute,
    private bebidasService : BebidasService
  ) {
    this.activatedroute.params.subscribe((params: any) => this.idDrink = params.idDrink);
  }

  ngOnInit(){
    this.getDetalles();
  }

  getDetalles(){
    this.bebidasService.getDrinksDetails(this.idDrink).subscribe((response: any ) => {
      this.detalles = response.drinks[0];
    });
  }

}
