import { Injectable } from "@angular/core";
import { Personaje } from '../interfases/dbz.interface';

@Injectable()
export class DbzServise {

  private _personajes: Personaje[]=[
    {
      nombre:'Goku',
      poder:15000
    },
    {
      nombre:'Vegeta',
      poder:75000
    },
    {
      nombre:'Kirlin',
      poder:1000
    },
  ];
  get personajes():Personaje[]{
    return [...this._personajes];
  }
  constructor() {}
  //creando nuestro primer metodo
  agregarPersonaje(personaje: Personaje){
    this._personajes.push(personaje);
  }
}
