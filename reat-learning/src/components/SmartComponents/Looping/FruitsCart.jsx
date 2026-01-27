import { useState } from "react"
import "./index.css"

function FruitsCart() {

const fruits = {
    FRUITURLs : ["/assets/apple.avif" , "/assets/avocado.jpg" , "/assets/grapes.jpg" , "/assets/mango.jpg" , "/assets/oranges.jpg" , "/assets/pomegranate.jpg" , "/assets/strawberry.jpg" , "/assets/watermelon.jpg " , "assets/kiwi.jpg" , "assets/pineapple.jpg" ] ,
    FRUITNAME : ["apple" , "avocado" , "grapes" , "mango" ,"Orange", "pomegrante" , "strawberry" , "watermelon" , "kiwi" , "pineapple"]
}

const images = {
    FRUITURLs : ["/assets/nature.jpg"  , "/assets/animal.jpg" , "/assets/birds.jpg" , "/assets/sunset.jpg" , "/assets/snow.jpg" , "/assets/mountains.jpg" ,  "/assets/sunrise.jpg" , "/assets/tree.jpg" , "/assets/fog.jpg" ,"/assets/cloud.jpg" ] ,
    FRUITNAME : ["nature" , "animal" , "birds" , "sunset" , "snow" , "mountains" , "sunrise" , "tree" , "fog" , "cloud"]
}




const [fruit, setFruit] = useState (fruits)

const [name, setName] = useState ("fruits")

return(
        <>
         <h1>Hello Guys, Choose Anything From Cart: {name}</h1>
         <FRUITCARD fruit = {fruit} />
         <button onClick={ () => {setFruit (fruits) ; 
            setName("Fresh-Fruits"); 
         }}> 
         Fruits 
         
         </button>

         <button onClick={ () => {setFruit (images) ;
            setName("Beautiful Nature Picture");
        }}>
            Nature
            
        </button>

          
        </>
    )
}

export default FruitsCart

function FRUITCARD (props) {

    return(
        <>
        <div>
       
        {props.fruit.FRUITURLs.map( (val,index ) => 
         <div key={index}>
        <img  src={val} width= "250" height="200" />
        
         <h1>{props.fruit.FRUITNAME[index]}</h1>
       </div>
       )}
        </div>

        
        </>
    )
}