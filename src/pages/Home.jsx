import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import AboutAcharyaSection from '../components/AboutAcharyaSection';
import TimelineComponent from '../components/TimelineComponent';
import NewCTA from '../components/NewCTA';
import Footer from '../components/Footer';
// import { BackgroundLines } from '../ui/background-lines';
import { Prize } from '@/components/Prize';

function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Acharya white logo in top left */}
      <img
        src="/Acharya white logo.png"
        alt="Acharya White Logo"
        style={{ position: 'absolute', top: 20, left: 20, width: 60, height: 'auto', zIndex: 50 }}
      />
      {/* <BackgroundLines className="absolute inset-0" /> */}
      <div className="relative z-10">
        <main className="pt-24 md:pt-32">
          <Hero />
          <About />
          <Prize children = {"Prize Pool 1 Lakh"}/>
          <TimelineComponent />
          <AboutAcharyaSection />
          <NewCTA />
        </main>
      </div>
    </div>
  );
}

export default Home;