import React from 'react'
import { useState } from 'react'
import './Input.css'

const Input = (props) => {
    const [key,setKey]=useState(0)
    const[title,setTitle]=useState('')
    const[date,setDate]=useState('')
    const[time,setTime]=useState('')
    
    const texthandler=(event)=>{
        setTitle(event.target.value)
        setDate(new Date().toLocaleDateString())
        setTime(new Date().toLocaleTimeString())
    }
    const keyhandler = ()=>{
        setKey((prevState)=>{
        return prevState+1
    })
        console.log(typeof date)
        
    }

     const submitHandler=(event)=>{
      event.preventDefault()
      const tasks ={
        id:key,
        title:title,
        date: date,
        time: time
        }
        console.log('from input',tasks)
        
        props.submission(tasks)
        setTitle('')
        setDate('')
        setTime('')
        

        

    }

    


    return (
    <div className='sup'>
      <form className='form' onSubmit={submitHandler}>
        <label htmlFor='inputfield'>Task</label>
        <input  type='text' id='inputfield' onChange={texthandler} value={title} placeholder='Do Homework ?' ></input>
        <button type='submit' onClick={keyhandler}>Add task</button>

      </form>
    </div>
  )
}

export default Input
