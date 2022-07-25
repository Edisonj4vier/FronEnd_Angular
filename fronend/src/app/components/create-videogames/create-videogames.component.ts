import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Videogame } from 'src/app/models/model.videogame';
import { VideogameService } from 'src/app/services/videogame.service';

@Component({
  selector: 'app-create-videogames',
  templateUrl: './create-videogames.component.html',
  styleUrls: ['./create-videogames.component.css']
})
export class CreateVideogamesComponent implements OnInit {

  videogameForm: FormGroup;
  titulo = 'Crear Videojuego';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _videogameService: VideogameService,
              private aRouter: ActivatedRoute)  {
    this.videogameForm = this.fb.group({
      videojuego: ['',Validators.required],
      descripcion: ['',Validators.required],
      categoria: ['',Validators.required],
      fecha_estreno: ['',Validators.required],
      precio: ['',Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarVideojuego(){
    
    const VIDEOGAME: Videogame = {
      title: this.videogameForm.get('videojuego')?.value,
      description: this.videogameForm.get('descripcion')?.value,
      category: this.videogameForm.get('categoria')?.value,
      effectiveDate: this.videogameForm.get('fecha_estreno')?.value,
      price: this.videogameForm.get('precio')?.value
    }

    if(this.id !== null){
      this._videogameService.editVideogame(this.id, VIDEOGAME).subscribe(data => {
        this.toastr.success('El producto fue actualizado con exito!', 'Videojuego Actualizado!');
        this.router.navigate(['/']);
      }, error =>{
        console.log(error);
        this.videogameForm.reset();
      })

    }else{
      console.log(VIDEOGAME);
      this._videogameService.saveVideogame(VIDEOGAME).subscribe(data => {
        this.toastr.success('El producto fue creado con exito!', 'Videojuego Creado!');
        this.router.navigate(['/']);
      }, error =>{
        console.log(error);
        this.videogameForm.reset();
      })

    }

  
    
  }
  
  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Videojuego';
      this._videogameService.retrieveVideogames(this.id).subscribe(data => {
        this.videogameForm.setValue({
          videojuego: data.title,
          descripcion: data.description,
          categoria: data.category,
          fecha_estreno: data.effectiveDate,
          precio: data.precio
        })
      })
    }

  }
}
