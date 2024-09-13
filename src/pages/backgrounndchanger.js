import { useState } from "react";

const colors=["white","blue","red","green","yellow"]
export const BackgroundChanger =()=> {
    const[backgroundColor,setBackgroundColor]=useState("white");

    const handleClick=()=>{
        const randomIndex=Math.floor(Math.random()*colors.length);
        setBackgroundColor(colors[randomIndex]);
    };

    return(
        <div style={{
            backgroundColor:backgroundColor
        }}>
            <h1>Background Changer</h1>
            <button onClick={handleClick}>change color</button>
        </div>
    );
}