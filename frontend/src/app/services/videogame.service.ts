import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  URL_API = 'http://localhost:3000/videogames'

  constructor(private http:HttpClient) { }

  getVideogames(){
    return this.http.get(this.URL_API);
  }
}
