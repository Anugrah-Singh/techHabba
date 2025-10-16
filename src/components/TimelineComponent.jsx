import React from "react";
import { Timeline } from "./timeline";
import { 
  FaLightbulb, 
  FaCode, 
  FaUsers, 
  FaTrophy, 
  FaStar, 
  FaRocket,
  FaChess,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaBrain,
  FaGamepad,
  FaClock,
  FaTools
} from "react-icons/fa";
import { 
  MdQuiz, 
  MdRestaurant,
  MdEmojiEvents,
  MdEngineering 
} from "react-icons/md";
import { 
  HiSparkles, 
  HiLightningBolt 
} from "react-icons/hi";
import { 
  BsFillBarChartFill 
} from "react-icons/bs";
import { 
  GiCircuitry, 
  GiTreasureMap 
} from "react-icons/gi";
import timelineData from "../assets/timeline.json";

// Category color mappings
const categoryStyles = {
  tech: {
    gradient: "from-blue-500/10 to-cyan-500/5 dark:from-blue-500/20 dark:to-cyan-500/10",
    border: "border-blue-500/20",
    borderLeft: "border-blue-500",
    iconColor: "text-blue-500"
  },
  "non-tech": {
    gradient: "from-purple-500/10 to-pink-500/5 dark:from-purple-500/20 dark:to-pink-500/10",
    border: "border-purple-500/20",
    borderLeft: "border-purple-500",
    iconColor: "text-purple-500"
  },
  general: {
    gradient: "from-green-500/10 to-emerald-500/5 dark:from-green-500/20 dark:to-emerald-500/10",
    border: "border-green-500/20",
    borderLeft: "border-green-500",
    iconColor: "text-green-500"
  },
  break: {
    gradient: "from-orange-500/10 to-amber-500/5 dark:from-orange-500/20 dark:to-amber-500/10",
    border: "border-orange-500/20",
    borderLeft: "border-orange-500",
    iconColor: "text-orange-500"
  }
};

// Icon mapping for different event types
const getEventIcon = (title, category) => {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes("registration")) return FaUsers;
  if (titleLower.includes("inauguration")) return FaRocket;
  if (titleLower.includes("ideathon")) return FaLightbulb;
  if (titleLower.includes("lunch") || titleLower.includes("break")) return MdRestaurant;
  if (titleLower.includes("programming") || titleLower.includes("cp")) return FaCode;
  if (titleLower.includes("chess")) return FaChess;
  if (titleLower.includes("ctf") || titleLower.includes("capture the flag")) return FaShieldAlt;
  if (titleLower.includes("treasure hunt")) return GiTreasureMap;
  if (titleLower.includes("workshop")) return FaBrain;
  if (titleLower.includes("prompt")) return HiSparkles;
  if (titleLower.includes("bgmi") || titleLower.includes("fifa") || titleLower.includes("valo")) return FaGamepad;
  if (titleLower.includes("hackathon")) return HiLightningBolt;
  if (titleLower.includes("caed") || titleLower.includes("engineering")) return MdEngineering;
  if (titleLower.includes("circuit")) return GiCircuitry;
  if (titleLower.includes("bridge")) return FaTools;
  if (titleLower.includes("valorant")) return FaGamepad;
  if (titleLower.includes("prize") || titleLower.includes("closing")) return FaTrophy;
  if (titleLower.includes("quiz")) return MdQuiz;
  
  // Default icons by category
  if (category === "tech") return FaCode;
  if (category === "non-tech") return FaGamepad;
  if (category === "general") return MdEmojiEvents;
  
  return FaClock;
};

// Render individual event card
const EventCard = ({ event }) => {
  const style = categoryStyles[event.category] || categoryStyles.general;
  const Icon = getEventIcon(event.title, event.category);
  
  return (
    <div className={`flex items-start gap-3 p-4 bg-gradient-to-r ${style.gradient} rounded-lg border-l-4 ${style.borderLeft} border ${style.border} hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}>
      <Icon className={`${style.iconColor} text-2xl mt-1 flex-shrink-0`} />
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-1">
          <h5 className="font-semibold text-neutral-800 dark:text-neutral-200">
            {event.title}
          </h5>
          <span className={`text-xs font-medium ${style.iconColor} whitespace-nowrap`}>
            {event.time}
          </span>
        </div>
        {event.description && (
          <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            {event.description}
          </p>
        )}
        <div className="mt-2">
          <span className={`inline-block text-xs px-2 py-1 rounded-full ${style.gradient} ${style.border} border font-medium ${style.iconColor}`}>
            {event.category === "non-tech" ? "Non-Tech" : event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

function TimelineComponent() {
  const { eventTimeline } = timelineData;

  // Debug: log to see if data is loading
  console.log("Timeline data loaded:", eventTimeline);

  const data = [
    {
      title: "Day 1",
      content: (
        <div>
          <div className="mb-6">
            <h4 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              {eventTimeline.day1.title}
            </h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-1">
              {eventTimeline.day1.description}
            </p>
            <div className="flex items-center gap-2 mt-3">
              <FaStar className="text-yellow-500" />
              <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                {eventTimeline.day1.date}
              </span>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {eventTimeline.day1.events.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Day 2",
      content: (
        <div>
          <div className="mb-6">
            <h4 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              {eventTimeline.day2.title}
            </h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-1">
              {eventTimeline.day2.description}
            </p>
            <div className="flex items-center gap-2 mt-3">
              <FaStar className="text-yellow-500" />
              <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                {eventTimeline.day2.date}
              </span>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {eventTimeline.day2.events.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Day 3",
      content: (
        <div>
          <div className="mb-6">
            <h4 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              {eventTimeline.day3.title}
            </h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-1">
              {eventTimeline.day3.description}
            </p>
            <div className="flex items-center gap-2 mt-3">
              <FaStar className="text-yellow-500" />
              <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                {eventTimeline.day3.date}
              </span>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {eventTimeline.day3.events.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Ongoing",
      content: (
        <div>
          <div className="mb-6">
            <h4 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              {eventTimeline.ongoing.title}
            </h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              {eventTimeline.ongoing.description}
            </p>
          </div>

          <div className="space-y-3 mb-6">
            {eventTimeline.ongoing.events.map((event, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 dark:from-yellow-500/20 dark:via-orange-500/20 dark:to-red-500/20 rounded-xl border-2 border-yellow-500/30 dark:border-yellow-500/40 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <MdQuiz className="text-yellow-500 text-3xl mt-1 flex-shrink-0 animate-pulse" />
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h5 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                        {event.title}
                      </h5>
                      <span className="text-xs font-semibold text-yellow-600 dark:text-yellow-400 bg-yellow-500/20 px-3 py-1 rounded-full whitespace-nowrap w-fit">
                        {event.time}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="timeline" className="relative w-full">
      <Timeline data={data} />
    </div>
  );
}

export default TimelineComponent;
