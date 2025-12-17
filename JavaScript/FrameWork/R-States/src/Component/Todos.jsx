import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Todos = () => {
    const [todos, settodos] = useState([{ task: "Newtodo", id: uuidv4(), isDone: false }])
    const [Newtodo, setNewtodo] = useState("")
    const addTask = () => {
        if (Newtodo === "") {
            alert("Task is empty..")
            return
        }
        settodos(() => [...todos, { task: Newtodo, id: uuidv4(), isDone: false }])
        setNewtodo("")
        // console.log("Heloo")
    }
    const NewTask = (e) => {
        // console.log(e.target.value)
        setNewtodo(e.target.value)
    }
    const deleteVal = (id) => {
        settodos(todos.filter((e) => e.id != id))

    }
    const UpperCaseAll = () => {
        settodos(() => todos.map((todo) => {
            return {
                ...todo,
                isDone: true
            };
        }))
    }
    const UpperCaseOne = (id) => {
        settodos(() => todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            } else {
                return todo
            }
        }))
    }
    const CheckBox = (id) => {
        settodos(todos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    isDone: todo.isDone ? false : true
                }
            } else return todo;
        }))
    }
    return (
        <div>
            <input
                placeholder='Enter the task..'
                value={Newtodo}
                onChange={NewTask}
            />
            <button onClick={addTask}>Add Task</button>
            <br /><br /><br />
            <hr></hr>

            <ul>
                {todos.map((e) =>
                    <li key={e.id} >
                        <span style={{ textDecoration: e.isDone ? "line-through" : "" }}>{e.task}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="checkbox" onChange={() => CheckBox(e.id)} />
                        <button onClick={() => deleteVal(e.id)}>Delete</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {/* <button onClick={()=>UpperCaseOne(e.id)}>UpperCase</button> */}
                    </li>
                )}
            </ul>
            <br /><br />
            <button onClick={UpperCaseAll}>All done</button>
        </div>
    )
}

export default Todos
