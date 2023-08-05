import React from "react"
import { ref, remove, update } from "@firebase/database"
import db from "../utils/Firebase"

function Todo({ todo }) {
  const deleteTodo = async () => {
    const todoRef = ref(db, `todos/${todo.id}`)
    await remove(todoRef)
      .then(() => {
        alert("Delete done!")
      })
      .catch((error) => {
        console.log("Error deleting todo:", error)
        alert("Error deleting todo. Please try again later.")
      })
  }

  const checkList = async () => {
    const todoRef = ref(db, `todos/${todo.id}`)
    await update(todoRef, {
      complete: !todo.complete,
    })
      .then(() => alert("checked done !"))
      .catch((error) => {
        console.log("Error check todo:", error)
        alert("Error ckecking todo. Please try again later.")
      })
  }

  return (
    <div>
      <input type="checkbox" value={todo.complete} onChange={checkList} />
      <span style={{ textDecoration: todo.complete ? "line-through" : "none" }}>{todo.list}</span>
      <button type="button" onClick={deleteTodo}>
        Delete
      </button>
    </div>
  )
}

export default Todo
