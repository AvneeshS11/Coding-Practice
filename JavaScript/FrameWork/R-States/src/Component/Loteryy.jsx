import React from 'react'
import { getTicket, sum } from './helper'
import Ticket from './Ticket'
import { useState } from 'react'
const Loteryy = ({ size, winSum }) => {
    const [ticket, setticket] = useState(getTicket(size))
    let total = winSum(ticket)
    const refresh = () => {
        setticket(getTicket(size))
    }
    return (
        <div className='Lotery'>
            <h1>LOTERY TICKET</h1>
            <Ticket ticket={ticket} />
            {total  && <h2>Congratulations, you won!🎉🏆</h2>}
            <br />
            <br />
            <button onClick={refresh}>Buy new Ticket</button>
        </div>
    )
}

export default Loteryy
