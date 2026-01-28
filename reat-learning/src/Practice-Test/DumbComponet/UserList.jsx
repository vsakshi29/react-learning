/*Create a Dumb Component called UserList


It should receive users via props
It should only render the UI (no state, no logic)
UserList is an Arrays used it [“Neeshu Kumar”, “Sakshi Verma”, “Rahul Kumar”, “Yash Verma” , “Isha Verma”] pass this list as props and present it on UI.*/


function UserList (props) {
  
    return (
<>
    {props.name.map((val , index ) =>
     <h1>{index + 1} {val}
   </h1>
 )}
</>
    )
}

export default UserList