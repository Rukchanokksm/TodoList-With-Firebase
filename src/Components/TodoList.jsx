/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react"
import { firebaseConfig } from "../utils/Config"
import { initializeApp } from "firebase/app"
import { getDatabase, onValue, ref } from "firebase/database"

const TodoList = () => {
  const app = initializeApp(firebaseConfig)
  const db = getDatabase(app)
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const todoRef = ref(db, "todos")
    onValue(todoRef, (Snapshot) => {
      const Data = Snapshot.val()
      const newTodolist = []
      for (let id in Data) {
        newTodolist.push({ id, ...Data[id] })
      }
      setTodoList(newTodolist)
    })
  }, [db])

  return (
    <div>
      {todoList &&
        todoList.map((todo, index) => {
          return <p key={index}>{todo.list}</p>
        })}
    </div>
  )
}

export default TodoList
