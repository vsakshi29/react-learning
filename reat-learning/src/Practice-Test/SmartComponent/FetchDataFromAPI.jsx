/*Fetch Data (API)
Task:
 Fetch and display data from an API.
Requirements:
Use fetch inside useEffect
API/URL: use the url that I gives you yesterday.
Display first 10 post titles
Show:
Show the images of that particular genre or category that you writing on search.*/

import { useEffect, useState } from "react"

function FetchDataFromAPI () {                                                                                                       

const [images, setImages] = useState([])
const [search, setSearch] = useState("dresses")

const url= `https://api.unsplash.com/search/photos?query=${search}&client_id=AZCKortI4P-o-KBp7HxoiT6en2l60HSfnAi_iArjQCo`


useEffect(() => {
    fetch(url) 
    .then(response => response.json())                                                                                                     
    .then(data => {
        setImages(data.results)
    })
    .catch(error => console.log(error)
 )
} ,[search] )

   return (
    <>
<input
    type="Text" 
    placeholder="Search Any Type Of Image" 
    onChange={(event) => setSearch(event.target.value == "" ? "dresses" : event.target.value ) }
/>

{images.map ((val, index) => 
    <img key = {index} src = {val.urls.small}
    />
)}
</>    
   )
}
 export default FetchDataFromAPI


   



    

