import React from 'react'

const ElRey = ({ data }) => {

    const x = data.filter(element => element.nombre.toUpperCase().includes("E"))
    const y = x.find((ele)=> ele.includes("E"))
        console.log(y);

    return (
        <div>
            <p>SI</p>
        </div>
    )
}

export default ElRey
