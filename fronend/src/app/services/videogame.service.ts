import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Videogame } from '../models/model.videogame';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {
  url = 'http://localhost:3000/videogames/';

  constructor(private http: HttpClient) {}

  getVideogames(): Observable<any>{
    return this.http.get(this.url);
  }

  deleteVideogame(_id: string):Observable<any>{
    return this.http.delete(this.url + _id);
  }

  saveVideogame(videogame: Videogame): Observable<any>{
    return this.http.post(this.url,videogame);
  }

  retrieveVideogames(_id: string): Observable<any>{
    return this.http.get(this.url + _id);
  }

  editVideogame(_id:string, videojuego: Videogame): Observable<any>{
    return this.http.put(this.url + _id,videojuego);
  }

}
