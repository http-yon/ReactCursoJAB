import React, { useState } from 'react'
import "./App.css"

const App = () => {


  const [numero1, setNumero1] = useState()
  const [numero2, setNumero2] = useState()
  const [result, setResult] = useState()

  const sumar = ()=>{
    setResult(Number(numero1)+Number(numero2))
  }

  const modificar = (e)=>{
    setNumero1(e.target.value)
  }

  const modificar2 = (e) =>{
    setNumero2(e.target.value)
  }

  return (
    <div className='caja'>
      <input type='number' value={numero1} onChange={modificar} />+
      <input type='number' value={numero2} onChange={modificar2}/>=
      <input value={result} />=
      <button onClick={sumar}>SUMAR</button>
    </div>
  )
}

export default App
