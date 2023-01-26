import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private apiKey: string = 'XMLHsoyUuQFurJz9aDyyy4WuDIUxXAnV';
  private _historial:string[] = [];

  // TODO: Cambiar any por el tipado que le corresponda.

  public resultados: any[] = [];

  get historial(){

    return [...this._historial];
    
  } 
  
  // Con este HttpClient, ya se pueden hacer peticiones GET, PUT, POST de las API. Funciona en base a OBSERVABLES, que son más poderosos que la promesas de JS. No es mejor, da más control.
  constructor( private http: HttpClient ) {}

  buscarGifs( query:string ='' ) {
    
    //if (query === '') {return}
    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query ) ) {
      this._historial.unshift( query )
      this._historial = this._historial.splice(0,10);
    };
    
    // Para la API -> Usamos http, con la petición GET a la API en lugar de fetch porque en NG ofrece mucho más. Retorna un OBSERVABLE.

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=XMLHsoyUuQFurJz9aDyyy4WuDIUxXAnV&q=${ query }&limit=10`)
      .subscribe( ( resp: any ) => { // <- SUBSCRIBE, es parecido al THEN.Se ejecuta cuando tengamos la resolución de la petición a la API, GET en este caso. Devuelve una respuesta (resp).
        console.log( resp.data );
        this.resultados = resp.data;
        
      });
  }

}
