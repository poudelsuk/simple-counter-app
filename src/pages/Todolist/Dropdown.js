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
            <div style={{display:"flex",flexDirection:"column"}}>
        {colors.map((color)=>{
                        return (
                            <label>
                         
                            <input
                            type="radio"
                            value={color}
                            checked={backgroundC===color}
                            onChange={handleselectcolor}
                            />
                               {color}
                        </label>
                            
                            
                        )
                    })}
                    </div>

            
            
           

        </div>
        <p>Choose your monster's colors:</p>

<div>
  <input type="color"  value={backgroundC} onChange={handleselectcolor} />
  <label for="head">Head</label>
</div>




    </div>
   
  );
  }