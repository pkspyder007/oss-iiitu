import React, { useState } from 'react'
import COC from '../components/CodeOfConduct';
import Contact from '../components/Contact';
import Event from '../components/Event';
import Hero from '../components/Hero';
import Info from '../components/Info';
import { homeObjOne, homeObjTwo } from '../components/Info/data';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggleNav={toggleNav} />
      <Navbar toggleNav={toggleNav} />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Contact />
      <Event />
      <COC />
    </>
  )
}

export default Home
