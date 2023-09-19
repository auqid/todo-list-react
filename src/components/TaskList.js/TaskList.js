import React from 'react'
import RenderTasks from '../RenderTasks/RenderTasks'

const TaskList = (props) => {
  console.log('from tasklist',props.items)
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
