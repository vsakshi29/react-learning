/* Props Passing
Task:
 Create a ProfileCard component.
Requirements:
Pass the following props:

name
age
isOnline
Display:
Name and age
Show “Online” or “Offline” based on isOnline . isOnline is an State that have Boolean value true and false if the isOnline have true then show “Online” otherwise show “Offline”.*/


import {useState} from 'react'

function PropsPassingComponent () {

    const aboutUser = { 
        NAME : "Sakshi",
        AGE: 24,
      }
    // const UserStatus = {
    //     ONLINE: "Online",
    //     OFFLINE: "Offline"
    // }


//    const [status, setStatus] = useState(UserStatus.ONLINE)
      const[status, setStatus] = useState(true)

    return (
        <>
       <ProfileCard about = {aboutUser}/> 


       {/* <h1> {status} </h1> */}

       <h1> {status == true ? "ONLINE" : "OFFLINE" } </h1>
       
       {/* <button onClick={() => setStatus(status == UserStatus.ONLINE ? UserStatus.OFFLINE : UserStatus.ONLINE)}>Status</button> */}
       <button onClick={() => setStatus( status == true ? false : true)} > Change Status </button>
        </>

    )
}
export default PropsPassingComponent

function ProfileCard (props) {
  return (

    <>
        <h1>UserName:{props.about.NAME}</h1>
        <h1>UserAge:{props.about.AGE}</h1>
    </>
    )
}