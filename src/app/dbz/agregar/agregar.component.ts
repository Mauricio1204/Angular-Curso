import { Component,  EventEmitter,  Input, Output } from '@angular/core';
import { Personaje} from '../interfases/dbz.interface';
import { DbzServise } from '../servises/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {


  @Input() nuevo: Personaje={
    nombre:'',
    poder:0
  }
    /* primero para llamar aun servisio
  lo hacemos atraves de la inyeccion de dependencias
  con el contructor */
  constructor (private dbService:DbzServise){
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length===0){
    return;
    }
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbService.agregarPersonaje(this.nuevo);
    this.nuevo={
      nombre:'',
      poder: 0
    }
  }


}
