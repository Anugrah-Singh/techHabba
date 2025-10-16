import React from "react";
import { Timeline } from "./timeline";
import { FaLightbulb, FaCode, FaUsers, FaTrophy, FaStar, FaRocket } from "react-icons/fa";
import { MdQuiz, MdPresentToAll } from "react-icons/md";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";
import { BsFillBarChartFill } from "react-icons/bs";

function TimelineComponent() {
  const data = [
    {
      title: "Day 1",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Nov 13: AI Insights & Inspiration
            </h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-6">
              Kickstart your Tech Habba journey with inspiring keynotes, opening ceremony, and deep-dive workshops on cutting-edge AI technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 dark:from-blue-500/20 dark:to-blue-600/10 p-4 rounded-lg border border-blue-500/20">
              <div className="flex items-center gap-2 mb-2">
                <FaRocket className="text-blue-500 text-xl" />
                <h5 className="font-semibold text-neutral-800 dark:text-neutral-200">Opening Ceremony</h5>
              </div>
              <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                Grand inauguration with industry leaders and special guests
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 dark:from-purple-500/20 dark:to-purple-600/10 p-4 rounded-lg border border-purple-500/20">
              <div className="flex items-center gap-2 mb-2">
                <FaLightbulb className="text-purple-500 text-xl" />
                <h5 className="font-semibold text-neutral-800 dark:text-neutral-200">Keynote Sessions</h5>
              </div>
              <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                Inspiring talks from AI pioneers and tech visionaries
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 dark:from-green-500/20 dark:to-green-600/10 p-4 rounded-lg border border-green-500/20 md:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <FaCode className="text-green-500 text-xl" />
                <h5 className="font-semibold text-neutral-800 dark:text-neutral-200">AI Technology Workshops</h5>
              </div>
              <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                Hands-on workshops covering AI tools, frameworks, and real-world applications
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Day 2",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Nov 14: AI Innovation & Competitions
            </h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-6">
              The competition heats up! Showcase your skills in multiple challenges and kickstart the ultimate hackathon experience.
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-500/10 to-transparent dark:from-blue-500/20 rounded-lg border-l-4 border-blue-500">
              <FaCode className="text-blue-500 text-2xl mt-1" />
              <div>
                <h5 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">Prompt to Product Competition</h5>
                <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                  Transform AI prompts into innovative products - test your creativity and technical skills
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-yellow-500/10 to-transparent dark:from-yellow-500/20 rounded-lg border-l-4 border-yellow-500">
              <MdQuiz className="text-yellow-500 text-2xl mt-1" />
              <div>
                <h5 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">Quiz & Debate Sessions</h5>
                <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                  Test your knowledge and articulate your ideas in engaging competitions
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-500/10 to-transparent dark:from-green-500/20 rounded-lg border-l-4 border-green-500">
              <HiLightningBolt className="text-green-500 text-2xl mt-1" />
              <div>
                <h5 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">The Big Hack Hackathon Begins</h5>
                <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                  24-hour coding marathon starts - build, innovate, and create solutions
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-purple-500/10 to-transparent dark:from-purple-500/20 rounded-lg border-l-4 border-purple-500">
              <FaUsers className="text-purple-500 text-2xl mt-1" />
              <div>
                <h5 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">Innovation Workshops & Networking</h5>
                <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                  Connect with industry experts, mentors, and fellow innovators
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Day 3",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Nov 15: Grand Finale & Celebrations
            </h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-6">
              The climactic conclusion! Present your innovations, witness amazing projects, and celebrate the winners of Tech Habba 2024.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 dark:from-blue-500/20 dark:to-cyan-500/10 p-4 rounded-lg border border-blue-500/20">
              <div className="flex items-center gap-2 mb-2">
                <BsFillBarChartFill className="text-blue-500 text-xl" />
                <h5 className="font-semibold text-neutral-800 dark:text-neutral-200">Hackathon Presentations</h5>
              </div>
              <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                Teams showcase their 24-hour innovations to judges and audience
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/5 dark:from-yellow-500/20 dark:to-orange-500/10 p-4 rounded-lg border border-yellow-500/20">
              <div className="flex items-center gap-2 mb-2">
                <FaTrophy className="text-yellow-500 text-xl" />
                <h5 className="font-semibold text-neutral-800 dark:text-neutral-200">Competition Finals</h5>
              </div>
              <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                Final rounds of all competitions with live judging
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 dark:from-purple-500/20 dark:to-pink-500/10 p-4 rounded-lg border border-purple-500/20">
              <div className="flex items-center gap-2 mb-2">
                <FaStar className="text-purple-500 text-xl" />
                <h5 className="font-semibold text-neutral-800 dark:text-neutral-200">Closing Ceremony</h5>
              </div>
              <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                Celebrate achievements, announce winners, and honor outstanding contributions
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/5 dark:from-pink-500/20 dark:to-rose-500/10 p-4 rounded-lg border border-pink-500/20">
              <div className="flex items-center gap-2 mb-2">
                <HiSparkles className="text-pink-500 text-xl" />
                <h5 className="font-semibold text-neutral-800 dark:text-neutral-200">Awards & Recognition</h5>
              </div>
              <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                Prize distribution, certificates, and special recognitions for exceptional performers
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="timeline" className="relative w-full">
      <Timeline data={data} />
    </div>
  );
}

export default TimelineComponent;
