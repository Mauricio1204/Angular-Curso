import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfases/dbz.interface';
import { DbzServise } from '../servises/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

//parte del servico
  // personajes: Personaje [] = []; "esta parte pertenese al la forma de llamar al servisio por medio del constructor"


  // get personajes(): Personaje[] {
  //   return this.dbzServise.personajes;
  // }//podemos optener la informacion atraves de esta forma


  // agregarNuevoPersonaje( argumento :Personaje ) {
  //   this.personajes.push(argumento);
  // } esta parte no es nesesaria a la hora de ejecutar el servisio
  //constructor (private dbzServise: DbzServise){
    //this.personajes = this.dbzServise.personajes; esta linea es una forma de llamar a un servisio en la clase
  //}
  //fin del servico

  nuevo: Personaje={
    nombre:'Maestro Roshi',
    poder: 15000
  }
  constructor(){
    console.log('Servisio inicioalizado');

  }



}
