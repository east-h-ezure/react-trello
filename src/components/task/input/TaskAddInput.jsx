import React, { useState } from 'react'

const TaskAddInput = ({input, setInput, taskList, setTaskList}) => {
  
  const handleClick = () => {
    setInput(true);
  }
  const handleChange = (e) => {
    setInput(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([...taskList,{
      text: input
    }])
    setInput('');
  }
  return (
    <div onClick={handleClick}>
      <form onSubmit={handleSubmit}>
        <input
          className='taskAddInput'
          type='text'
          placeholder='add a task'
          onChange={handleChange}
          value={input}
        />
      </form>
    </div>
  )
}

export default TaskAddInput;