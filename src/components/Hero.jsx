import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/useMediaQuery';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

function Hero() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  // Event date: November 13, 2025 at 8:00 AM
  const eventDate = new Date('2025-11-13T08:00:00');
  
  return (
    <div className="relative mx-auto mt-16 md:mt-32 mb-10 flex max-w-7xl flex-col items-center justify-center px-4 md:px-6 lg:px-8">
      {/* Decorative borders - hidden on mobile */}
      {!isMobile && (
        <>
          <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
            <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
          </div>
          <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
            <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
            <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </div>
        </>
      )}
      
      <div className="w-full py-8 md:py-10 lg:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl sm:text-4xl font-bold text-slate-700 md:text-5xl lg:text-7xl dark:text-slate-300">
          {"Experience the Future of Technology at Tech Habba"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block">
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 md:py-6 text-center text-base md:text-lg font-normal text-neutral-600 dark:text-neutral-400">
          Join us for an unforgettable journey into innovation, where cutting-edge technology meets creativity. Discover workshops, competitions, and speakers that will inspire your tech journey.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-6 md:mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 px-4 md:px-0">
          <button
            onClick={() => {
              const el = document.getElementById('events');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="w-auto min-w-[200px] sm:w-60 transform rounded-lg bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Explore Events
          </button>
          <button
            onClick={() => navigate('/register')}
            className="w-auto min-w-[200px] sm:w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Register Now
          </button>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-12 md:mt-20 mx-0 rounded-2xl md:rounded-3xl border border-neutral-800 bg-transparent p-2 md:p-8 lg:p-12">
          <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-neutral-200 px-2">
              Event Starts In
            </h2>
            <div className="w-full flex justify-center scale-90 sm:scale-100">
              <FlipClockCountdown
                to={eventDate}
                labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                labelStyle={{
                  fontSize: isMobile ? 7 : 14,
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  color: '#9ca3af',
                }}
                digitBlockStyle={{
                  width: isMobile ? 28 : 60,
                  height: isMobile ? 42 : 80,
                  fontSize: isMobile ? 24 : 50,
                  background: '#1f2937',
                  color: '#ffffff',
                }}
                dividerStyle={{ color: 'transparent', height: 0 }}
                separatorStyle={{ color: '#9ca3af', size: isMobile ? '3px' : '6px' }}
                duration={0.5}
              />
            </div>
            <p className="text-sm md:text-base text-center text-neutral-600 dark:text-neutral-400 max-w-2xl px-4">
              November 13-15, 2025 • Join us for three days of innovation and technology
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;