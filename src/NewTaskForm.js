
import React, { useState } from 'react'
import { useTasks } from './TaskProvider'

export default function NewTaskForm() {
  // 2
  const [task, setTask] = useState('')
  const { addTask } = useTasks()

  // 3
  const submit = e => {
    e.preventDefault()
    addTask(task)
    setTask('')
  }

  return (
    // 4
    <form onSubmit={submit}>
    
      <input type="text" value={task} placeholder="Add task" onChange={e => setTask(e.target.value)} required />
      <button>Add</button>
    </form>
  )
}