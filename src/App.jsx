import { useState } from 'react'
import './App.css'
import Autos from './Components/Autos'
import Formularios from './Components/Formularios'

function App() {
  const [vehiculos, setVehiculos] = useState({
    marca:'',
    color:''
  })

  return (
    <>
    <Formularios setVehiculos={setVehiculos}/>
    <Autos vehiculos={vehiculos}/>
    </>
  )
}

export default App
