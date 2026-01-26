import { useState } from "react"
import "../photo.css"

function Loop() {
      const image1 = {
          IMAGECATEGORY : "nature",
          IMAGEURLs : ["/assets/nature.jpg", "/assets/sunset.jpg", "/assets/mountains.jpg","/assets/animal.jpg", "/assets/snow.jpg","/assets/birds.jpg", "/assets/animal.jpg", "/assets/snow.jpg","/assets/birds.jpg", "/assets/animal.jpg", "/assets/snow.jpg","/assets/birds.jpg"]
      }

      const image2 = {
           IMAGECATEGORY : "animal",
           IMAGEURLs :  ["/assets/animal.jpg", "/assets/snow.jpg","/assets/birds.jpg"]
      }

      const [image, setImage] = useState(image1)
    
    return(
        <>
        <h1 className="buttonAlign">Hiiiii 😉</h1>
        <LoopCard image = {image}/>
        <div className = "buttonAlign">
         <button  onClick = { () => setImage(image1)}>Nature</button>
        
         <button  onClick = { () => setImage(image2)}>Animal</button>
         </div>
        
        </>
    ) 
}

export default Loop


function LoopCard(props) {
  return (
    <>
    <div className="ImageCard">
      { props.image.IMAGEURLs.map( (url, index ) => 
        <img key={index} src={url} width= "300" height="300" />
      )}
    </div>
    <h1 className="buttonAlign">{props.image.IMAGECATEGORY}</h1>
    </>
  )
}