import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ObtenerdatosService {

  articulos:any = null;
  arrayArticulos:Array<any> = new Array();
  arrayPersonajes:Array<any> = new Array();

  constructor(private http: HttpClient) {
    }

  obtenerDatos(){

    this.http.get("https://rickandmortyapi.com/api/character/").subscribe(
      result => {
        this.articulos = result;
        this.arrayArticulos = Object.keys(this.articulos).map(key => ({type: key, value: this.articulos[key]}));
        this.arrayPersonajes = this.arrayArticulos[1].value;
        console.log(this.arrayPersonajes);
        return this.arrayPersonajes;
      },
      error => {
        console.log('problemas');
      }

    )
  }

}
