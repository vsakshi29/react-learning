import { useState } from "react"
import "./shape.css"
import Circle from "../Shapes/Circle"
import Square from "../Shapes/Square"
import Rectangle from "../Shapes/Rectangle"

function ConditionalRendering() {

  const Shape = {
    CIRCLE: "circle",
    RECTANGLE: "rectangle",
    SQUARE: "square"
  }

  const [shape, setShape] = useState(Shape.CIRCLE)

  return (
    <>
      <h2>Current Shape is {shape}</h2>

      {/* Conditional Rendering */}
      {shape === Shape.CIRCLE && <Circle />}
      {shape === Shape.SQUARE && <Square />}
      {shape === Shape.RECTANGLE && <Rectangle />}

      <button onClick={() => setShape(Shape.CIRCLE)}>Circle</button>
      <button onClick={() => setShape(Shape.SQUARE)}>Square</button>
      <button onClick={() => setShape(Shape.RECTANGLE)}>Rectangle</button>
    </>
  )
}

export default ConditionalRendering




