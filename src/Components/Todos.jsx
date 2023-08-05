import React, { useState } from "react"
// import firebase from "../utils/Firebase"
import { getDatabase, push, ref } from "firebase/database"
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "../utils/Config"

const Todoform = () => {
  const app = initializeApp(firebaseConfig)
  const db = getDatabase(app)
  // const myList = []
  const [title, setTitle] = useState("")
  // const [onLists, setOnList] = useState(myList)

  const handleSubmit = (e) => {
    e.preventDefault()
    // setOnList([
    //   ...onLists,
    //   {
    //     id: Math.floor(Math.random() * 1000),
    //     list: title,
    //     del: false,
    //   },
    // ])
    const todoRef = ref(db, "todos")
    const todo = {
      list: title,
      del: false,
    }
    push(todoRef, todo)
    setTitle("")
  }

  // const toggleList = (index) => {
  //   const currentList = [...onLists]
  //   currentList[index].del = !currentList[index].del

  //   setOnList(currentList)
  // }

  // const deleteBtn = (index) => {
  //   const currentList = [...onLists]

  //   currentList.splice(index, 1)

  //   setOnList(currentList)
  // }

  return (
    <section>
      <div>
        <div>
          <p>REACT TO DO LIST</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Add list:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <input type="submit" value="Submit" />
        </form>
        {/* <div>
          {onLists.map((onList, index) => {
            return <Task key={onList.id} onList={onList} index={index} toggleList={toggleList} deleteBtn={deleteBtn} />
          })}
        </div> */}
      </div>
    </section>
  )
}

export default Todoform
