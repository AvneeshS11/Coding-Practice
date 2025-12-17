import React, { useState } from 'react'
import { getTicket, sum } from './helper'
import './Lotery.css'
const Lotery = () => {
    const [ticket, setticket] = useState(getTicket(3))
    let isWinning = sum(ticket) === 15

    const buyNewTicket=()=>{
        setticket(getTicket(3))
    }
    return (
        <>
            <h1>LOTERY TICKET</h1>
            <div className='Ticket'>
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            {
                isWinning && <h2>You Are the Winner!</h2>
            }
            <button onClick={buyNewTicket}>Buy New Ticket</button>
        </>
    )
}

export default Lotery
