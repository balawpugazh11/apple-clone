import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import AppleNavbar from './Components/Navbar'
import PromoBanner from './Components/PromoBanner'
import Hero from './Components/Hero'
import Hero2 from './Components/Hero2'
import Hero3 from './Components/Hero3'
 import Products from './Components/Products'
 import Movieposter from './Components/MoviePoster'
import Footer from './Components/Footer'


function App() {

  return (
    <>
     <AppleNavbar />
      <PromoBanner />
      <Hero />
      <Hero2 />
      <Hero3 />
      <Products />
      <Movieposter />
     <Footer />
    </>
  )
}

export default App
