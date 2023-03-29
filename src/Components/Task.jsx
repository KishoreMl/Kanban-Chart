import React from 'react'

function Task({task}) {
 
  return (
    <div className='taskBox'
      draggable="true"
      id={task.id}
      onDragStart={(e)=>{e.target.classList.add("change");}}
      onDragEnd={(e)=>{e.target.classList.remove("change");}}
       >
      <p>{task.task}</p>
    </div>
  )
}

export default Task