import React from 'react'

const Tasks = ({input, taskList}) => {
  return (
    <div>
      {taskList.map((task)=> (
        <div>{task.text}</div>
      ))}
    </div>
  )
}

export default Tasks