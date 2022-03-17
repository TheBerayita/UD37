import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ObtenerdatosService } from '../obtenerdatos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  articulos:any = null;
  arrayArticulos:Array<any> = new Array();
  arrayPersonajes:Array<any> = new Array();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://rickandmortyapi.com/api/character/').subscribe(
      result => {
        this.articulos = result;
        this.arrayArticulos = Object.keys(this.articulos).map(key => ({type: key, value: this.articulos[key]}));
        this.arrayPersonajes = this.arrayArticulos[1].value;
        console.log("Arraypersonajes: " + this.arrayPersonajes);
        console.log(this.arrayArticulos[1].value[0].name);
        console.log(this.arrayArticulos[1].value[1].status);
        console.log(this.arrayArticulos[1].value[2].species);
        console.log(this.arrayArticulos[1].value[3].type);
        console.log(this.arrayArticulos[1].value[4].gender);
        console.log(this.arrayArticulos[1].value[5].origin);
      },
      error => {
        console.log('problemas');
      }

    )
  }
}
