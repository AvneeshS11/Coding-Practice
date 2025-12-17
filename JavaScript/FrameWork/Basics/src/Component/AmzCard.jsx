import React from 'react'
import './AmzCard.css'
const AmzCard = ({ head, p1, p2, pr1, pr2 }) => {
    return (
        <div>
            <div className='main'>
                <h1>{head}</h1>
                <div className='para'>
                    <p>{p1}</p>
                    <p>{p2}</p>
                </div>
                <div className='price'>
                    <p>{pr1}</p>
                    <p>{pr2}</p>
                </div>
            </div>
        </div>
    )
}

export default AmzCard
