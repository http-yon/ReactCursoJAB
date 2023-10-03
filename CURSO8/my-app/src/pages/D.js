import React from 'react'
import { useParams } from 'react-router-dom'


const D = () => {
    const dato = useParams()
    console.log(dato);
  
    return (
    <div>
        {dato.letra}
    </div>
    )
}


export default D