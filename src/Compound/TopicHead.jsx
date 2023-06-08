/* eslint-disable react/jsx-key */
import React, { useState } from "react"
import Task from "./Task"

const TopicHead = () => {
  const myList = [
    {
      id: Math.floor(Math.random() * 1000),
      list: "Pay Bill",
      del: false,
    },
  ]
  const [inPutList, setInput] = useState("")
  const [onLists, setOnList] = useState(myList)

  const handleSubmit = (e) => {
    e.preventDefault()
    setOnList([
      ...onLists,
      {
        id: Math.floor(Math.random() * 1000),
        list: inPutList,
        del: false,
      },
    ])
    setInput("")
  }

  const toggleList = (index) => {
    const currentList = [...onLists]
    // console.log(currentList[index])
    currentList[index].del = !currentList[index].del

    setOnList(currentList)
  }

  const deleteBtn = (index) => {
    const currentList = [...onLists]

    currentList.splice(index, 1)

    setOnList(currentList)
  }

  return (
    <section>
      <div>
        <div>
          <p>REACT TO DO LIST</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Add list:</label>
          <input type="text" value={inPutList} onChange={(e) => setInput(e.target.value)} required />
          <input type="submit" value="Submit" />
        </form>
        <div>
          {onLists.map((onList, index) => {
            return (
              <Task key={onList.id} onList={onList} index={index} toggleList={toggleList} deleteBtn={deleteBtn} />
              // <div>
              //   <p onClick={toggleText}>{onList.list}</p>
              //   <button onClick={handleDel}>Delete</button>
              //   <hr />
              // </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TopicHead
