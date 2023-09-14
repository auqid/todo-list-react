import React from 'react'

const RenderTasks = (props) => {
  console.log('from render tasls',props)
    return (
    <>
    <h2>{props.title}</h2>
    <h2>{props.date}</h2>
    
        </>
  )
}

export default RenderTasks
