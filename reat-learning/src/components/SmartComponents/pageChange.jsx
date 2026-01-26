import { useState } from "react"
import "./image.css"

function PageChange() {

  const hotel1 = {
    hotelName: "Park Avenue",
    hotelTheme: "Welcome ",
    hotelRating: "4",
    hotelImage: "/assets/mountains.jpg"
  }

  const hotel2 = {
    hotelName: "Taj Hotel",
    hotelTheme: "Welcome",
    hotelRating: "5",
    hotelImage: "/assets/sunset.jpg"
  }

  const [hotel, setHotel] = useState(hotel1)

  return (
    <>
      <Card hotel={hotel} />

      <br/>
      <br/>
      <br/>
      <br/>
       
       
      <button onClick={() => setHotel(hotel1)}>Hotel 1</button>
      <button onClick={() => setHotel(hotel2)}>Hotel 2</button>
    </>
  )
}

export default PageChange

function Card(props) {
  return (
    <div className="card">
      <img src= {props.hotel.hotelImage} width="400" height="400"></img>
       <h2>{props.hotel.hotelName}</h2>
      <h3>{props.hotel.hotelTheme}</h3>
      <h2> {props.hotel.hotelRating} ⭐️</h2>
    </div>
  )
}


