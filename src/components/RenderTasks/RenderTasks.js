import React from 'react'
import './RenderTasks.css'

const RenderTasks = (props) => {
  console.log('from render tasks',props)
    return (


    <div className='task'>
    <div className='task__title'>{props.title}</div>
     <div className='task__date'> <div>Date: {props.date} </div><div>Time:{props.time}</div></div>
</div>
        
      
  )
}

export default RenderTasks
