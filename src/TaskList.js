// 1
import React from 'react'
import Task from './Task'
import { useTasks } from './TaskProvider'

export default function TaskList() {
  // 2
  const { tasks } = useTasks()
  return (
    <table>
      <tbody>
        {
          // 3
          tasks.map((task, i) => 
            <Task key={i} {...task} />
          )
        }
      </tbody>
    </table>
  )
}