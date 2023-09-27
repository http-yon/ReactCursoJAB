import React, { useState } from 'react'
import Card from './components/Card'
import "./App.css"

const App = () => {

  const [precio, setPrecio] = useState(0)
  const [reyes, setReyes] = useState([
    {
      nombre: "Atanagildo",
      color: "darkolivegreen",
      precio: 178,
      imagen: "https://www.html6.es/img/rey_atanagildo.png"
    }, {
      nombre: "Ervigio",
      color: "crimson",
      precio: 169,
      imagen: "https://www.html6.es/img/rey_ervigio.png"
    }, {
      nombre: "Ataúlfo",
      color: "peru",
      precio: 81,
      imagen: "https://www.html6.es/img/rey_ataulfo.png"
    }, {
      nombre: "Leogivildo",
      color: "darkmagenta",
      precio: 126,
      imagen: "https://www.html6.es/img/rey_leogivildo.png"
    }, {
      nombre: "Recesvinto",
      color: "royalblue",
      precio: 141,
      imagen: "https://www.html6.es/img/rey_recesvinto.png"
    }, {
      nombre: "Sisebuto",
      color: "teal",
      precio: 69,
      imagen: "https://www.html6.es/img/rey_sisebuto.png"
    }
  ])


  const comprar = (data, index) => {
    const x = reyes.filter((element, i) => i !== index);
    setReyes(x)
    setPrecio(Number(precio) + Number(data.precio))
  }

  return (
    <div className='App'>
      <h1>Total a pagar : ${precio}</h1>
      <div className='ostia'>
        <Card data={reyes} comprar={comprar}></Card>
      </div>
    </div>
  )
}

export default App
