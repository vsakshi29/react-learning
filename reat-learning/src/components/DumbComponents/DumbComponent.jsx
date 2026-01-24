function DumbComponent(props){
    return(
        <>
        <h1>I am a Dumb Component. I don't have need of any state. I only get the data through the props ( props means properties).</h1>
        <h3>Props value is {props.userName}</h3>
        </>
    )
}



export default DumbComponent