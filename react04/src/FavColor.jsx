import React, {useState} from 'react'

const styles = {

    btn1:{backgroundColor: "blue", margin:"5px"},
    btn2:{backgroundColor: "red", margin:"5px"},
    btn3:{backgroundColor: "green", margin:"5px"},
  
};
   


function FavColor(){
    const [color, setColor]= useState("");

    return(
        <>
        <h1>My favorite color is <span style={{color}}>{color}</span>.</h1>
        <button id="btn1" type="button" onClick={()=>setColor("blue")} style={styles.btn1}>blue</button>
        <button id="btn2" type="button" onClick={()=>setColor("red")} style={styles.btn2}>red</button>
        <button id="btn3" type="button" onClick={()=>setColor("green")} style={styles.btn3}>green</button>
        </>
    );

}
export default FavColor;