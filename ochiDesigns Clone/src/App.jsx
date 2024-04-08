import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import OurApproach from './components/OurApproach'
import Animations from './components/Animations'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './Footer'
import LocomotiveScroll from 'locomotive-scroll'

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full m-h-screen text-white bg-zinc-900'> 
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <OurApproach/>
      <Animations/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App