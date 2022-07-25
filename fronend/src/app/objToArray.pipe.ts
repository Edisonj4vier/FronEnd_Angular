import { Pipe, PipeTransform } from "@angular/core";
import { Videogame } from "./models/model.videogame";

@Pipe({
    name: 'ObjToArray',
})

export class ObjToArrayPipe implements PipeTransform{
    transform(object: Videogame[]= []): Videogame[]{
        return Object.values(object);
    }
}