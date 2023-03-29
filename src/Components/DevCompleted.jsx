import React,{useState} from 'react'
import Task from './Task'

function DevCompleted({taskArray,findChild}) {

  const currContainer = document.getElementById("devcompleted");

  return (
    <div className='statusBar' id="devcompleted"
      onDrop={()=>{
                console.log("dev")
                const currentTask = document.querySelector(".change");
               
                var value = findChild(currContainer.childNodes,currentTask)
                if(value!=true)
                {
                      currContainer.appendChild(currentTask);
                }
                currContainer.classList.remove("statusBarHover")
            }}
      onDragOver={(e)=>{e.preventDefault();currContainer.classList.add("statusBarHover");console.log("dev hover")}}
      onDragLeave={(e)=>{e.preventDefault();currContainer.classList.remove("statusBarHover")}}
      >

      {
         taskArray.filter(task=>task.status==="devCompleted")
          .map(task=>
           <Task task={task} key={task.task}/>
          )
      }
    </div>
  )
}

export default DevCompleted