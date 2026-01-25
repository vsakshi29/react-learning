import { useState } from "react";

function SmartUser () {

    const [name, setName] = useState("Sakshi")

    return(
        <>
        <h1>hello guys,I am {name} </h1>
        <button onClick={ () => setName(name  == "Sakshi" ? "Neeshu" : "Sakshi")}>hhihiojojol</button>
        </>

        
    )
}
export default SmartUser