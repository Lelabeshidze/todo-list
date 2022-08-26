
import React from 'react'
import Task from './Task'
import { useTasks } from './TaskProvider'

export default function TaskList() {

  const { tasks } = useTasks()
  return (
    <table>
      <tbody>
        {
         
          tasks.map((task, i) => 
            <Task key={i} {...task} />
          )
        }
      </tbody>
    </table>
  )
}
