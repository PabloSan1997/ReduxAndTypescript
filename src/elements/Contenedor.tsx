import React from 'react';
import { useAppSelector } from '../config/hooks';
import { TAREAS } from '../slicer/slicerTarea';
import { Fila } from './Fila';
import "../estilos/contenedor.css"

export function Contenedor() {
    const tareas: TAREAS = useAppSelector(state => state.tareas);
    return (
        <div className="contenedor">
            {tareas.data.map(elementos =>
            (
                <Fila
                    key={(elementos.id).toString()}
                    id={elementos.id}
                    name={elementos.name}
                    estado={elementos.estado}
                />
            ))}
        </div>
    );
}