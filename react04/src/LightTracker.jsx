import {useState, useEffect} from 'react'

function LightTracker(){
    const[lights, setLights]= useState(0)

    useEffect(()=> {document.title= `Lights On: ${lights}`}, [lights])

    return(
        <>
        <h1>Lights on: {lights}</h1>
        <button onClick={() => setLights(lights+1)}>Add Light</button>
        <button onClick={() => setLights(lights-1)}>Del Light</button>
        </>
    )

}
export default LightTracker