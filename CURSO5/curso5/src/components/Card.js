import React from 'react'

const Card = ({ data }) => {
    return (
        <div className='elPapa'>
            {data.map((ele, i) => (
                <div key={i} className='divCont'>
                    <h2><span>{ele.nombre}</span> ha comido {ele.vacasComidas} en sus {ele.reinado} años de reinado</h2>
                    <img src={ele.imagen} alt="imagen" />
                </div>
            ))}
        </div>
    )
}

export default Card