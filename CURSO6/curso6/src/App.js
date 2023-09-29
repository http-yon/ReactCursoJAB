import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([])
  let [estado, setEstado] = useState(0)

  useEffect(() => {
    const url = "https://randomuser.me/api/?results=3"
    const peticion = fetch(url)
    peticion
      .then((datos) => datos.json())
      .then(lectura => {
        lectura.results.map((persona) => {
          setData((e) => [...e,
          <div key={persona.email}>
            <div>
              {persona.name.first} {persona.name.last}
            </div>
            <img src={persona.picture.large} alt='imagen' />
          </div>
          ])
        })
      })
      .catch(() => console.log("se ha producido un error"))


  }, [estado])


  const cambiarEstado = ()=>{
    setData([])
    setEstado(estado + 1)
  }


  return (
    <div>
      <h1>Empleado/a del mes</h1>
      <div>
        {data}
        <button onClick={cambiarEstado}>Cambiar</button>
      </div>
    </div>
  )
}

export default App
