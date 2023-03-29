import React from 'react'

function StatusHeader() {
  return (
    <div className='statusHeader'>
        <div id="progress" className='status'>In progress</div>
        <div id="completed" className='status'>Dev Completed</div>
        <div id="closed" className='status'>Closed</div>
    </div>
  )
}

export default StatusHeader