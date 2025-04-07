import {useState}from 'react'
function KeyEvent(){
 
    const[lastKeyPressed, setLastKeyPressed ] = useState("");
 
    //Event Handler: handleKeyPress captures the key pressed using event.key
    //and updates the component state
    const handleKeyPress = (event) =>{
        setLastKeyPressed(event.key)
    }
    return(
        <>
            {/*Input Field: the input field listens for the onKeyPress event*/}
            <input
                type="text"
                onKeyPress={handleKeyPress}
                placeholder="Press any key..."
            />
            {/*Display: The component displays what key was pressed*/}
            {lastKeyPressed && <p>You pressed {lastKeyPressed}</p>}
        </>
    )
}
export default KeyEvent
/*
A key press event is triggered whenever a user
presses a key on the keyboard
 
In React you can listen to key events on elements like
1. inputs
2. text areas
3. or even the document body
 
onKeyDown: Fires when a key is pressed down
 
onKeyPress: Fires when a key is pressed
(useful for detecting character input)
(for more comprehensive keyboard handling onKeyDown and onKeyUp are preferred)
onKeyUp: Fires when a key is released
 
Event Object
When an event occurs, an event object is passed to your handler
and usually contain properties like
 
event.key : The value of the key pressed ("a" Enter )
event.code : physical key on the keyboard
 
Choosing the right event: If you need to detect non-printable keys
(arrow keys or function key consider onKeyDown/Up)
Accessibility: Keyboard event make web applications accesible.
Be sure to check that all interactive components are keyboard navigable
Debouncing: In cases where a key may trigger rapid events (such as holding down a key)
consider debouncing the handler to improve performance
This works when a user has to type words or more than just a rapid key press
Think of a search engine, you dont want to individually search each key the press
You can delay the firing of the function by debouncing
If the user types again before the delay finishes the timer resets
 
 
 
*/
 