import React from 'react'
import TaskCardDeleteButton from './button/TaskCardDeleteButton';
import TaskCardTitle from './TaskCardTitle';
import TaskAddInput from './input/TaskAddInput';
import { useState } from 'react';
import Tasks from './Tasks';

const TaskCard= () => {
  //const [ isClick, setIsClick ] = useState(false);
  const [input, setInput] = useState('');
  const [ taskList, setTaskList ] = useState([]);
  return (
    <div className='taskCard'>
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput
        input={input}
        setInput={setInput}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks input={input} taskList={taskList} />
    </div>
  )
}

export default TaskCard;
