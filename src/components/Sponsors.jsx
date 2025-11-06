import React from 'react';
import { SingleVelocityScroll } from '../ui/SingleVelocityScroll';

const Sponsors = () => {
  // First row - First half of IEEE logos
  const row1Images = [
    '/ieee.jpeg',
    '/ieee_aess.jpeg',
    '/ieee_ait.jpeg',
    '/ieee_bangalore.jpg',
  ];

  // Second row - IBM and AMD logos
  const row2Images = [
    '/ibm.png',
    '/amd.png',
  ];

  // Third row - Rest of IEEE logos
  const row3Images = [
    '/ieee_cas.jpeg',
    '/ieee_pes.jpeg',
    '/ieee_women.jpeg',
  ];

  // Create sponsor logo elements for each row
  const SponsorLogos = ({ images }) => (
    <>
      {images.map((img, index) => (
        <span key={index} className="inline-flex mx-10 md:mx-16">
          <div className="bg-white border-2 border-white rounded-lg p-6 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-white/20">
            <img
              src={img}
              alt={`Sponsor ${index + 1}`}
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>
        </span>
      ))}
    </>
  );

  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Our Sponsors
        </h2>
        <p className="text-center text-gray-400 text-lg">
          Proudly supported by IEEE and its societies
        </p>
      </div>
      
      <div className="relative space-y-16">
        {/* First scrolling row - First half of IEEE logos */}
        <SingleVelocityScroll 
          default_velocity={1}
          text={<SponsorLogos images={row1Images} />}
          className=""
        />
        
        {/* Second scrolling row - IBM and AMD (opposite direction) */}
        <SingleVelocityScroll 
          default_velocity={-1}
          text={<SponsorLogos images={row2Images} />}
          className=""
        />

        {/* Third scrolling row - Rest of IEEE logos */}
        <SingleVelocityScroll 
          default_velocity={1}
          text={<SponsorLogos images={row3Images} />}
          className=""
        />
      </div>
    </section>
  );
};

export default Sponsors;
