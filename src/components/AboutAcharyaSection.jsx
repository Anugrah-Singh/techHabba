import React from 'react';

const AboutAcharyaSection = () => {
  return (
    <div id="about-acharya" className="py-16 px-4 sm:px-6 lg:px-8 dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
          Acharya: A Brief Overview
        </h2>

        <div className="mb-12">
          <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
            Founded in 1990 in Bangalore, Acharya is a global education institution dedicated to revolutionizing learning. It serves over 12,000 students annually across 100+ academic programs.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
            The 120-acre campus fosters experiential and collaborative learning with state-of-the-art facilities, drawing a diverse student body from over 75 countries. Acharya is strongly committed to sustainability, featuring extensive afforestation, rainwater harvesting, an artificial lake, and the use of alternative energy sources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-white">Vision</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To be a fountainhead of innovative human enterprise through value-based education.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-white">Mission</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To provide excellent academic ambience, foster development, and ensure ethical, sustainable service.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-white">Motto</h3>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              Nurturing Aspirations & Supporting Growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAcharyaSection;