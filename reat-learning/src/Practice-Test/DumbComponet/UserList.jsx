/*Create a Dumb Component called UserList


It should receive users via props
It should only render the UI (no state, no logic)
UserList is an Arrays used it [“Neeshu Kumar”, “Sakshi Verma”, “Rahul Kumar”, “Yash Verma” , “Isha Verma”] pass this list as props and present it on UI.*/


function UserList () {
  const name = ["Sakshi" , "Neesshu" , "Isha" , "Yaash" , "Rahul"]
    return (
<>
    {name.map((val ,index ) =>
     <h1>{index} {val}
   </h1>
 )}
</>
    )
}

export default UserList