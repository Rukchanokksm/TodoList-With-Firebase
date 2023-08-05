import React from "react"
import "./App.css"
import Todos from "./Components/Todos"
import TodoList from "./Components/TodoList"

function App() {
  return (
    <div className="App">
      <Todos />
      <TodoList />
    </div>
  )
}

export default App
