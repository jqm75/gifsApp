import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})

export class ResultadosComponent {
  // Inyectamos el servicio gifs.service.
  constructor( private gifsService: GifsService ) {}

  get resultados() {

    return this.gifsService.resultados;

  } 

}
