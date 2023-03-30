import React from 'react'
import { useAppDispatch } from '../config/hooks';
import { cambiar, eliminar, ObjectA } from '../slicer/slicerTarea'

export function Fila({id, name, estado}:ObjectA) {
    const texto:String = `${id}.- ${name}`;
    const dispatch = useAppDispatch();
    const borrar = ()=>{
      dispatch(eliminar(id))
    }
    const buena =()=>{
      dispatch(cambiar(id));
    }
  return (
    <div className={estado?"fila hecha":"fila"}>
        <span className="palomita" onClick={buena}>✓</span>
        <p className="nombre-tarea">{texto}</p>
        <span className="cerrar" onClick={borrar}>X</span>
    </div>
  )
}

