import React from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

export default function Events() {
  const events = [
    {
      title: "Interactive Workshops",
      description:
        "Hands-on learning experiences with cutting-edge technologies and expert guidance.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Tech Competitions",
      description:
        "Challenge yourself in coding contests, hackathons, and innovation challenges.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Speaker Sessions",
      description:
        "Learn from industry leaders, innovators, and tech visionaries sharing their insights.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Networking Events",
      description:
        "Connect with fellow tech enthusiasts, potential collaborators, and industry professionals.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
          Experience the Future of Technology
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-300 text-center font-normal">
          From coding workshops to innovation challenges, Tech Habba offers everything you need to explore, learn, and excel in the world of technology.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {events.map((event) => (
            <EventCard key={event.title} className={event.className}>
              <EventTitle>{event.title}</EventTitle>
              <EventDescription>{event.description}</EventDescription>
              <div className="h-full w-full">{event.skeleton}</div>
            </EventCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const EventCard = ({ children, className }) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const EventTitle = ({ children }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const EventDescription = ({ children }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-400 text-center font-normal",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2940&auto=format&fit=crop"
            alt="coding workshop"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm"
          />
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-black via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

const SkeletonTwo = () => {
  const images = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2940&auto=format&fit=crop",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="competition images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="competition images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div className="relative flex gap-10 h-full group/image">
      <div className="w-full mx-auto bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <div className="h-20 w-20 absolute z-10 inset-0 text-blue-500 m-auto flex items-center justify-center">
            <svg
              className="w-12 h-12"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <img
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2940&auto=format&fit=crop"
            alt="speaker session"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent mt-10">
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <svg
          className="w-16 h-16 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.75 1.75 0 0018.25 7h-7.5A1.75 1.75 0 009 8.37L6.46 16H9v6a1 1 0 001 1h6a1 1 0 001-1zm-9-6.5l2.5-7.5h7.5l2.5 7.5H11z" />
        </svg>
      </div>
      <div className="mt-4 text-center">
        <p className="text-white text-lg font-semibold">Connect & Collaborate</p>
        <p className="text-neutral-400 text-sm">Build lasting relationships</p>
      </div>
    </div>
  );
};