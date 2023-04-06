import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import React, {useState} from 'react'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import VillainEdit from './pages/VillainEdit'
import VillainIndex from './pages/VillainIndex'
import VillainNew from './pages/VillainNew'
import VillainShow from './pages/VillainShow'
import mockVillains from './mockVillains'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  const [villains, setVillains] = useState(mockVillains)
  const createVillain = (villain) => {
    console.log(villain)
  }
  return (
    <>
        <Header />
        <div className='App'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/VillainIndex" element={<VillainIndex villains={villains}/>}/>
            <Route path="/VillainShow/:id" element={<VillainShow villains={villains}/>}/>
            <Route path="/VillainNew" element={<VillainNew createVillain={createVillain}/>}/>
            <Route path="/VillainEdit" element={<VillainEdit/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
        <Footer className="Footer" />
    </>
  )
}

export default App;