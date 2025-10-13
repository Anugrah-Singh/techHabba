import React from "react";
import { Timeline } from "../ui/timeline";

function TimelineComponent() {
  const data = [
    {
      title: "Day 1 (Nov 13): AI Insights & Inspiration",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-300 md:text-sm">
            Opening ceremony, keynote sessions, and workshops focused on AI technologies and industry insights.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2940&auto=format&fit=crop"
              alt="AI workshop"
              className="w-full max-w-full h-auto rounded-lg object-cover shadow-lg h-20 md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
              alt="keynote session"
              className="w-full max-w-full h-auto rounded-lg object-cover shadow-lg h-20 md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop"
              alt="AI technology"
              className="w-full max-w-full h-auto rounded-lg object-cover shadow-lg h-20 md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2940&auto=format&fit=crop"
              alt="innovation workshop"
              className="w-full max-w-full h-auto rounded-lg object-cover shadow-lg h-20 md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Day 2 (Nov 14): AI Innovation & Competitions",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-300 md:text-sm">
            Competitive events begin, including Prompt to Product, Quiz & Debate, and the start of The Big Hack hackathon.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm mb-2">
              🏆 Prompt to Product Competition
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm mb-2">
              🧠 Quiz & Debate Sessions
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm mb-2">
              💻 The Big Hack Hackathon Begins
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm mb-2">
              🚀 Innovation Workshops
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm">
              🤝 Networking Sessions
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop"
              alt="competition event"
              className="w-full max-w-full h-auto rounded-lg object-cover shadow-lg h-20 md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2940&auto=format&fit=crop"
              alt="hackathon"
              className="w-full max-w-full h-auto rounded-lg object-cover shadow-lg h-20 md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
              alt="quiz competition"
              className="w-full max-w-full h-auto rounded-lg object-cover shadow-lg h-20 md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop"
              alt="debate session"
              className="w-full max-w-full h-auto rounded-lg object-cover shadow-lg h-20 md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Day 3 (Nov 15): AI Innovation & Competitions",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-300 md:text-sm">
            Final day of competitions, hackathon presentations, and closing ceremony with prize distribution.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm mb-2">
              🏆 Hackathon Presentations
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm mb-2">
              🎯 Competition Finals
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm mb-2">
              🏅 Prize Distribution
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm mb-2">
              🎉 Closing Ceremony
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm">
              🌟 Awards & Recognition
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2940&auto=format&fit=crop"
              alt="prize distribution"
              className="w-full max-w-full h-auto rounded-lg object-cover shadow-lg h-20 md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop"
              alt="closing ceremony"
              className="w-full max-w-full h-auto rounded-lg object-cover shadow-lg h-20 md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
              alt="awards ceremony"
              className="w-full max-w-full h-auto rounded-lg object-cover shadow-lg h-20 md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop"
              alt="celebration"
              className="w-full max-w-full h-auto rounded-lg object-cover shadow-lg h-20 md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip py-10 md:py-20">
      <div className="px-4 md:px-8 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
          Event Schedule
        </h2>
        <p className="text-sm md:text-base lg:text-base max-w-2xl my-4 mx-auto text-neutral-300 text-center font-normal">
          Join us for three days of innovation, learning, and competition at Tech Habba 2024.
        </p>
      </div>
      <Timeline data={data} />
    </div>
  );
}

export default TimelineComponent;