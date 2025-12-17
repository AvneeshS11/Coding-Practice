import React from 'react'
import TicketNum from './TicketNum'

const Ticket = ({ ticket }) => {
    return (
        <div className='Ticket'>
            {ticket.map((e, idx) =>
                <TicketNum num={e} key={idx} />
            )}
        </div>
    )
}

export default Ticket
