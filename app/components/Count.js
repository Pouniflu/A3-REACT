import React, { useState, useEffect } from "react"

export default function Count() {
    const [todolist, setTodolist] = useState([])
    const [todo, setTodo] = useState("")
    const [lastItem, setLastItem] = useState("")

    useEffect(() => {
        localStorage.setItem("todos", todolist)
        console.log("hello")
    }, [todolist])
    
    return (
        <div>
            <h1>To do :</h1>
            {todolist.map((item, i) => {
                return (
                    <p key={i} style={{style}}>{item}</p>
                )
            })}
            <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
            <button onClick={() => {setTodolist(todolist => [...todolist, todo]), setTodo}}>
                add todo
            </button>
        </div>
    )
}