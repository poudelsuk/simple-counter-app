import Head from "next/head";
import { useState } from "react";
import MyButton from "./my-button";
import History from "./history";
import { TodoList } from "./Todolist";
const max_counter=10;
const min_counter=-10;


export default function Home() {
  const [count,setCount]=useState(0);
  const[tempCount,setTempCount]=useState(null);
  const[history,sethistory]=useState([]);
  const increaseCounter=()=>{
    if(count>=max_counter){
      alert("maximum limit");
      return;
    }
    sethistory([...history,count]);
    setCount(count+1);
    console.log(history);
  }
  const decreaseCounter=()=>{
    if(count<=min_counter){
      alert("minimum limit");
      return;
    }
    history.push(count);
    setCount(count-1);
    console.log(history)
  }
  const handleInput=(e)=>{
    const value=e.target.value;
    setTempCount(Number(value));
  }
  const handlereset=()=>{
    history.push(count);
    setCount(tempCount);
    console.log(history);
  }
  const handleundo=()=>{
    if (history.length==0) 
      return;
    const lastelementindex=history.length-1;
    const lastElement=history.slice(lastelementindex)
    setCount(lastElement[0]);
    const newhistory=history.slice(0,lastElement);
    sethistory(newhistory); 
    console.log(newhistory);
  }
  


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
     <h1 className="heading">Hello {count}</h1>
     <button onClick={increaseCounter}>inc count</button>
     <button onClick={decreaseCounter}>dec count</button>
     <MyButton text="increase" onClick={increaseCounter}/>
     <input
     onInput={handleInput}
     />
     <MyButton
     text="reset to custom value"
     onClick={handlereset}
     />
     <MyButton
     text="undo"
     onClick={handleundo}
     />

     <History
     history={history}
/>
   <TodoList
   />

      </main>
    </>
  );
}
