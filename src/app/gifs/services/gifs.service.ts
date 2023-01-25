import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({

  providedIn: 'root'

})

export class GifsService {

  private apiKey: string = 'XMLHsoyUuQFurJz9aDyyy4WuDIUxXAnV';
  private _historial:string[] = [];

  // TODO: Cambiar tipado any al que le corresponda.

  public resultados: any[] = [];

  get historial(){

    return [...this._historial];
    
  } 
  
  constructor( private http: HttpClient ) {}


  buscarGifs( query:string ='' ) {
    
    //if (query === '') {return}

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query ) ) {

      this._historial.unshift( query )
      this._historial = this._historial.splice(0,10);

    };
    
    // Para la API -> Usamos http en lugar de fetch porque en NG ofrece mucho más.
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=XMLHsoyUuQFurJz9aDyyy4WuDIUxXAnV&q=${ query }&limit=10`)
      .subscribe( ( resp: any ) => {
        
        console.log( resp.data );
        
      })
  }

}
