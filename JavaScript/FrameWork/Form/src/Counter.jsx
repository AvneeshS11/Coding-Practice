import React from 'react'
import { useState, useEffect } from 'react'
const Counter = () => {
    const [Count, setCount] = useState(0)

    useEffect(function Print(){
        console.log("I am the Side Effect")
    })
    useEffect(() => {
      console.log('Heloooooo')
    }, [])
    
    return (
        <div>
            <h1>Count = {Count}</h1>
            <button onClick={() => setCount((curr) => curr + 1)} >Increase</button>
        </div>
    )
}

export default Counter
