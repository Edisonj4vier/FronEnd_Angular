import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVideogamesComponent } from './components/create-videogames/create-videogames.component';

//Componentes
import { ListVideogamesComponent } from './components/list-videogames/list-videogames.component';

const routes: Routes = [
  {path: '',component: ListVideogamesComponent},
  {path: 'crear-videogame', component: CreateVideogamesComponent},
  {path: 'editar-videogame/:id',component: CreateVideogamesComponent},
  {path: '**',redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
