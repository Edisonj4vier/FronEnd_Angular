import { Component, OnInit } from '@angular/core';
import { VideogameService } from 'src/app/services/videogame.service';
@Component({
  selector: 'app-videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.css']
})
export class VideogameComponent implements OnInit {

  constructor(private videoGameService: VideogameService) { }

  ngOnInit(): void {
    this.videoGameService.getVideogames().subscribe(
      res => console.log(res),
      err => console.error(err)

    );
    
  }

}
