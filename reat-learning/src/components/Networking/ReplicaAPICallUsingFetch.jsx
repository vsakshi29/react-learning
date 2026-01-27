import { useState , useEffect} from "react"

function ReplicaAPICallFetch() {

    const [result, setResult] = useState([])
    const [search, setSearch] = useState()
    const url = `https://api.unsplash.com/search/photos?query=${search}&client_id=AZCKortI4P-o-KBp7HxoiT6en2l60HSfnAi_iArjQCo`

    useEffect(() =>{
      fetch(url)
     .then(response => response.json())
     .then(data => {
        setResult(data.result)
     })
     .catch(error => console.log(error))

    }, [search])


    return (
<>
<input type = "text" placeholder="Search" onChange={(event) => setSearch(event.target.value == "" ? "Pictures" : event.target.value)}/>
 
 {result.map((val, index) =>
<img key = {index} src = {val.url.thumb} />
)}

</>
    )
}

export default ReplicaAPICallFetch