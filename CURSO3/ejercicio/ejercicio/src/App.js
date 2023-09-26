import { useState } from 'react'
import "./App.css";

const App = () => {

  const reyesGodos = [
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    }, {
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    }, {
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar"
    }
  ]


  let [numero, setNumero] = useState(0)


  const cambiar = () => {
    if (numero === 2) {
      setNumero(0)
    } else {
      setNumero(++numero)
    }
  }

  return (
    <div>
      <h2>La aficion principal de <div className='name'>{reyesGodos[numero].nombre}</div> es <div className='aficion'>{reyesGodos[numero].aficion}</div></h2>
      <button onClick={cambiar}>Cambiar</button>
    </div>
  )
}
export default App;