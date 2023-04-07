import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import React, {useState, useEffect} from 'react'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import VillainEdit from './pages/VillainEdit'
import VillainIndex from './pages/VillainIndex'
import VillainNew from './pages/VillainNew'
import VillainShow from './pages/VillainShow'
import mockVillains from './mockVillains'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  const [villains, setVillains] = useState([])

  useEffect(() => {
    readVillain()
  }, [])

  const readVillain = () => {
    fetch("http://localhost:3000/villains")
      .then((response) => response.json())
      .then((payload) => {
        setVillains(payload)
      })
      .catch((error) => console.log(error))
  }
  
  const createVillain = (villain) => {
    fetch("http://localhost:3000/villains", {
      body: JSON.stringify(villain),
      headers: {
        "Content-Type": "application/json"
      },
      
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readVillain())
      .catch((errors) => console.log("Villain create errors:", errors))
  }
  

  const updateVillain = (villain, id) => {
    fetch(`http://localhost:3000/villains/${id}`, {
      body: JSON.stringify(villain),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((response) => response.json())
      .then((payload) => readVillain())
      .catch((errors) => console.log("Villain update errors:", errors))
  }

  const deleteVillain = (id) => {
    fetch(`http://localhost:3000/villains/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => readVillain())
      .catch((errors) => console.log("delete errors:", errors))
  }
  return (
    <>
        <Header />
        <div className="bg"></div>
        <div className='App'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/VillainIndex" element={<VillainIndex villains={villains}/>}/>
            <Route path="/VillainShow/:id" element={<VillainShow villains={villains} deleteVillain={deleteVillain} />}/>
            <Route path="/VillainNew" element={<VillainNew createVillain={createVillain}/>}/>
            <Route path="/VillainEdit/:id" element={<VillainEdit villains={villains} updateVillain={updateVillain}/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
        <Footer className="Footer" />
    </>
  )
}

export default App;