import React from 'react';
import { useAppDispatch, useAppSelector } from '../config/hooks';
import { agregar, mostr, TAREAS } from '../slicer/slicerTarea';
import "../estilos/botonAgregar.css";
import "../estilos/formulario.css";

export function Formulario() {
    const dispatch = useAppDispatch();
    const [escribir, setEscribir] = React.useState("");
    const mostrar: TAREAS = useAppSelector(state => state.tareas);
    const evento = (e: Ev) => {
        e.preventDefault();
        if (!escribir) {
            alert("No se pueden agregar espacios vacíos");
        } else {
            dispatch(agregar(escribir));
            setEscribir("");
            dispatch(mostr("cambiar"));
        }
    }
    const camb = () => {
        dispatch(mostr("cambiar"));
    }
    return (
        <>
            {mostrar.formulario ? (
                <div className="conte">
                    <h2>Agregar Tarea</h2>
                    <form className='formulario' onSubmit={evento}>
                        <div className="area-entrada">
                            <label>Escribir una nueva tarea</label>
                            <input
                                type="text"
                                className='entrada'
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEscribir(e.target.value)}
                                value={escribir}
                            />
                        </div>
                        <div className="area-boton">
                            <button className="boton" type="submit">Agregar</button>
                            <button className='boton' type="button" onClick={camb}>Cancelar</button>
                        </div>
                    </form>
                </div>
            ) : null}
        </>
    );
}
type Ev = React.FormEvent<HTMLFormElement>;