import { Component, OnInit } from '@angular/core';

interface personaje {
  nombre:string;
  poder:number;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {


  nuevo={
    nombre:'Trunks',
    poder:15000
  }
  agregar(){
    console.log(this.nuevo);
  }
  cambiarNombre(event:any){
    console.log(event.target.value);
  }



}
