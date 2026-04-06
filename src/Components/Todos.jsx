import React, { useState } from "react"
// Firebase disabled temporarily
// import { push, ref } from "firebase/database"
// import db from "../utils/Firebase"

const Todoform = ({ onAdd }) => {
  const [title, setTitle] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd(title)
    setTitle("")
  }

  return (
    <div>
      <p className="card-title">MY TODO LIST</p>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button className="todo-add-btn" type="submit">+</button>
      </form>
    </div>
  )
}

export default Todoform
