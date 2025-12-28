import React from 'react'
import { useState, useEffect } from 'react'
const Joker = () => {
    const URL = "https://official-joke-api.appspot.com/random_joke"
    const [Joke, setJoke] = useState({})
    const getJoke = async () => {
        let res = await fetch(URL);
        let jsonRes = await res.json();
        setJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline })
        console.log(jsonRes)
    }
    useEffect(() => {
        const getFirstJoke = async () => {
            let res = await fetch(URL);
            let jsonRes = await res.json();
            setJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline })
            console.log(jsonRes)
        }
        getFirstJoke()
    }, [])

    return (
        <div>
            <h1>Joker..</h1>
            <h2>{Joke.setup}</h2>
            <h2>{Joke.punchline}</h2>
            <button onClick={getJoke}>NewJoke</button>
        </div>
    )
}

export default Joker
