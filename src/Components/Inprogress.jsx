import React,{useState} from 'react'
import Task from './Task'

function Inprogress({taskArray,findChild}) {
  const currContainer = document.getElementById("inprogress");

  return (
    <div className='statusBar' id="inprogress" 

    onDrop={()=>{
            console.log("inp")
            const currentTask = document.querySelector(".change");
            var value = findChild(currContainer.childNodes,currentTask)
            if(value!=true)
            {
              currContainer.appendChild(currentTask);
            }
            currContainer.classList.remove("statusBarHover")
          }}
    onDragOver={(e)=>{e.preventDefault();currContainer.classList.add("statusBarHover");console.log("inp hover")}}
    onDragLeave={(e)=>{e.preventDefault();currContainer.classList.remove("statusBarHover")}}
    >

      {
         taskArray.filter(task=>task.status==="inProgress")
         .map(task=>
           <Task task={task} key={task.task} />
          )
      }
    </div>
  )
}

export default Inprogress