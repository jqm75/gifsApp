import { Injectable } from '@angular/core';

@Injectable({

  providedIn: 'root'

})

export class GifsService {

  private _historial:string[] = [];

  get historial(){

    
    return [...this._historial];
    
  } 
  
  buscarGifs( query:string ) {
    
    //if (query === '') {return}

    if( !this._historial.includes( query ) ) {

      this._historial.unshift( query )

    };
    
    this._historial.unshift( query )
    
    this._historial = this._historial.splice(0,10);

    console.log('🚀 ~ file: gifs.service.ts:23 ~ GifsService ~ buscarGifs ~ this._historial', this._historial)

    
  }

}
