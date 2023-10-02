import React, { useContext } from 'react'
import españa from "../assets/spain.jpg"
import england from  "../assets/uk.png"
import francia from  "../assets/francia.png"
import { Data } from '../contexts/Main'


const Banderas = () => {

  const banderas = [españa,england,francia]
  const {setNumero,setData} = useContext(Data)

  return (
    <div className='banderas'>
      {banderas.map((element,i) => (
        <div key={i}>
          <img src={element} alt={i} onClick={()=> {
            setNumero(i)
            setData(null)}}/>
        </div>
      ))}
    </div>
  )
}

export default Banderas
