import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/useMediaQuery';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  return (
  <div className="relative mx-auto mt-20 md:mt-32 mb-10 flex max-w-7xl flex-col items-center justify-center">
      {/* Decorative borders - hidden on mobile */}
      {!isMobile && (
        <>
          <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-800/80">
            <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
          </div>
          <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-800/80">
            <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-800/80">
            <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </div>
        </>
      )}
      
      <div className="px-4 py-6 md:py-10 lg:py-20">
  <h1 className="relative z-10 mx-auto max-w-4xl text-center text-xl sm:text-2xl font-bold text-slate-300 md:text-4xl lg:text-7xl">
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
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-base md:text-lg font-normal text-neutral-600 dark:text-neutral-400">
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
          className="relative z-10 mt-6 md:mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => navigate('/events')}
            className="w-full sm:w-60 transform rounded-lg bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-300">
            Explore Events
          </button>
          <button
            onClick={() => navigate('/registration')}
            className="w-full sm:w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900"
          >
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
          className="relative z-10 mt-12 md:mt-20 rounded-2xl md:rounded-3xl border border-neutral-200 bg-neutral-100 p-2 md:p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
          <div className="w-full overflow-hidden rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-700">
            <img
              src="https://images.pexels.com/photos/11308989/pexels-photo-11308989.jpeg"
              alt="Tech Habba event preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;