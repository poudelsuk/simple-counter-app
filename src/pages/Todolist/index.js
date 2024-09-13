import { useState } from "react";
import { BackgroundChanger } from "../backgrounndchanger";
import { Dropdown } from "./Dropdown";

export function TodoList(){
    const [tasks,setTasks]=useState(["do homework","eat rice"]);
    const [inputTask,setinputTask]=useState();
    const handleInputNewTask=(e)=>{
       const value=e.target.value; 
       setinputTask(value);

    }
    const handleAddNewTask=()=>{
      setTasks([...tasks,inputTask]);
    };
    return(
        <div>
            <h1>Task Manager</h1>
            <label>
                Enter task
                <input onInput={handleInputNewTask}/>
            </label>
            <button onClick={handleAddNewTask}>add task</button>
            <ul>
      {tasks.map((task)=>{
        return( <li>{task}</li>);
       
      //return <HistoryItem count={c}/>
     
      
       } )}
      </ul>
      <BackgroundChanger/>
      <Dropdown/>
        </div>
        
        
    );
}