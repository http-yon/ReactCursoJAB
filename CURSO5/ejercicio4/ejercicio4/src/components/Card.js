import React from 'react'

const Card = ({ data, contador }) => {

    const x = data.filter(element => element.vacasComidas > 10)

    return (
        <div className='cardCont'>
            {x.map((element, i) => (
                <div key={i} className='card'>
                    <p> {element.nombre} </p>
                    <div>
                        <p onClick={(e) => contador(e)}> 0 </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card
