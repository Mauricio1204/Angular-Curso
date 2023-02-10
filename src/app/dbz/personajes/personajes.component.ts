import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfases/dbz.interface';
import { DbzServise } from '../servises/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {



  // @Input() personajes: Personaje[] =[];

  get personajes()  {
    return this.dbzServise.personajes;
  }
  constructor( private dbzServise:DbzServise){
  }
}
