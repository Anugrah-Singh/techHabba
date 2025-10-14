import React from 'react';
import { TextGenerateEffect } from '../ui/text-generate-effect';

const words = `Tech Habba is where innovation meets inspiration. Join thousands of tech enthusiasts, developers, and visionaries for an unforgettable journey through cutting-edge technology. Experience groundbreaking workshops, thrilling competitions, and insights from industry leaders. Here, ideas transform into reality, and the future of technology unfolds before your eyes.`;

function About() {
  return (
    <div className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          About Tech Habba
        </h2>
      </div>
      <TextGenerateEffect
        words={words}
        className="text-center"
      />
    </div>
  );
}

export default About;