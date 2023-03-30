import React from 'react';
import { useAppSelector } from '../config/hooks';
import { TAREAS } from '../slicer/slicerTarea';
import "../estilos/header.css"

export function Header():JSX.Element{
    const tarea:TAREAS = useAppSelector(state=>state.tareas);
    const hechas = tarea.data.filter(elementos=>elementos.estado);
    return (
        <header>
            <h1>Tareas</h1>
            <p>Tareas hechas: {hechas.length}/{tarea.data.length}</p>
        </header>
    );
}