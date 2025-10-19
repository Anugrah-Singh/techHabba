import React from 'react';
import { TextGenerateEffect } from '../ui/text-generate-effect';

const words = `Tech Habba is Acharya's flagship annual technology festival, bringing together students, developers, and tech enthusiasts for three days of innovation and competition. Hosted on our 120-acre campus in Bangalore, the fest features technical competitions, hands-on workshops, and gaming tournaments across coding, cybersecurity, electronics, and more—providing a platform to showcase skills, learn from experts, and connect with the tech community.`;

function About() {
  return (
    <div id="about" className="py-20 px-4 max-w-4xl mx-auto">
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