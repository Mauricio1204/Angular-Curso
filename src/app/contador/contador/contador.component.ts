
import {Component} from '@angular/core'

@Component({
  selector: 'app-contador',
  template: `
              <h1>la base es: {{base}}</h1>
              <button (click)="acumular( + base)"> +{{base}}</button>
              <span> {{numero}} </span>
              <button (click)="acumular(- base)"> - {{base}}</button>
            `
})

export class ContadorComponent {
  titulo: string = 'contador App';
  numero: number = 10;
/*
  sumar(){
    this.numero += 1;
  }
  restar(){
     this.numero -= 1;
  }*/
  base: number =5
  acumular2(base: number){
    this.numero += base;
  }

  acumular (valor: number){
    this.numero += valor;
  }
}
