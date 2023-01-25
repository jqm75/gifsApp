import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"; //Con este módulo llamaremos a la API. Añadirlo también en 'imports'.

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BusquedaComponent } from './gifs/busqueda/busqueda.component';

import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    GifsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
