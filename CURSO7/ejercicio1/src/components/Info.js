import React, { useContext, useState } from 'react'
import { Data } from '../contexts/Main'
import marta from "../assets/marta.PNG"
import grace from "../assets/grace.PNG"
import aimee from "../assets/aimee.PNG"



const Info = () => {

  const {valores, numero, data, setData} = useContext(Data)

  const imagenes = [marta,grace,aimee]


  const mostarLugar = ()=>{
    setData(
      <div className='lugar'>
        <h2> {valores[numero].boton2} </h2>
        <h3> {valores[numero].direccion} </h3>
      </div>
    )
  }

  const mostarProfe = (num)=>{
    setData(
      <div className='lugar'>
        <h2> {valores[numero].boton1} </h2>
        <img src={imagenes[num]} alt='imagen' />
        <p> {valores[numero].nombre} </p>
      </div>
    )
  }

  return (
    <div className='info'>
        <h1> {valores[numero].titulo} </h1>
        <h3> {valores[numero].texto} </h3>
        <div>
          <button onClick={()=> mostarProfe(numero)}>{valores[numero].boton1}</button>
          <button onClick={()=> mostarLugar()}> {valores[numero].boton2} </button>
        </div>
        <div>
          {data}
        </div>
    </div>
  )
}

export default Info
