import React from 'react'

export const Rey = ({ data, borrar }) => {

    return (
        <div>
            {data.filter((element) => element.nombre.includes("g"))
                .map((element, index) => (
                    <div key={index} id={index}>
                        <p>{element.nombre}</p>
                        <button onClick={() => borrar(element)}> borrar </button>
                    </div>
                ))}
        </div>
    )
}
