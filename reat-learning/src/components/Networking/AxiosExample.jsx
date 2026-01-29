/*

Same Example only change with the Axios at the place of Fetch.
= fetch ne maanga url (url hai dusri machine ka path jo internet par available hai ) aur usne phir uss path se re laakar de diya 
- response : 
    - status code 
    - error
    - data


    fetch(url)
    .then(response => response.json())
    .then(data => //)
    .catch(error => //)

    npm install axios

    import axios from "axios";

    axios.get(url)
    .then(response => seImages(response.data))
    .catch(error => // )


*/

import axios from "axios";
import { useState, useEffect } from "react";

function AxiosExample(){
    const [images, setImages] = useState([])

    const url =  "https://api.unsplash.com/search/photos?query=makeup&client_id=AZCKortI4P-o-KBp7HxoiT6en2l60HSfnAi_iArjQCo"

    useEffect(() =>
        {
        axios.get(url)
        .then(response => setImages(response.data.results))
        .catch(error => console.log(error))
    }
    , []
    )

    return (
        <>
            {images.map( (image , index) =>
            <img key={index} src={image.urls.small} width ="400" height="400"/>

            )}
        </>
    )
}


export default AxiosExample

