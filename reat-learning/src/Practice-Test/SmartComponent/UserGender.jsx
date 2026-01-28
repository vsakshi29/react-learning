import {useState} from 'react'
function UserGender() {
  const genders = {
        Male : "male",
        Female : "female",
        Others: "others"
    }
   const [gender, setGender] = useState(genders.Male)
   return (
        <>
         <h1>Choose Your Gender:{gender == genders.Male ? "Male" : gender == genders.Female ? "Female" : "Others"}</h1>                       
        <button onClick={() => setGender(genders.Male)}>Male</button>
        <button onClick={() => setGender(genders.Female )}>Female</button> 
        <button onClick={() => setGender(genders.Others)}>Others</button>
       
       
          
        </>
    )
}
export default UserGender