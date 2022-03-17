import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickService {

  constructor(private http: HttpClient) { }

  retornar(){
    return this.http.get('https://rickandmortyapi.com/api/character/');
  }
}
