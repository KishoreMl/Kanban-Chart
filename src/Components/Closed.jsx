import React,{useState} from 'react'
import Task from './Task'

function Closed({taskArray,findChild}) {
  const currContainer = document.getElementById("Closed");
  return (
    <div className='statusBar' id="Closed"

    onDrop={()=>{
            console.log("closed");
            const currentTask = document.querySelector(".change");
            var value = findChild(currContainer.childNodes,currentTask)
            if(value!=true)
            {
              currContainer.appendChild(currentTask);
            }
            currContainer.classList.remove("statusBarHover")
           }}
    onDragOver={(e)=>{e.preventDefault();currContainer.classList.add("statusBarHover");console.log("clo hover")}}
    onDragLeave={(e)=>{e.preventDefault();currContainer.classList.remove("statusBarHover")}} 
     >

      {
         taskArray.filter(task=>task.status==="closed")
         .map(task=>
           <Task task={task} key={task.task}/>
          )
      }
    </div>
  )
  
}

export default Closed