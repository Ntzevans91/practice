import debounce from 'lodash.debounce'  //install it first
import { useState } from 'react'
 
function Debounce(){
    const [value, setValue] = useState("")
 
    //create a debounce  function
    //this delays processing until 300ms have passed without
    //a new keystroke
    const debouncedChangeHandler = debounce((newValue) => {
        console.log("Debounced Value: ", newValue);
    }, 300);
        //event handler updates state and calls the debounced function
    const handleChange  = (event) => {
        const newValue  = event.target.value;
    setValue(newValue);
    debouncedChangeHandler(newValue);
    }
    return(
        <>
        <input
        type="text"
        value = {value}
        onChange={handleChange}
        placeholder="Type something..."
        />
 
        </>
    )
}
export default Debounce;
 
/* Purpose: Debouncing prevents a function from being called
too frequently by delaying its execution until a period of inactivity
 
Methods: You can use libraries like Lodash or create custom debounce hooks
 
Usage: Ideal for input fields, window resize events, or any scenario with
 rapid fire events
 */
 