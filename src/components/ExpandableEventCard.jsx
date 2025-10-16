import React, { useEffect, useId, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";
import { useNavigate } from "react-router-dom";
import { 
  Clock, 
  Users, 
  Trophy, 
  MapPin, 
  Mail, 
  Phone, 
  Calendar,
  Award,
  Info,
  CheckCircle,
  HelpCircle,
  Target,
  X
} from "lucide-react";

export function ExpandableEventCard({ active, setActive, eventData }) {
  const id = useId();
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, setActive]);

  useOutsideClick(ref, () => setActive(null));

  if (!active || !eventData) return null;

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm h-full w-full z-[100]"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 items-center justify-center bg-white rounded-full h-10 w-10 hover:bg-neutral-100 transition-colors z-[110]"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5 text-black" />
            </motion.button>
            
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-5xl h-full md:h-fit md:max-h-[90vh] flex flex-col bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Header with Icon and Title */}
              <motion.div 
                layoutId={`header-${active.name}-${id}`}
                className="bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-indigo-700/20 border-b border-white/10 p-6 md:p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    layoutId={`icon-${active.name}-${id}`}
                    className="text-5xl md:text-6xl"
                  >
                    {eventData.icon}
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3
                      layoutId={`title-${active.name}-${id}`}
                      className="font-bold text-white text-2xl md:text-3xl mb-2"
                    >
                      {eventData.name}
                    </motion.h3>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 capitalize">
                      {eventData.category}
                    </span>
                  </div>
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onClick={() => {
                      setActive(null);
                      navigate('/register');
                    }}
                    className="hidden md:block px-6 py-3 text-sm rounded-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all transform hover:scale-105"
                  >
                    Register Now
                  </motion.button>
                </div>
              </motion.div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-auto p-6 md:p-8 space-y-6 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.3)_transparent]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {/* About Section */}
                  {eventData.about && (
                    <Section icon={Info} title="About">
                      <p className="text-neutral-300 leading-relaxed">
                        {typeof eventData.about === 'string' 
                          ? eventData.about 
                          : eventData.about.description || eventData.about}
                      </p>
                      {eventData.about.highlights && (
                        <ul className="grid md:grid-cols-2 gap-3 mt-4">
                          {eventData.about.highlights.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                              <span className="text-neutral-300">{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Section>
                  )}

                  {/* Event Structure */}
                  {eventData.structure && (
                    <Section icon={Target} title="Event Structure">
                      <div className="grid md:grid-cols-2 gap-4">
                        {eventData.structure.teamType && (
                          <InfoCard icon={Users} label="Team Type" value={eventData.structure.teamType} />
                        )}
                        {eventData.structure.duration && (
                          <InfoCard icon={Clock} label="Duration" value={eventData.structure.duration} />
                        )}
                        {eventData.structure.teamSize && (
                          <InfoCard icon={Users} label="Team Size" value={eventData.structure.teamSize} />
                        )}
                        {eventData.structure.rounds && (
                          <InfoCard icon={Target} label="Rounds" value={`${eventData.structure.rounds} Rounds`} />
                        )}
                      </div>
                      {eventData.structure.platform && (
                        <p className="text-neutral-300 mt-4">
                          <span className="font-semibold text-white">Platform:</span> {eventData.structure.platform}
                        </p>
                      )}
                    </Section>
                  )}

                  {/* Schedule */}
                  {eventData.schedule && eventData.schedule.length > 0 && (
                    <Section icon={Calendar} title="Schedule">
                      <div className="space-y-3">
                        {eventData.schedule.map((item, idx) => (
                          <div key={idx} className="flex gap-4 items-start bg-neutral-800/50 p-4 rounded-lg border border-white/5">
                            <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-semibold text-white">{item.time}</div>
                              <div className="text-neutral-300 text-sm">{item.activity}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Section>
                  )}

                  {/* Prizes */}
                  {eventData.prizes && (
                    <Section icon={Trophy} title="Prizes">
                      <div className="grid md:grid-cols-3 gap-4">
                        {eventData.prizes.first && (
                          <PrizeCard 
                            position="1st Place" 
                            amount={eventData.prizes.first.amount}
                            rewards={eventData.prizes.first.rewards}
                            gradient="from-yellow-500/20 to-yellow-600/20"
                            border="border-yellow-500/50"
                          />
                        )}
                        {eventData.prizes.second && (
                          <PrizeCard 
                            position="2nd Place" 
                            amount={eventData.prizes.second.amount}
                            rewards={eventData.prizes.second.rewards}
                            gradient="from-gray-300/20 to-gray-400/20"
                            border="border-gray-400/50"
                          />
                        )}
                        {eventData.prizes.third && (
                          <PrizeCard 
                            position="3rd Place" 
                            amount={eventData.prizes.third.amount}
                            rewards={eventData.prizes.third.rewards}
                            gradient="from-orange-500/20 to-orange-600/20"
                            border="border-orange-500/50"
                          />
                        )}
                      </div>
                      {eventData.prizes.special && eventData.prizes.special.length > 0 && (
                        <div className="mt-4">
                          <p className="text-white font-semibold mb-2">Special Awards:</p>
                          <div className="flex flex-wrap gap-2">
                            {eventData.prizes.special.map((award, idx) => (
                              <span key={idx} className="px-3 py-1 bg-purple-500/20 border border-purple-400/50 text-purple-300 rounded-full text-sm">
                                {award}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </Section>
                  )}

                  {/* Rules */}
                  {eventData.rules && eventData.rules.length > 0 && (
                    <Section icon={CheckCircle} title="Rules & Guidelines">
                      <ul className="space-y-2">
                        {eventData.rules.map((rule, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-cyan-400 font-bold flex-shrink-0 mt-0.5">{idx + 1}.</span>
                            <span className="text-neutral-300">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </Section>
                  )}

                  {/* FAQ */}
                  {eventData.faq && eventData.faq.length > 0 && (
                    <Section icon={HelpCircle} title="Frequently Asked Questions">
                      <div className="space-y-4">
                        {eventData.faq.map((item, idx) => (
                          <div key={idx} className="bg-neutral-800/50 p-4 rounded-lg border border-white/5">
                            <div className="font-semibold text-white mb-2 flex items-start gap-2">
                              <HelpCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                              {item.question}
                            </div>
                            <div className="text-neutral-300 text-sm pl-7">{item.answer}</div>
                          </div>
                        ))}
                      </div>
                    </Section>
                  )}

                  {/* Contact */}
                  {eventData.contact && (
                    <Section icon={MapPin} title="Contact & Venue">
                      <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 p-6 rounded-xl space-y-3">
                        {eventData.contact.name && (
                          <div className="flex items-center gap-3 text-white">
                            <Users className="w-5 h-5 text-cyan-400" />
                            <span className="font-semibold">{eventData.contact.name}</span>
                          </div>
                        )}
                        {eventData.contact.phone && (
                          <div className="flex items-center gap-3 text-neutral-300">
                            <Phone className="w-5 h-5 text-cyan-400" />
                            <span>{eventData.contact.phone}</span>
                          </div>
                        )}
                        {eventData.contact.email && (
                          <div className="flex items-center gap-3 text-neutral-300">
                            <Mail className="w-5 h-5 text-cyan-400" />
                            <span>{eventData.contact.email}</span>
                          </div>
                        )}
                        {eventData.contact.venue && (
                          <div className="flex items-center gap-3 text-neutral-300">
                            <MapPin className="w-5 h-5 text-cyan-400" />
                            <span>{eventData.contact.venue}</span>
                          </div>
                        )}
                      </div>
                    </Section>
                  )}
                </motion.div>
              </div>

              {/* Mobile Register Button */}
              <div className="md:hidden border-t border-white/10 p-4 bg-neutral-900/95 backdrop-blur-sm">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => {
                    setActive(null);
                    navigate('/register');
                  }}
                  className="w-full px-6 py-3 text-base rounded-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

// Helper Components
function Section({ icon: Icon, title, children }) {
  const IconComp = Icon;
  return (
    <div className="bg-neutral-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <IconComp className="w-6 h-6 text-cyan-400" />
        <h4 className="text-xl font-bold text-white">{title}</h4>
      </div>
      {children}
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }) {
  const IconComp = Icon;
  return (
    <div className="bg-neutral-800/50 p-4 rounded-lg border border-white/5">
      <div className="flex items-center gap-3">
        <IconComp className="w-5 h-5 text-cyan-400" />
        <div>
          <div className="text-xs text-neutral-400">{label}</div>
          <div className="text-white font-semibold">{value}</div>
        </div>
      </div>
    </div>
  );
}

function PrizeCard({ position, amount, rewards, gradient, border }) {
  return (
    <div className={`bg-gradient-to-br ${gradient} border ${border} p-4 rounded-xl`}>
      <div className="flex items-center gap-2 mb-2">
        <Trophy className="w-5 h-5 text-yellow-400" />
        <div className="font-bold text-white">{position}</div>
      </div>
      <div className="text-2xl font-bold text-white mb-2">{amount}</div>
      {rewards && rewards.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {rewards.map((reward, idx) => (
            <span key={idx} className="text-xs px-2 py-1 bg-white/10 rounded-full text-neutral-300">
              {reward}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
