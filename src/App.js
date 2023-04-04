import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import VillainEdit from './pages/VillainEdit'
import VillainIndex from './pages/VillainIndex'
import VillainNew from './pages/VillainNew'
import VillainShow from './pages/VillainShow'
import mockVillains from './mockVillains'
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"

const App = () => {
  // const [villains, setVillains] = useState(mockVillains)
  return (
    <div>
      <>
      <Navbar/>
      <Header/>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/villainindex" element={<VillainIndex/>}/>
        <Route path="/villainshow" element={<VillainShow/>}/>
        <Route path="/villainnew" element={<VillainNew/>}/>
        <Route path="/villainedit" element={<VillainEdit/>}/>
        <Route path="*" element={<NotFound/>}/>
      
      </Routes>
      <Footer/>
      </>
    </div>
  )
}


export default App;
