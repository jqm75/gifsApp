import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({

  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',

})

export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor( private gifsService:GifsService ) {} // Inyectable. Crear propiedad con un nombre gifsService de tipo GifsService (nombre del servicio). Debe importarse automáticamente (Línea 2). Esto se coloca pra poder usar el servicio en este componente.

  buscar( ){

    const valor = this.txtBuscar.nativeElement.value;

    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
    
  }

}
