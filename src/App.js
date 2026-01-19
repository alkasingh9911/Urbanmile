import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Directors from './components/Directors';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WhyChooseUs />
      <Directors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
