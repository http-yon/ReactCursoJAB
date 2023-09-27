import React from 'react'

const Card = ({ data, comprar },) => {
    return (
        <div className='cardCont'>
            {data.map((element, index) => (
                <div className='card' style={{ backgroundColor: element.color }}>
                    <h2>{element.nombre}</h2>
                    <img src={element.imagen} alt='hola mundo' />
                    <p>Precio:</p>
                    <p>${element.precio}</p>
                    <button onClick={() => comprar(element, index)}>Comprar</button>
                </div>
            ))}

        </div>
    )
}

export default Card
