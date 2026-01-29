import './App.css'
import DumbComponent from './components/DumbComponents/DumbComponent'
import SmartComponent from './components/SmartComponents/SmartComponent'
import DumbUser from './components/DumbComponents/DumbUser'
import SmartUser from './components/SmartComponents/SmartUser'
import NameComponent from './components/SmartComponents/NameComponent'
import ConditionalRendering from './components/SmartComponents/ConditionalRendering'
import Name from './components/SmartComponents/NameComponent'
import NameRendering from './components/SmartComponents/NameRendering'
import ImageRendering from './components/SmartComponents/ImageRendering'
import PageChange from './components/SmartComponents/pageChange'
import MultipleImageRendering from './components/SmartComponents/MultipleImageRenderig'
import StateImageRendering from './components/SmartComponents/StateImageRendering'
import Loop from './components/SmartComponents/Looping/Loop'
import FruitsCart from './components/SmartComponents/Looping/FruitsCart'
import NetworkCallUsingFetch from './components/Networking/NetworkCallUsingFetch'
import APICallUsingFetch from './components/Networking/APICallUsingFetch'
import ReplicaAPICallFetch from './components/Networking/ReplicaAPICallUsingFetch'
import UserGender from './Practice-Test/SmartComponent/UserGender'
import UserList from './Practice-Test/DumbComponet/UserList'
import PropsPassingComponent from './Practice-Test/SmartComponent/PropsPassingComponent'
import LogInStatus from './Practice-Test/SmartComponent/LogInStatus'
import CreateCounterForTrackCount from './Practice-Test/SmartComponent/CreateCounterForTrackCount'
import FetchDataFromAPI from './Practice-Test/SmartComponent/FetchDataFromAPI'
import AxiosExample from './components/Networking/AxiosExample'

function App() {
  // const name = ["Sakshi" , "Neesshu" , "Isha" , "Yaash" , "Rahul"]
  return (
    <>
      {/* <h1>Finally , We started learning .</h1> */}

      {/* <DumbComponent userName = "Sakshi Verma"/>
      <DumbUser dumbName = "Neeshu"></DumbUser>
       <NameComponent SmartUser ="Sakshi" ></NameComponent>
      <SmartComponent/>
      <SmartUser></SmartUser> 
      <ConditionalRendering/>
     <NameRendering/>
     <ImageRendering/>
     <PageChange/>
     <MultipleImageRendering/>
     <Loop/>*/}
     {/* <FruitsCart/> */}
     {/* 
     <APICallUsingFetch /> 
     <ReplicaAPICallFetch/>*/}
     {/* <NetworkCallUsingFetch></NetworkCallUsingFetch> */}
     
      {/*<UserGender/>*/}

    {/* <UserList name = {name} /> */}

    {/* <PropsPassingComponent/>  */}

    {/* <LogInStatus/> */}
    {/* <CreateCounterForTrackCount/>  */}

    {/* <FetchDataFromAPI/> */}
      <AxiosExample/>

    </>
  )
}

export default App
