import React from 'react'
import { Formulario } from './elements/Agregar'
import { BotonMostrar } from './elements/BotonMostrar'
import { Contenedor } from './elements/Contenedor'
import { Header } from './elements/Header'
import "./estilos/app.css"
function App() {
  return (
    <>
      <Header/>
      <Contenedor/>
      <Formulario/>
      <BotonMostrar/>
    </>
  )
}

export default App
