import "./App.css";
import React, { useState } from 'react'


const App = () => {
  const cambios = [
    {
      moneda: "Euro",
      cambio: 1,
    }, {
      moneda: "Peso argentino",
      cambio: 118.6,
    }, {
      moneda: "Peso colombiano",
      cambio: 4543.5,
    }, {
      moneda: "Peso mexicano",
      cambio: 23.2,
    }, {
      moneda: "Dólar",
      cambio: 1.14
    }
  ]


  let [arg, setArgentinian] = useState()
  let [col, setColombian] = useState()
  let [mx, setMexican] = useState()
  let [dll, setDolar] = useState()

  const cambioEuro = (e) => {
    setArgentinian(Number(e.target.value) * cambios[1].cambio)
    setColombian(Number(e.target.value) * cambios[2].cambio)
    setMexican(Number(e.target.value) * cambios[3].cambio)
    setDolar(Number(e.target.value) * cambios[4].cambio)
  }

  return (
    <div>
      <label htmlFor="euros">Euro</label>
      <input onChange={cambioEuro} id="euros" type="number" />

      <label htmlFor="argen">Peso Argentino</label>
      <input value={arg} id="argen" type="number" readOnly />

      <label htmlFor="colo">Peso Colombiano</label>
      <input value={col} id="colo" type="number" readOnly />

      <label htmlFor="mex">Peso Mexicano</label>
      <input value={mx} id="mex" type="number" readOnly />

      <label htmlFor="dolar">Dolar</label>
      <input value={dll} id="dolar" type="number" readOnly />

    </div>


  )
}

export default App;