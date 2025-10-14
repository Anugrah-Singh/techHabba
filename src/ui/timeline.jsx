import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Timeline = ({ data }) => {
  const navigate = useNavigate();
  const handleCardClick = () => navigate('/events');
  return (
    <div className="w-full bg-black font-sans px-4 md:px-10">
      <div className="max-w-7xl mx-auto py-10 md:py-20 px-0 md:px-8 lg:px-10">
        <div className="w-full">
          {/* Mobile Layout */}
          <div className="md:hidden space-y-8">
            {data.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-gray-900 rounded-lg shadow-xl p-4 cursor-pointer"
                onClick={handleCardClick}
              >
                <div className="flex items-center mb-3">
                  <div className="flex items-center justify-center bg-gray-800 w-8 h-8 rounded-full mr-3">
                    <span className="font-semibold text-sm text-white">{idx + 1}</span>
                  </div>
                  <h3 className="font-bold text-white text-lg">{item.title}</h3>
                </div>
                <div className="text-gray-300">{item.content}</div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2 transform -translate-x-1/2"></div>

            {data.map((item, idx) => (
              <div
                key={idx}
                className={`mb-8 flex justify-between items-center w-full ${
                  idx % 2 === 0 ? "left-timeline" : "right-timeline flex-row-reverse"
                }`}
              >
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <motion.h1
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className="mx-auto font-semibold text-lg text-white"
                  >
                    {idx + 1}
                  </motion.h1>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4 cursor-pointer"
                  onClick={handleCardClick}
                >
                  <h3 className="mb-3 font-bold text-white text-xl">{item.title}</h3>
                  <div className="text-gray-300">{item.content}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};