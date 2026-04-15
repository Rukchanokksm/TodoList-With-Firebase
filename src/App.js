import React, { useState, useEffect } from "react"
import "./App.css"
import Todos from "./Components/Todos"
import TodoList from "./Components/TodoList"
import { ref, push, remove, update, onValue } from "firebase/database"
import db from "./utils/Firebase"

function App() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const todosRef = ref(db, "todos")
    const unsubscribe = onValue(todosRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const loaded = Object.entries(data).map(([key, val]) => ({
          id: key,
          ...val,
        }))
        setTodoList(loaded)
      } else {
        setTodoList([])
      }
    })
    return () => unsubscribe()
  }, [])

  const handleAdd = (title) => {
    const todosRef = ref(db, "todos")
    const now = Date.now()
    push(todosRef, { list: title, complete: false, description: "", createdAt: now, updatedAt: now, completedAt: null })
  }

  const handleDelete = (id) => {
    const todoRef = ref(db, `todos/${id}`)
    remove(todoRef)
  }

  const handleToggle = (id) => {
    const todo = todoList.find((t) => t.id === id)
    if (!todo) return
    const nowComplete = !todo.complete
    const todoRef = ref(db, `todos/${id}`)
    update(todoRef, {
      complete: nowComplete,
      completedAt: nowComplete ? Date.now() : null,
    })
  }

  const handleUpdate = (id, { list, description }) => {
    const todoRef = ref(db, `todos/${id}`)
    update(todoRef, { list, description, updatedAt: Date.now() })
  }

  return (
    <div className="App">
      <div className="card">
        <Todos onAdd={handleAdd} />
        <TodoList todoList={todoList} onDelete={handleDelete} onToggle={handleToggle} onUpdate={handleUpdate} />
      </div>
    </div>
  )
}

export default App
