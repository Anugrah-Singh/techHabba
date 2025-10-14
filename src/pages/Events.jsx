

import React from 'react';
import eventsData from '../data/events.json';
import { EventCard } from '../components/EventCard';
import { HackathonCard } from '../components/HackathonCard';


const Events = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Acharya white logo in top left */}
      <img
        src="/Acharya white logo.png"
        alt="Acharya White Logo"
        style={{ position: 'absolute', top: 20, left: 20, width: 60, height: 'auto', zIndex: 50 }}
      />
      <div className="pt-36 pb-8 flex justify-center items-center px-4">
        <h1 className="text-4xl font-bold text-neutral-100 mb-4 text-center drop-shadow-lg">
          All Events
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {/* Render HackathonCard for hackathon event only */}
        {eventsData.events.filter(event => event.name !== "The Big Hack - National Level 24hr Hackathon").map(event => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.emoji + ' ' + event.name}
            tag={event.emoji}
            image={"https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          />
        ))}
      </div>
    <HackathonCard />
    </div>
  );
};

export default Events;