import './App.css';
import Input from './components/input/Input';
import TaskList from './components/TaskList.js/TaskList';
import { useState } from 'react';
const DUMMY=[]
function App() {
  
const[tasks,setTasks]=useState(DUMMY)



const taskCreator=(enteredTasks)=>{
  setTasks((prevState)=>{
    return [enteredTasks,...prevState]
    
  })
  console.log('from app.js',tasks)
  
}
  
  
  
  return (
    <div className="App">
      CAN DO!!
      <Input submission={taskCreator}></Input>
      <TaskList items={tasks} ></TaskList> 
    </div>
  );
}

export default App;
