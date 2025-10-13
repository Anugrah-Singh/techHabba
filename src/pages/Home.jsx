import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
import TimelineComponent from '../components/TimelineComponent';
import NewCTA from '../components/NewCTA';
import Footer from '../components/Footer';
import { BackgroundLines } from '../ui/background-lines';

function Home() {
  return (
    <BackgroundLines className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <TimelineComponent />
      <NewCTA />
      <Footer />
    </BackgroundLines>
  );
}

export default Home;