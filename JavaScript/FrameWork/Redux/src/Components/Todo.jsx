import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddForm from './AddForm'
import { deleteTodo, markAsDone } from '../Features/todo/todoSlice'
const Todo = () => {
    const todos = useSelector((state) => state.todos)
    const Dispatch = useDispatch();
    console.log(todos)
    const Remover = (e) => {
        Dispatch(deleteTodo(e));
    }
    const Done = (e) => {
        console.log(e)
        Dispatch(markAsDone(e))
    }
    return (
        <>
            <h1>Todo List App</h1>
            <AddForm />
            <ul>
                {todos.map((todo) =>
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }} >{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => Done(todo.id)}>Mark As Done</button>
                        &nbsp;&nbsp;
                        <button onClick={() => Remover(todo.id)}>Delete</button>
                    </li>)}
            </ul>
        </>
    )
}

export default Todo
