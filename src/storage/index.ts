import { ObjectA } from "../slicer/slicerTarea";



export function guardar(texto:String):void{
    localStorage.tareas = JSON.stringify(texto);
}
export function obtener():ObjectA[]{
    if(!localStorage.tareas){
        localStorage.tareas=JSON.stringify([]);
    }
    return JSON.parse(localStorage.tareas);
}