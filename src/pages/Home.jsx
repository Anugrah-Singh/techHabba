import React from 'react';
import { FloatingNav } from '../components/FloatingNav';
import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
import AboutAcharyaSection from '../components/AboutAcharyaSection';
import TimelineComponent from '../components/TimelineComponent';
import NewCTA from '../components/NewCTA';
import Footer from '../components/Footer';
import { BackgroundLines } from '../ui/background-lines';

function Home() {
  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden">
      <BackgroundLines className="absolute inset-0" />
      <div className="relative z-10 w-full overflow-x-hidden">
        <FloatingNav />
        <main className="pt-8 w-full overflow-x-hidden pb-24">
          <Hero />
          <About />
          <Events />
          <AboutAcharyaSection />
          <TimelineComponent />
          <NewCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;