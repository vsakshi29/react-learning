function DumbComponent(props){
    return(
        <>
        <h1>I am a Dumb Component. I don't have need of any state. I only get the data through the props ( props means properties).</h1>
        <h3>Props value is {props.userName}</h3>
        </>
    )
}



export default DumbComponent



// Task 1: 
//  Dumb ComCompnent banana hai jiska naam khud sochna hai jaisa uska kaam hoga 
//  Smart Component Banana hai jo ki mere wale se bilkul different hoga : Hint deta hu state mai String lena aur apne aur mere naam ko switch krana button ke tap par 