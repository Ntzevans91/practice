function KeyPressEvent(){
    const handleKeyDown = (event) =>{
        console.log("Key Down:", event.key)
    }
    const handleKeyUp = (event) =>{
        console.log("Key Up:", event.key)
    }
    return(
        <>
        <input
        type="text"
        onKeyDown={handleKeyDown} //logs the key as soon as its pressed
                                //can fire multiple time is the key is held
        onKeyUp={handleKeyUp}//logs the key when it is released
                                //suitable for actions that should occur after the key press ends
        placeholder="Press any key"
        />
        </>
    )
       
}
export default KeyPressEvent;
 