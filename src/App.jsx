import React from 'react'
import NavBar from './components/NavBar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/products' element={<Products />} />
        <Route path ='/about' element={<About />} />
        <Route path ='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}
