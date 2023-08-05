import React, { useState } from "react"
// import firebase from "../utils/Firebase"
import { push, ref } from "firebase/database"
import db from "../utils/Firebase"

const Todoform = () => {
  const [title, setTitle] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const todoRef = ref(db, "todos")
    const todo = {
      list: title,
      complete: false,
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
