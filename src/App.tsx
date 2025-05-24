import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
