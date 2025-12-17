import React, { useState } from 'react'

function fn(){
    console.log("Hi this one is Avneesh")
    return Math.random();
}
const Counter = () => {

    const [count, setCount] = useState(fn)
    console.log("Component is reRendering....")
    // console.log(`count = ${count}`)

    function handleClick() {
        setCount(x=>x + 1) 
    }

    return (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={handleClick} >Count Pluse</button>
        </div>
    )
}

export default Counter
