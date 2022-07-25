import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Videogame } from 'src/app/models/model.videogame';
import { VideogameService } from 'src/app/services/videogame.service';

@Component({
  selector: 'app-list-videogames',
  templateUrl: './list-videogames.component.html',
  styleUrls: ['./list-videogames.component.css']
})
export class ListVideogamesComponent implements OnInit {
  listVideogames: Videogame[] = [];

  constructor(private _videogameService: VideogameService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getVideojuegos();
  }

  getVideojuegos(){
    this._videogameService.getVideogames().subscribe(data => {
      console.log(data);
      this.listVideogames = data;
    }, error =>{
      console.log(error);
    })
  }

  deleteVideogame(id:any){
    this._videogameService.deleteVideogame(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito','Producto eliminado');
      this.getVideojuegos();
    }, error => {
      console.log(error)
    })
  }

}
