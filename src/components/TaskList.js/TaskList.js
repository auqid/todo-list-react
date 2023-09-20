import React from 'react'
import RenderTasks from '../RenderTasks/RenderTasks'

const TaskList = (props) => {
  console.log('from tasklist',props.items)
  
  if (props.items.length===0){
    return<div className='task__invalid'>Hi I'm Mr. Meeseeks LOOK AT ME! </div>
  }
  
  
  return (
    <div>
      
      {
      props.items.map((task) => (
        <RenderTasks
          key={task.id}
          title={task.title}
          date={task.date}
          time={task.time}
        />
      ))}
    </div>
  )
}

export default TaskList
