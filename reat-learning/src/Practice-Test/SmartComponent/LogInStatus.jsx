/*
Conditional Rendering
    Task:
        Create a LoginStatus component.
    Requirements:
        Use a boolean state isLoggedIn
        If isLoggedIn is true, show:
            “Welcome back!”
        If false, show:
         “Please log in”
        Add a button to toggle login status
 */

import {useState} from 'react'

function LogInStatus () {

    const LogInPage = {
       LOGIN : "",
       LOGOFF : ""

    }
     const [status, setStatus] = useState(true)
    return (

        <>


        <LogInCard status = {LogInPage}/>
         <h1>{status == true?  "Welcome Back": "Please LogIn" }</h1>
         <button onClick={() => setStatus(status == true ? false : true )}></button>
        
        </>
    )
}

export default LogInStatus

function LogInCard (props) {
 return( 
   <>
    <h1>{props.status.LOGIN}</h1>
    <h1>{props.status.LOGOFF}</h1>
    

    
    </>
 ) 
}
