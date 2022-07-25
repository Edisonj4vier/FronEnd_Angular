import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http'
//componentes
import { AppComponent } from './app.component';
import { CreateVideogamesComponent } from './components/create-videogames/create-videogames.component';
import { ListVideogamesComponent } from './components/list-videogames/list-videogames.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObjToArrayPipe } from './objToArray.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CreateVideogamesComponent,
    ListVideogamesComponent,
    ObjToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
