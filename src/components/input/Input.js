import React from 'react'
import { useState } from 'react'

const Input = (props) => {
    const [key,setKey]=useState(0)
    const[title,setTitle]=useState('')
    const[date,setDate]=useState('')
    
    const texthandler=(event)=>{
        setTitle(event.target.value)
        setDate(new Date())
    }
    const keyhandler = ()=>{
        setKey((prevState)=>{
        return prevState+1
    })
        console.log(key)
        
    }

     const submitHandler=(event)=>{
         event.preventDefault()
     const tasks ={
        id:key,
        title:title,
        date: date.toLocaleString(),
        
            
        }
        console.log('from input',tasks)
        
        props.submission(tasks)
        setTitle('')
        setDate('')

        

    }

    


    return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor='inputfield'>Task</label>
        <input type='text' id='inputfield' onChange={texthandler} value={title} ></input>
        <button type='submit' onClick={keyhandler}>Add task</button>

      </form>
    </div>
  )
}

export default Input
