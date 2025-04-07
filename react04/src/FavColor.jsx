import React, {useState} from 'react'

function FavColor(){
    const [color, setColor]= useState("");

    return(
        <>
        <h1>My favorite color is <span style={{color}}>{color}</span>.</h1>
        <button type="button" onClick={()=>setColor("blue")}>blue</button>
        <button type="button" onClick={()=>setColor("red")}>red</button>
        <button type="button" onClick={()=>setColor("green")}>green</button>
        </>
    );

}
export default FavColor;