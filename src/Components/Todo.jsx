import React, { useState } from "react"

function formatTime(ts) {
  if (!ts) return null
  return new Date(ts).toLocaleString("th-TH", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

function Todo({ todo, onDelete, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(todo.list)
  const [editDesc, setEditDesc] = useState(todo.description || "")

  const handleSave = () => {
    if (!editTitle.trim()) return
    onUpdate(todo.id, { list: editTitle.trim(), description: editDesc.trim() })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditTitle(todo.list)
    setEditDesc(todo.description || "")
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSave()
    }
    if (e.key === "Escape") handleCancel()
  }

  return (
    <div className="todo-item">
      <input className="todo-checkbox" type="checkbox" checked={todo.complete} onChange={() => onToggle(todo.id)} />

      <div className="todo-body">
        {isEditing ? (
          <>
            <input
              className="todo-edit-input"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <textarea
              className="todo-edit-textarea"
              placeholder="รายละเอียด (optional)..."
              value={editDesc}
              onChange={(e) => setEditDesc(e.target.value)}
              rows={2}
            />
            <div className="todo-edit-actions">
              <button className="todo-save-btn" onClick={handleSave}>
                บันทึก
              </button>
              <button className="todo-cancel-btn" onClick={handleCancel}>
                ยกเลิก
              </button>
            </div>
          </>
        ) : (
          <>
            <span className={`todo-text${todo.complete ? " completed" : ""}`}>{todo.list}</span>
            {todo.description && <span className="todo-description">{todo.description}</span>}
            <div className="todo-timestamps">
              {todo.createdAt && <span>สร้าง: {formatTime(todo.createdAt)}</span>}
              {todo.completedAt && <span>สำเร็จ: {formatTime(todo.completedAt)}</span>}
              {todo.updatedAt && todo.updatedAt !== todo.createdAt && <span>แก้ไข: {formatTime(todo.updatedAt)}</span>}
            </div>
          </>
        )}
      </div>

      <div className="todo-actions">
        {!isEditing && (
          <button className="todo-edit-btn" type="button" onClick={() => setIsEditing(true)}>
            ✎
          </button>
        )}
        <button className="todo-delete-btn" type="button" onClick={() => onDelete(todo.id)}>
          ✕
        </button>
      </div>
    </div>
  )
}

export default Todo
