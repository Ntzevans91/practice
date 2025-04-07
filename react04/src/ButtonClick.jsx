import React from "react";
 
function ButtonClick(){
    //create function to handle click
    const handleClick = (event) => {
        console.log("button was clicked", event)//change this to your own
    }
    return(
        //the onClick prop attaches the function to
        //the button
 
        //when the button is clicked, handleClick function runs
        //and logs a message to the console and the event details
        <button onClick={handleClick}>Click Here</button>
    )
}
export default ButtonClick