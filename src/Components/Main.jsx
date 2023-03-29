import React, { useEffect, useState } from 'react';
import Header from './Header';
import DevCompleted from './DevCompleted';
import Inprogress from './Inprogress';
import Closed from './Closed';
import StatusHeader from './StatusHeader';

function Main() {
  const [taskArray, setTaskArray] = useState([]);
  const [devCount,setDevCount] = useState(0); 
  const [progressCount,setProgressCount] = useState(0);
  const [closedCount,setClosedCount] = useState(0);


  function findChild(arr, child) {
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[0].id === child.id)

        return true;
    }
    return false;
  }

  
  function handleSubmit(event) {

    event.preventDefault();
    var task = event.target.task.value;
    var status = event.target.status.value;

    var count = 0;
    var id = "";
    if(status==="inProgress")
    {
      count+=progressCount;
      id="inp"+count;
      setProgressCount(progressCount+1);
    }
    else if(status==="devCompleted"){
      count+=devCount;
      id="dev"+count;
      setDevCount(devCount+1);
    }
    else{
      count+=closedCount;
      id="cl"+count;
      setClosedCount(closedCount+1)
    }
  
    var obj = {
      "task": task,
      "status": status,
      "id":id,
    }

    taskArray.push(obj);
    setTaskArray([...taskArray]);
    event.target.task.value = "";
    event.target.status.value = "inProgress";

  }
  return (
    <>
      <Header handleSubmit={handleSubmit} />
      <div className='mainContainer'>
        <StatusHeader />
        <div className='statusContainer'>
          <Inprogress taskArray={taskArray} findChild={findChild} />
          <DevCompleted taskArray={taskArray} findChild={findChild} />
          <Closed taskArray={taskArray} findChild={findChild} />
        </div>
      </div>
    </>
  )
}

export default Main