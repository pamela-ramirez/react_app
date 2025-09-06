import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting="Hola, bienvenidos a mi Tienda"></ItemListContainer>
    </>
  )

  
}

export default App
