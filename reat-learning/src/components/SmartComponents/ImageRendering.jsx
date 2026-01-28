import { useState } from "react"

function ImageRendering() {

    const photos ={
        animal: "/assets/animal.jpg",
        birds:  "/assets/birds.jpg",
        nature: "/assets/nature.jpg"
    }

    const [photo, setPhoto] = useState(photos.animal)

         return (
    <>
      <h1> Display image with name: {photo == photos.animal ? "Animal" : photo == photos.birds ? "  bird" : "  nature"}</h1>

      <img src={photo} alt="selected" width="900 height= 600" />

      <br />
      <br/>
      <b/>

      <button onClick={() => setPhoto(photos.animal)}>Animal</button>
      <button onClick={() => setPhoto(photos.birds)}>Birds</button>
      <button onClick={() => setPhoto(photos.nature)}>Nature</button>
    </>
  )
}

        
    


export default ImageRendering