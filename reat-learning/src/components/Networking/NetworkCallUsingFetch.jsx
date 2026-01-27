import { useEffect } from "react"
import { useState } from "react"

function NetworkCallUsingFetch(){
    const [images, setImages] = useState([])

    const url =  "https://api.unsplash.com/search/photos?query=makeup&client_id=AZCKortI4P-o-KBp7HxoiT6en2l60HSfnAi_iArjQCo"

    useEffect(() =>
        {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setImages(data.results)
        })
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


export default NetworkCallUsingFetch
/*
server Path = url

fetch(url)
.then(response)
.then(data)
.catch(error)


url = `https://api.unsplash.com/search/photos?query=nature&client_id=cYjzlDbCwXD5gpOZUzTNWCUS9xFgf-Sm_oVZEvHeLTs`

secret_key = cYjzlDbCwXD5gpOZUzTNWCUS9xFgf-Sm_oVZEvHeLTs
*/