import React from 'react'
import { useState } from 'react'
const Lodubox = () => {
    const [moves, setmoves] = useState({ blue: 0, red: 0, green: 0, yellow: 0 })

    function Red() {
        moves.red += 1;
        setmoves({ ...moves })
    }
    function Blue() {
        moves.blue += 1;
        setmoves({ ...moves })
    }
    function Green() {
        moves.green += 1;
        setmoves({ ...moves })
    }
    function Yellow() {
        setmoves((prevM) => {
            return { ...prevM, yellow: prevM.yellow + 1 }
        });
    }

    return (
        <div>
            <p>Red = {moves.red} </p>
            <button onClick={Red} style={{ backgroundColor: "red" }}>Red</button>
            <p>Green = {moves.green}</p>
            <button onClick={Green} style={{ backgroundColor: "green" }}>Green</button>
            <p>Blue = {moves.blue}</p>
            <button onClick={Blue} style={{ backgroundColor: "blue" }}>Blue</button>
            <p>Yellow = {moves.yellow}</p>
            <button onClick={Yellow} style={{ backgroundColor: "yellow", color:"black" }}>Yellow</button>
        </div>
    )
}

export default Lodubox
