import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({

  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']

})

export class SidebarComponent {

  constructor( private gifsService:GifsService ){ }
  
  getHistorial() {
    return this.gifsService.historial
  }
  
}
