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
  page!: number;
  pageSize = 3;
  pageSizes = [3, 6, 9];
  
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.getVideojuegos();
  }  

  constructor(private _videogameService: VideogameService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getVideojuegos();
  }

  getVideojuegos(){
    this._videogameService.getVideogames().subscribe(resp =>
      {
      console.log(resp);
      this.listVideogames = resp.content;
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
