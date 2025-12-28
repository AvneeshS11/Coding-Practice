import React from 'react'
import { useState } from 'react'
import { addTodo } from '../Features/todo/todoSlice'
import { useDispatch } from 'react-redux'
const AddForm = () => {
    const [task, settask] = useState("")
    const dispatch = useDispatch();
    const handleSubmit = (evt)=>{
        evt.preventDefault();
        if(task == ""){
            alert("Enter the task");
            return;
        }
        dispatch(addTodo(task))
        settask("")
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={(e) => settask(e.target.value)} />
                <button>Add Task</button>
            </form>
        </>
    )
}

export default AddForm
