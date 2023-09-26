import React, { useRef } from 'react';
import imagen1 from './imagenes/rey_atanagildo.png';
import imagen2 from './imagenes/rey_sisebuto.png';
import './App.css';

function App() {

  const incrementar = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;

    if (e.target.innerHTML === "8") {
      e.target.style.backgroundColor = "red"
    }

    if (e.target.innerHTML === "10") {
      e.target.style.backgroundColor = "white"
      e.target.innerHTML = 1
    }

  }

  const cambioImg = (e) => {
    if (e.target.src.includes("atanagildo")) {
      e.target.src = imagen2
    } else {
      e.target.src = imagen1
    }
  }

  const refcaja = useRef()
  const cambio = 4500
  const convertir = () => {
    refcaja.current.innerHTML = Number(refcaja.current.innerHTML) * cambio
  }

  const lectura = (e) => {
    refcaja.current.innerHTML = e.target.value
  }

  return (
    <>
      <div className="caja" onClick={incrementar} ref={refcaja}>1</div>
      <button onClick={convertir}> Aceptar</button>
      <div>
        <img onClick={cambioImg} src={imagen1} />
      </div>
      <input onChange={lectura} className="campo" />
    </>
  )
}

export default App;
