import React from 'react';

const SponsorsAndPartners = () => {
  // Sponsors
  const sponsors = [
    {
      name: 'IBM',
      logo: '/ibm.png',
      needsWhiteBg: true
    },
    {
      name: 'AMD',
      logo: '/amd.png',
      needsWhiteBg: true
    }
  ];

  // Partners (IEEE and societies)
  const partners = [
    { name: 'IEEE', logo: '/ieee.jpeg' },
    { name: 'IEEE AESS', logo: '/ieee_aess.jpeg' },
    { name: 'IEEE AIT', logo: '/ieee_ait.jpeg' },
    { name: 'IEEE Bangalore', logo: '/ieee_bangalore.jpg' },
    { name: 'IEEE CAS', logo: '/ieee_cas.jpeg' },
    { name: 'IEEE PES', logo: '/ieee_pes.jpeg' },
    { name: 'IEEE Women', logo: '/ieee_women.jpeg' },
  ];

  return (
    <section className="relative w-full py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 animate-fade-in">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Sponsors & Partners
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-sm md:text-lg mt-4 md:mt-6 max-w-2xl mx-auto px-4">
            Empowered by industry leaders and supported by prestigious organizations
          </p>
        </div>

        {/* Sponsors */}
        <div className="mb-12 md:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
              Meet Our Sponsors
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                <div className={`relative backdrop-blur-xl rounded-xl p-4 md:p-8 border border-white/10 transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300 ${sponsor.needsWhiteBg ? 'bg-white' : 'bg-black/70'}`}>
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-16 md:h-24 lg:h-28 w-auto object-contain mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-12 md:my-20">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-black px-4 md:px-6 text-gray-500 text-xs md:text-sm font-medium">
              In Association With
            </span>
          </div>
        </div>

        {/* Partners */}
        <div>
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
              Our Partners
            </h3>
            <p className="text-gray-400 text-sm md:text-base px-4">
              Proud to collaborate with IEEE and its technical societies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-white backdrop-blur-sm rounded-lg p-3 md:p-6 border-2 border-white hover:border-gray-300 transition-all duration-300 h-full flex items-center justify-center transform group-hover:scale-105 group-hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action for Sponsors */}
        <div className="mt-12 md:mt-20 text-center animate-fade-in-up px-4">
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative px-4 md:px-8 py-3 md:py-4 bg-black rounded-lg leading-none flex items-center">
              <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition duration-200">
                Interested in sponsoring?{' '}
                <a href="mailto:thisisthebigo@gmail.com" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Contact us
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default SponsorsAndPartners;
