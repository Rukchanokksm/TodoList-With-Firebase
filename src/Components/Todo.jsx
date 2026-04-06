import React from "react"
// Firebase disabled temporarily
// import { ref, remove, update } from "@firebase/database"
// import db from "../utils/Firebase"

function Todo({ todo, onDelete, onToggle }) {
  const deleteTodo = () => onDelete(todo.id)
  const checkList = () => onToggle(todo.id)

  return (
    <div className="todo-item">
      <input className="todo-checkbox" type="checkbox" checked={todo.complete} onChange={checkList} />
      <span className={`todo-text${todo.complete ? " completed" : ""}`}>{todo.list}</span>
      <button className="todo-delete-btn" type="button" onClick={deleteTodo}>
        ✕
      </button>
    </div>
  )
}

export default Todo
