import { createSlice, Slice } from "@reduxjs/toolkit";
import { guardar, obtener } from "../storage";


const iniciar: TAREAS = {
    data: obtener(),
    formulario: false
};

const sliceTarea: Slice = createSlice({
    name: "tarea",
    initialState: iniciar,
    reducers: {
        agregar: (state, action) => {
            const estado: TAREAS = state;
            const num = estado.data.length === 0 ? 1 : estado.data[estado.data.length - 1].id + 1;
            const objeto = { id: num, estado: false, name: action.payload }
            state.data = [...state.data, objeto];
            guardar(state.data);
        },
        eliminar: (state, action) => {
            const estado: ObjectA[] = state.data;
            const indice = estado.findIndex(ele => ele.id === Number(action.payload));
            if (indice === -1) {
                console.error("no se encuentra elemento")
            } else {
                state.data.splice(indice, 1);
                guardar(state.data);
            }
        },
        cambiar: (state, action) => {
            const estado: ObjectA[] = state.data;
            const indice = estado.findIndex(ele => ele.id === Number(action.payload));
            if (indice === -1) {
                console.error("no se encuentra elemento")
            } else {
                state.data[indice].estado = !estado[indice].estado;
                guardar(state.data);
            }
        },
        mostr: (state, action) => {
            state.formulario = !state.formulario;
        }
    }
});

const reducerTarea = sliceTarea.reducer;
const { agregar, eliminar, cambiar, mostr } = sliceTarea.actions;

export { reducerTarea, agregar, eliminar, cambiar, mostr }
export type TAREAS = {
    data: ObjectA[],
    formulario: Boolean
}
export interface ObjectA {
    name: String,
    id: number,
    estado: Boolean
}