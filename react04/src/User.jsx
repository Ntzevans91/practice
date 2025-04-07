import {useParams} from 'react-router-dom'

function User(){
    const {id}= useParams() //extracts id from the URL
    return(
        <>
            <h2>User Profile: {id}</h2>
        </>
    )
}
export default User