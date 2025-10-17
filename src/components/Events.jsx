import React, { useState } from "react";
import { cn } from "../lib/utils";
import { CometCard } from "./comet-card";
import { ExpandableEventCard } from "./ExpandableEventCard";
import eventsData from "../assets/events.json";
import eventPageData from "../assets/event-page.json";
import { 
  BookOpen, 
  Code, 
  Shield, 
  Map, 
  Gamepad2, 
  Lightbulb, 
  Wand2, 
  CodeSquare, 
  Cpu, 
  Zap, 
  Construction 
} from "lucide-react";

// Icon mapping based on the icon names in events.json
const iconMap = {
  "book-open": BookOpen,
  "code": Code,
  "shield": Shield,
  "map": Map,
  "gamepad2": Gamepad2,
  "lightbulb": Lightbulb,
  "wand2": Wand2,
  "code-square": CodeSquare,
  "cpu": Cpu,
  "zap": Zap,
  "construction": Construction,
  "chess": () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 22H5v-2h14v2m-6-2h-2c-1.2-2.5-1.5-3.3-1.5-4.5 0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5c0 1.2-.3 2-1.5 4.5m1.3-9.5c.6-.7 1.2-1.2 1.2-2.5 0-1.7-1.3-3-3-3-.8 0-1.5.3-2 .9-.5-.6-1.2-.9-2-.9-1.7 0-3 1.3-3 3 0 1.3.6 1.8 1.2 2.5H4v2h16v-2h-3.7z"/>
    </svg>
  )
};

// Category colors - Modern tech-themed gradients
const categoryColors = {
  "Technical": {
    card: "from-cyan-500/30 via-blue-600/25 to-indigo-700/30 border-cyan-400/40",
    badge: "bg-cyan-500/20 border-cyan-400/50 text-cyan-200",
    icon: "bg-cyan-500/20 border-cyan-400/40 text-cyan-300"
  },
  "Non-Technical": {
    card: "from-emerald-500/30 via-teal-600/25 to-green-700/30 border-emerald-400/40",
    badge: "bg-emerald-500/20 border-emerald-400/50 text-emerald-200",
    icon: "bg-emerald-500/20 border-emerald-400/40 text-emerald-300"
  },
  "Gaming": {
    card: "from-fuchsia-500/30 via-purple-600/25 to-pink-700/30 border-fuchsia-400/40",
    badge: "bg-fuchsia-500/20 border-fuchsia-400/50 text-fuchsia-200",
    icon: "bg-fuchsia-500/20 border-fuchsia-400/40 text-fuchsia-300"
  }
};

// Mapping between events.json names and event-page.json names
const eventNameMapping = {
  "Workshop": "Technical Workshop",
  "Competitive Programming (CP)": "Competitive Programming",
  "Prompt to Programming": "Prompt to Product",
  "Capture The Flag (CTF)": "Capture The Flag (CTF)",
  "Treasure Hunt": "TREASURE HUNT",
  "Chess Tournament": "Chess Tournament",
  "BGMI": "PUBG MOBILE (Battle Royale)",
  "FIFA": "FIFA (EA FC 24 or Latest Version)",
  "Valorant Tournament": "VALORANT",
  "Ideathon": "Ideathon",
  "24-Hour Hackathon": "24-Hour Hackathon",
  "CAED": "CAED – Computer-Aided Engineering Drawing",
  "Circuit Mania": "Circuit Mania",
  "Bridge Building": "Bridge Building"
};

export default function Events() {
  const [activeEvent, setActiveEvent] = useState(null);
  const events = eventsData.events;

  // Get event data from event-page.json
  const getEventData = (eventName) => {
    // Try to find mapping
    const mappedName = eventNameMapping[eventName] || eventName;
    
    // Search in all categories
    const allEvents = [
      ...(eventPageData.events.technical || []),
      ...(eventPageData.events.gaming || []),
      ...(eventPageData.events.nonTechnical || [])
    ];
    
    // Find by name match
    return allEvents.find(e => 
      e.name === mappedName || 
      e.name.toLowerCase() === mappedName.toLowerCase() ||
      e.name.toLowerCase().includes(eventName.toLowerCase()) ||
      eventName.toLowerCase().includes(e.name.toLowerCase())
    );
  };

  const handleEventClick = (event) => {
    const eventData = getEventData(event.name);
    if (eventData) {
      setActiveEvent({ ...event, eventData });
    }
  };

  return (
    <>
      <ExpandableEventCard 
        active={activeEvent} 
        setActive={setActiveEvent}
        eventData={activeEvent?.eventData}
      />
      
      <div id="events" className="relative z-20 py-10 md:py-20 lg:py-40 max-w-7xl mx-auto">
        <div className="px-4 md:px-8">
          <h4 className="text-2xl md:text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
            Explore Our Events
          </h4>

          <p className="text-sm md:text-base lg:text-base max-w-2xl my-4 mx-auto text-neutral-300 text-center font-normal">
            From coding workshops to gaming tournaments, Tech Habba offers a diverse range of events for everyone.
          </p>
        </div>

        <div className="relative px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 md:mt-12 gap-6">
            {events.map((event) => {
              const IconComponent = iconMap[event.icon] || Code;
              const colors = categoryColors[event.category] || categoryColors["Technical"];
              
              const eventData = getEventData(event.name);
              const isClickable = eventData !== null && eventData !== undefined;
              
              return (
                <CometCard 
                  key={event.id}
                  className="h-full"
                >
                  <div 
                    className={cn(
                      "relative h-full p-6 rounded-2xl bg-gradient-to-br border backdrop-blur-sm",
                      colors.card,
                      "flex flex-col justify-between min-h-[280px]",
                      isClickable && "cursor-pointer transition-all duration-300 hover:scale-105 hover:border-opacity-80"
                    )}
                    onClick={() => isClickable && handleEventClick(event)}
                  >
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={cn(
                        "px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm border",
                        colors.badge
                      )}>
                        {event.category}
                      </span>
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-4">
                      <div className={cn(
                        "w-14 h-14 rounded-xl backdrop-blur-sm flex items-center justify-center border",
                        colors.icon
                      )}>
                        {typeof IconComponent === 'function' ? (
                          <IconComponent className="w-7 h-7" />
                        ) : (
                          <IconComponent />
                        )}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {event.name}
                      </h3>
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                    
                    {/* Click indicator for events with detail pages */}
                    {isClickable && (
                      <div className="mt-4 flex items-center gap-2 text-cyan-400 text-sm font-medium">
                        <span>View Details</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                    
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                </CometCard>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}