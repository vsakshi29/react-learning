/*
Task 2 : 
Took two objects : one object have nature image , otherone have  animal image 
Make a state intially the state will be intialised by object one 
then create two buttons nature and Animals on click of Nature nature image will be presented otherwise animal images

UI Looks like 3 images will be their like if you have three image */

import { useState } from "react"
import "./photo.css"

function MultipleImageRendering () {
      const image1 = {
          IMAGENAME : "nature",
          IMAGEURL : "/assets/nature.jpg"
      }

      const image2 = {
           IMAGENAME : "animal",
           IMAGEURL :  "/assets/animal.jpg"

      }

      const [image, setImage] = useState(image1)
    
    return(
        <>
            <ImageCard image = {image}/>
        <br/>
        <br/>
        <br/>
         <button onClick = { () => setImage(image1)}>Nature</button>
         <button onClick = { () => setImage(image2)}>Animal</button>
        
        </>
    ) 
}

export default MultipleImageRendering


function ImageCard(props) {
  return (
    <div className="ImageCard">
      <img src= {props.image.IMAGEURL} width="700" height="500"></img>
       <h1>{props.image.IMAGENAME}</h1>
    </div>
  )
}