import React from 'react'
import RenderTasks from '../../RenderTasks/RenderTasks'

const TaskList = (props) => {
  return (
    <div>
      {props.items.map((tasks) => (
        <RenderTasks
          key={tasks.id}
          title={tasks.title}
          date={tasks.date}
        />
      ))}
    </div>
  )
}

export default TaskList
