import React from 'react';
import { motion } from 'framer-motion';
import { IconTrophy } from '@tabler/icons-react';

const ChiefGuest = () => {
  return (
    <div id="chief-guest" className="scroll-mt-40 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Meet Our Chief Guest
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            World's Youngest CEO & Technology Pioneer
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-1"
          >
            {/* Name and Title */}
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                Suhas Gopinath
              </h3>
              <p className="text-xl md:text-2xl text-blue-400 font-semibold mb-2">
                Founder & CEO, Globals Inc.
              </p>
              <p className="text-lg text-gray-400">
                Age 38 | Non-business Middle-Class Background
              </p>
            </div>

            {/* Main Description */}
            <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed">
              <p>
                Founded <span className="text-white font-semibold">Globals at the age of 14</span> and was recognized as the{' '}
                <span className="text-blue-400 font-semibold">World's Youngest CEO</span>. Globals was featured by{' '}
                <span className="text-white font-semibold">The Economist</span> as one of the World's Fastest Growing Tech Companies.
              </p>
              <p>
                Starting as a Web Solutions company, Globals evolved to become a global leader in{' '}
                <span className="text-white font-semibold">AI, Cyber Security, and Tech Solutions</span> for the Public Sector.
              </p>
            </div>

            {/* Achievements Grid with Image on Mobile */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              {/* Image Section - Only visible on mobile/tablet */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group flex-shrink-0 w-56 sm:w-48 mx-auto sm:mx-0 lg:hidden"
              >
                <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <img
                    src="/suhas.png"
                    alt="Suhas Gopinath"
                    className="w-full h-auto rounded-xl object-cover aspect-square transform group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </motion.div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors duration-300">
                  <div className="text-blue-400 text-sm font-semibold mb-1">YOUNG GLOBAL LEADER</div>
                  <div className="text-white text-sm">World Economic Forum (Youngest Ever)</div>
                </div>
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-4 rounded-lg hover:border-purple-500/50 transition-colors duration-300">
                  <div className="text-purple-400 text-sm font-semibold mb-1">ADVISORY BOARD</div>
                  <div className="text-white text-sm">Former Member, World Bank</div>
                </div>
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-4 rounded-lg hover:border-pink-500/50 transition-colors duration-300">
                  <div className="text-pink-400 text-sm font-semibold mb-1">NATIONAL CO-CHAIRMAN</div>
                  <div className="text-white text-sm">FICCI for ICT</div>
                </div>
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-4 rounded-lg hover:border-green-500/50 transition-colors duration-300">
                  <div className="text-green-400 text-sm font-semibold mb-1">GOVERNMENT ADVISORY</div>
                  <div className="text-white text-sm">Expert Committee, Govt of India</div>
                </div>
              </div>
            </div>

            {/* Additional Honors */}
            <div className="bg-gradient-to-r from-neutral-900/80 to-neutral-950/80 border border-neutral-800 rounded-xl p-6 space-y-3 lg:hidden">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <IconTrophy className="w-7 h-7 text-yellow-500" />
                Recognition & Education
              </h4>
              <ul className="space-y-2 text-sm md:text-base text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Member of President of France's <strong className="text-white">Club Young Leaders</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Winner of <strong className="text-white">New York Mayor's Venture Fellow</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Diploma in Public Policy at <strong className="text-white">Harvard Kennedy School</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Honorary Fellowship from <strong className="text-white">Gitam University</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Executive Education from <strong className="text-white">Nanyang Technological University, Singapore</strong></span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Image Section - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group order-2 max-w-md mx-auto hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <img
                src="/suhas.png"
                alt="Suhas Gopinath"
                className="w-full h-auto rounded-xl object-cover aspect-square lg:aspect-[4/5] transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Additional Honors - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block order-3"
          >
            <div className="bg-gradient-to-r from-neutral-900/80 to-neutral-950/80 border border-neutral-800 rounded-xl p-6 space-y-3">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <IconTrophy className="w-7 h-7 text-yellow-500" />
                Recognition & Education
              </h4>
              <ul className="space-y-2 text-sm md:text-base text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Member of President of France's <strong className="text-white">Club Young Leaders</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Winner of <strong className="text-white">New York Mayor's Venture Fellow</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Diploma in Public Policy at <strong className="text-white">Harvard Kennedy School</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Honorary Fellowship from <strong className="text-white">Gitam University</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Executive Education from <strong className="text-white">Nanyang Technological University, Singapore</strong></span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote/Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 md:mt-12"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-neutral-800 rounded-2xl p-6 md:p-10">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 text-center">
              "From a non-business middle-class family to becoming the World's Youngest CEO"
            </p>
            <p className="text-sm md:text-base text-gray-400 text-center">
              Join us to hear insights from a true technology pioneer who has shaped the global tech landscape
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChiefGuest;
