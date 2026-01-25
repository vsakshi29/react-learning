import { useState } from "react"

function NameComponent () {

    const [age, setAge] = useState(0)
    const [name, setName] = useState("Sakshi")
    return(
       
        <div>
            <h> Hello, my name is {name} and my age {age}</h>
            <button onClick={ () => setName(name == "Sakshi" ? "Neeshu" : "Sakshi")}>My name is </button>
            <button onClick={ () => setAge( age + 1)}>+</button>
        </div>
    )
}

export default NameComponent

