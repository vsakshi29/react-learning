import { useState } from "react"
import "./photo.css"

function StateImageRendering() {
      const image1 = {
          IMAGENAME : "nature",
          IMAGEURLs : "/assets/nature.jpg",
          IMAGEURL2: "/assets/sunset.jpg",
          IMAGEURL3 : "/assets/mountains.jpg"
      }

      const image2 = {
           IMAGENAME : "animal",
           IMAGEURL :  "/assets/animal.jpg",
           IMAGEURL2 : "/assets/snow.jpg",
           IMAGEURL3 : "/assets/birds.jpg"

      }

      const [image, setImage] = useState(image1)
    
    return(
        <>
        <h1 className="buttonAlign">Hiiiii 😉</h1>
        <ImageCard image = {image}/>
        <div className = "buttonAlign">
         <button  onClick = { () => setImage(image1)}>Nature</button>
         <button  onClick = { () => setImage(image2)}>Animal</button>
         </div>
        
        </>
    ) 
}

export default StateImageRendering


function ImageCard(props) {
  return (
    <>
    <div className="ImageCard">
      <img src= {props.image.IMAGEURL} width="700" height="500"></img>
      <img src= {props.image.IMAGEURL2} width="700" height="500"></img>
      <img src= {props.image.IMAGEURL3} width="700" height="500"></img>
       
    </div>
    <h1 className="buttonAlign">{props.image.IMAGENAME}</h1>
    </>
  )
}