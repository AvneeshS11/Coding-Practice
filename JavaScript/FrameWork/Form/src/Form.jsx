import React from 'react'
import { useState } from 'react'
const Form = () => {
    const [FormData, setFormData] = useState({
        FullName: "",
        UserName: ""
    })
    const handleChange = (e) => {
        
        setFormData((obj)=>{
            return {...obj , [e.target.name] : e.target.value}
        })
    }
    const handleSubmit= (e)=>{
        e.preventDefault()
        console.log(FormData)
    }
    // const [fullname, setfullname] = useState("")
    // const [username, setusername] = useState("")
    // const handleName = (e) => {
    //     setfullname(e.target.value)
    // }
    // const handleUserName = (e)=>{
    //     setusername(e.target.value)
    // }
    return ( 
        <>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="kashi">FullName </label>
                <input type="text"
                    placeholder='Enter your name..'
                    value={FormData.FullName}
                    onChange={handleChange}
                    id='kashi' 
                    name='FullName'/>
                    
                <br /><br />
                <label htmlFor="kashii">UserName </label>
                <input type="text"
                    placeholder='Enter userName..'
                    value={FormData.UserName}
                    onChange={handleChange}
                    id='kashii' 
                    name='UserName'/>
                <button >Submit</button>
            </form>
        </>
    )
}

export default Form
