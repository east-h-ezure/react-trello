import React, { useState } from 'react'

const TaskCardTitle = () => {
  const [ isClick, setIsClick] = useState(false);
  const [ title, setTitle ] = useState("today");
  const handleClick = () => {
    setIsClick(true);
    console.log(isClick);
  }
  const handleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  }
  const handleBlur = () => {
    setIsClick(false);
  }
  return (
    <div className='taskCardTitleArea' onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input className='taskCardTitleInput' type='text' autoFocus
          maxLength={12} onChange={handleChange} onBlur={handleBlur} value={title} />
        </form>
      ) : (
        <h3>{title}</h3>
      )}
    </div>
  )
}

export default TaskCardTitle