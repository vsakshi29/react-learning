import { useState } from "react"

function NameRendering() {

  const images = {
    Mountains: "/assets/mountains.jpg",
    Snow: "/assets/snow.jpg",
    Sunset: "/assets/sunset.jpg"
  }

  const [image, setImage] = useState(images.Sunset)

  return (
    <>
      <h2>Image with name: {image == images.Mountains ? "   Mountains" : image == images.Snow ? "  Snow" : "  Sunset"}</h2>

      <img src={image} alt="selected" width="700 height= 700" />

      <br />
      <br />
      <br />

      <button onClick={() => setImage(images.Mountains)}>Mountains</button>
      <button onClick={() => setImage(images.Snow)}>Snow</button>
      <button onClick={() => setImage(images.Sunset)}>Sunset</button>
    </>
  )
}

export default NameRendering

//  Ternary Operator : true ? condition true hai ye wala section : false hai toh ye wala section
