import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador/contador.component';
import { HeroresModule } from './heroes/heros.module';
import { ContadorModule } from './contador/contador.module';
//Tarea:
//crear un contador llamado ContadorModule
//Declaraciones y Exportaciones


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HeroresModule,
    ContadorModule
  ],
  exports:[

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
