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

  deleteVideogame(id: string):Observable<any>{
    return this.http.delete(this.url + id);
  }

  saveVideogame(videogame: Videogame): Observable<any>{
    return this.http.post(this.url,videogame);
  }

  retrieveVideogames(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }

  editVideogame(id:string, videogame: Videogame): Observable<any>{
    return this.http.put(this.url + id,videogame);
  }

}
