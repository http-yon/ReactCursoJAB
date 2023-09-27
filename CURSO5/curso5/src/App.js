import React from 'react'
import Card from './components/Card'
import "./App.css"

const App = () => {

  const reyes = [
    {
      nombre: "Atanagildo",
      reinado: 15,
      vacasComidas: 9,
      imagen: "https://www.html6.es/img/rey_atanagildo.png"
    }, {
      nombre: "Ervigio",
      reinado: 7,
      vacasComidas: 3,
      imagen: "https://www.html6.es/img/rey_ervigio.png"

    }, {
      nombre: "Ataúlfo",
      reinado: 5,
      vacasComidas: 16,
      imagen: "https://www.html6.es/img/rey_ataulfo.png"
    }, {
      nombre: "Leovigildo",
      reinado: 18,
      vacasComidas: 3,
      imagen: "https://www.html6.es/img/rey_leovigildo.png"

    }, {
      nombre: "Sisebuto",
      reinado: 9,
      vacasComidas: 13,
      imagen: "https://www.html6.es/img/rey_sisebuto.png"
    }, {
      nombre: "Recesvinto",
      reinado: 19,
      vacasComidas: 11,
      imagen: "https://www.html6.es/img/rey_recesvinto.png"

    }, {
      nombre: "Teodorico",
      reinado: 33,
      vacasComidas: 12,
      imagen: "https://www.html6.es/img/rey_teodorico.png"
    }
  ]



  return (
    <div>
      <h1>ACTIVIDAD 1</h1>
      <br></br>
      <br></br>
      <Card data={reyes} />
    </div>
  )
}

export default App
