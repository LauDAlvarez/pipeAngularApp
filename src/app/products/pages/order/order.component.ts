import { Component } from '@angular/core';
import { Hero, Color } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
    public isUpperCase: boolean = true
    public order?: keyof Hero;

    public heros: Hero[] = [
      {
        name: 'Superman',
        canFly: true,
        color: Color.azul
      },
      {
        name: 'Iron man',
        canFly: true,
        color: Color.amarillo
      },
      {
        name: 'Spiderman',
        canFly: false,
        color: Color.rojo
      },
      {
        name: 'Linterna verde',
        canFly: true,
        color: Color.verde
      },
    ]


    toggleUpperCase(): void{
      this.isUpperCase = !this.isUpperCase;
    }
    changeOrder(value: keyof Hero){
      this.order = value
    }
  }
