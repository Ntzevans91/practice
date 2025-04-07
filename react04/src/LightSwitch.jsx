import {useState} from 'react'/*import hook you want to use */

function LightSwitch(){
    const [isLightOn, setLightOn]= useState(false)/*call hook*/

    return(
        <>
        <h1>The Light is {isLightOn ? 'Closed' : 'Open'}</h1>
        <button onClick={()=> setLightOn(!isLightOn)}>
            Toggle Light
        </button>
        </>
    )
}
export default LightSwitch