import React from "react"
import Todo from "./Todo"

const TodoList = ({ todoList, onDelete, onToggle, onUpdate }) => {
  if (todoList.length === 0) {
    return <p className="todo-empty">No tasks yet. Add one above!</p>
  }

  return (
    <div className="todo-list">
      {todoList.map((todo) => (
        <Todo todo={todo} key={todo.id} onDelete={onDelete} onToggle={onToggle} onUpdate={onUpdate} />
      ))}
    </div>
  )
}

export default TodoList
