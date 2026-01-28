/*
- Requirement : We have to build a component that fetch the images from unsplash server and present them on the UI.
- Plan : 
- Functional Component 
    - State for the result that will be in the form Array 
    - API Request (fetch API , url )
    - useEffect (API Call krne ke liye hame useEffect ki jarurat padegi)
    - UI Images will be present in the form horizontally. 
    - We have to implement a Search Bar on the UI using that we search any type or any genre images. 

    useEffect firstly call at the time of mounting(meaning at the time first time page is presenting) and also run at the time of when the dependency state change.


    fetch is used for API Request (Meaning : using fetch we can get data from the server or send data to the server.)
*/

import { useEffect, useState } from "react";

function APICallUsingFetch(){
    
    const [result, setResults] = useState([])
    const [searchText, setSearchText] = useState("nature")
    const url = `https://api.unsplash.com/search/photos?query=${searchText}&client_id=AZCKortI4P-o-KBp7HxoiT6en2l60HSfnAi_iArjQCo`

  useEffect(() =>
        {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setResults(data.results)
        })
        .catch(error => console.log(error))



    }
    , [searchText]
    ) 



    return (
        <>

        <input 
        type="text"
        placeholder="Search Any Type of Imgae.."
        onChange={(e) => setSearchText(e.target.value == "" ? "nature" : e.target.value)}
        style={{marginBottom: "16px", padding : "8px", width: "200px"}}
        />

        {result.map( (object, index) => 
        <img key={index} 
        src={object.urls.small}
         width="150" height="150" 
         />
        )}
        </>
    )

}


export default APICallUsingFetch