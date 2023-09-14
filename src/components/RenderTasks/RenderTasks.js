import React from 'react'

const RenderTasks = (props) => {
  console.log('from render tasks',props)
    return (


    <card classname='card'>
    <h3>{props.title}</h3>
    <h3>{props.date}</h3>
    <h3>{props.time}</h3>
</card>
        
      
  )
}

export default RenderTasks
