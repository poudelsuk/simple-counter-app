import { useState } from "react";
const colors=["white","blue","red","green","yellow"]
export const Dropdown=() => {
    const [backgroundC,setBackgroundColor]=useState("white");
    const handleselectcolor=(e)=>{
        setBackgroundColor(e.target.value);
    }
  return(
  
   
    <div style={{
        backgroundColor:backgroundC,
    }}> <h1>Dropdown</h1>
        <label>Select a color</label>
        <select
                 value={backgroundC}
                onChange={handleselectcolor}
                >
                    {colors.map((color)=>{
                        return (
                            <option value={color}>{color}</option>
                        )
                    })}
            <option value="blue">blue</option>
            <option value="green">green</option>
        </select>
        <div>
            <label>
                blue
                <input
                type="radio"
                value="blue"
                checked={backgroundC==="blue"}
                onChange={handleselectcolor}
                />
            </label>
            <label>
                green
                <input
                type="radio"
                value="green"
                checked={backgroundC==="green"}
                onChange={handleselectcolor}
                />
            </label>
        </div>
    </div>
   
  );
  }