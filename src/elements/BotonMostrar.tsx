import React from 'react'
import { useAppDispatch } from '../config/hooks'
import { mostr } from '../slicer/slicerTarea';

export function BotonMostrar() {
  const dispatch = useAppDispatch();
  const camb = ()=>{
    dispatch(mostr("cambio"));
  }
  return (
    <p className='botonAgregar' onClick={camb}>+</p>
  )
}

