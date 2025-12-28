import React from 'react'
import { useState } from 'react'
const CommentsForm = () => {
    const [FormData, setFormData] = useState({
        username: '',
        remark: '',
        rating: 5
    })
    const handleChange = (e) => {
        setFormData((obj) => {
            return { ...obj, [e.target.name]: e.target.value }
        })
    }
    const handleSubmit = (e) => {
        console.log(FormData)
        e.preventDefault();
        setFormData({
            username: '',
            remark: '',
            rating: 5
        })
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h4>Give Your Comments..</h4>
                <label htmlFor="username" >UserName </label>
                <input type="text" id='username' placeholder='UserName' value={FormData.username} name='username' onChange={handleChange} />
                <br /><br />
                <label htmlFor="remark">Remark </label>
                <textarea name="remark" id="remark" placeholder='Remark' value={FormData.remark} onChange={handleChange}></textarea>
                <br /><br />
                <label htmlFor="rating">Rating </label>
                <input type="number" min={1} max={5} value={FormData.rating} name='rating' onChange={handleChange} />
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CommentsForm
