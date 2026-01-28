import { useState, useEffect } from "react"

function CreateCounterForTrackCount () {
   
   const [count, setCount] = useState(0)

   useEffect (() => {
           console.log("Count Changes")
           
  } ,[count])
    return (

  <> 
  <h1>Change Count: {count}</h1>
    
    <button onClick={() => setCount(count + 1)}></button>


  </>
  )
}
export default CreateCounterForTrackCount

 




