import './App.css'
import DumbComponent from './components/DumbComponents/DumbComponent'
import SmartComponent from './components/SmartComponents/SmartComponent'
import DumbUser from './components/DumbComponents/DumbUser'
import SmartUser from './components/SmartComponents/SmartUser'
import NameComponent from './components/SmartComponents/NameComponent'

function App() {
  
  return (
    <>
      <h1>Finally , We started learning .</h1>

      <DumbComponent userName = "Sakshi Verma"/>
      <DumbUser dumbName = "Neeshu"></DumbUser>
       <NameComponent SmartUser ="Sakshi" ></NameComponent>
      <SmartComponent/>
      <SmartUser></SmartUser>
    </>
  )
}

export default App
