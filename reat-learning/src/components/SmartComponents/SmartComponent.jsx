import { useState } from "react"

function SmartComponent() {

    const [count, setCount] = useState(0)

    return(
        <di>
            <p>I am a Smart Components. I have my own brain. I used state for updating the UI.</p>

            <p>Smart Component Working Well.Count is {count} </p>

            <button onClick={() => setCount(count + 1) }>+</button>
            <button onClick= {() => setCount(count - 1 )}>-</button>

        </di>
    )
}


export default SmartComponent