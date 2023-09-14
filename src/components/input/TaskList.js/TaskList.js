import React from 'react'
import RenderTasks from '../../RenderTasks/RenderTasks'

const TaskList = (props) => {
console.log('from tasklist',props)
  return (
    <div>
      {props.items.map((tasks) => (
        <RenderTasks
          key={tasks.id}
          title={tasks.title}
          date={tasks.date}
          time={tasks.time}
        />
      ))}
    </div>
  )
}

export default TaskList
