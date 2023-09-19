import React, { useEffect } from 'react'
import './RenderTasks.css'
import { useState} from 'react'

const RenderTasks = (props) => {
  const [check,setCheck]=useState(true)
  
  const checkBoxHandler=()=>{
   setCheck(x => !x)};
   
  
  console.log('from render tasks',props)
    if (props.title.length===0){
      return<div className='task__invalid'>Add Something!</div>
    }
  let status = check ?'task':'task__completed'
    return (


    <div className={status}>
     <div className='task__date'> <div>Date: {props.date} </div><div>Time: {props.time}</div></div>
    <div className='task__title'>{props.title}                                                                                       
    </div>
    <div className='task__done'>{!check?'Goodjob!':'You can do it!'}</div>
    
    
  <div className="checkbox-wrapper-1">
  <input onClick={checkBoxHandler} id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
  <label htmlFor="example-1">Completed?</label>
  <input onClick={checkBoxHandler} id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
</div>

    
</div>
        
      
  )
}

export default RenderTasks
