import React from 'react'

const ElRey = ({ data }) => {

    const x = data.find(element => element.nombre.toUpperCase().includes("E"));


    const respuesta = () => {
        if (x) {
            return <p> {x.nombre} </p>
        } else {
            return <p> no hay reyes con ese resultado </p>
        }
    }

    return (
        <div>
            {respuesta()}
        </div>
    )
}

export default ElRey
