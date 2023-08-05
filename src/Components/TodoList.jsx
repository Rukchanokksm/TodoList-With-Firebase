/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react"
import { onValue, ref } from "firebase/database"
import Todo from "./Todo"
import db from "../utils/Firebase"

const TodoList = () => {
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
      {/* {todoList &&
        todoList.map((todo, index) => {
          return (
            <>
              <div key={index}>
                <p>{todo.list}</p>
                <p>{todo.id}</p>
              </div>
            </>
          )
        })} */}
      {todoList &&
        todoList.map((todo, index) => {
          return <Todo todo={todo} key={index} />
        })}
    </div>
  )
}

export default TodoList
