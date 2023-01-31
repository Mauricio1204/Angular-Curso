import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {


  herores : string[] = ['Spiderman','Ironman','Capitan america','Hulk','thor','Deat pool'];
  heroeBorrado: string = '';

  borrarHeore(){
    // console.log('Borrando...');
    // const heroreBorrado = this.herores.shift();
    // console.log(heroreBorrado);
    this.heroeBorrado = this.herores.shift() || '';

  }

}
