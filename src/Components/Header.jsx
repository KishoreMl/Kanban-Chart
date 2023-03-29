import React from 'react'

function Header({handleSubmit}) {
  return (
    <div className='taskBar'>
       <h1>Kanban Chart</h1>
        <form onSubmit={(e)=>{handleSubmit(e)}} >
            <input type='text' name="task"></input>
            <select name="status" id="status">
              <option value="inProgress">In Progress</option>
              <option value="devCompleted">Dev Completed</option>  
              <option value="closed">Closed</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    </div>
  )
}

export default Header;