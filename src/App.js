import React, { useState } from "react"
import "./App.css"
import Todos from "./Components/Todos"
import TodoList from "./Components/TodoList"

function App() {
  const [todoList, setTodoList] = useState([])

  const handleAdd = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      list: title,
      complete: false,
    }
    setTodoList((prev) => [...prev, newTodo])
  }

  const handleDelete = (id) => {
    setTodoList((prev) => prev.filter((t) => t.id !== id))
  }

  const handleToggle = (id) => {
    setTodoList((prev) => prev.map((t) => (t.id === id ? { ...t, complete: !t.complete } : t)))
  }

  return (
    <div className="App">
      <div className="card">
        <Todos onAdd={handleAdd} />
        <TodoList todoList={todoList} onDelete={handleDelete} onToggle={handleToggle} />
      </div>
    </div>
  )
}

export default App
