/* eslint-disable no-unreachable */
import React from "react"
import TaskStyle from "./Task.module.css"

const Task = (props) => {
  const { onList, index, toggleList, deleteBtn } = props

  return (
    <div className={TaskStyle.maintask}>
      <p
        onClick={() => toggleList(index)}
        className={onList.del ? `${TaskStyle.taskstyleList}` : `${TaskStyle.taskstyle}`}
      >
        {onList.list}
      </p>
      <button onClick={() => deleteBtn(index)}>Delete</button>
    </div>
  )
}

export default Task
