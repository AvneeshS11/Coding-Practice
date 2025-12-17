import React from 'react'
import "./Product.css"
const Product = ({ name, course, lists = [],rang}) => {
    let styles = {backgroundColor : "red"}
    return (
        <>
            <h1>Tumhare sahar me mayatt ko sab kandha nhi dete, hamre gaav me chhapper bhi sab milke uthate hai</h1>
            <div className='heloo'>
                <h1 style={{color : rang}}>My name is {name}</h1>
                <h2>I'm a {course} student</h2>


                <p>
                    {/* <ul> */}
                    {lists.map((e) => {
                        return <li>{e}</li>
                    })}
                    {/* </ul> */}
                </p>  
                {/* <ul>
                    {lists.map((e,i) => 
                        <li key={i} >{e}</li>
                    )}
                </ul> */}
            </div>
        </>
    )
}

export default Product
