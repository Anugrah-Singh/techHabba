import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { BackgroundLines } from '../ui/background-lines';
import eventPageData from '../assets/event-page.json';
import { 
  Clock, 
  Users, 
  Trophy, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowLeft, 
  Calendar,
  Award,
  Info,
  CheckCircle,
  HelpCircle,
  Target
} from 'lucide-react';

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  
  // Find the event in the data - search across all categories
  const allEvents = [
    ...(eventPageData.events.technical || []),
    ...(eventPageData.events.gaming || []),
    ...(eventPageData.events.nonTechnical || [])
  ];
  
  const event = allEvents.find(e => 
    e.id === parseInt(eventId) || 
    e.id === eventId ||
    e.name.toLowerCase().replace(/\s+/g, '-') === eventId
  );

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <BackgroundLines className="fixed inset-0 z-0">
        <div className="absolute inset-0" />
      </BackgroundLines>

      <div className="relative z-10">
        {/* Header with Back Button */}
        <div className="border-b border-white/10 backdrop-blur-sm bg-black/50 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Events</span>
            </button>
            <Link
              to="/register"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all transform hover:scale-105"
            >
              Register Now
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-6xl">{event.icon}</span>
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 text-cyan-300 text-sm font-medium capitalize backdrop-blur-sm">
                {event.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              {event.name}
            </h1>
          </div>

          {/* About Section */}
          <section className="mb-16">
            <SectionHeader icon={Info} title="About" />
            <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              {typeof event.about === 'string' ? (
                <p className="text-neutral-300 leading-relaxed text-lg">{event.about}</p>
              ) : (
                <div className="space-y-6">
                  {event.about?.description && (
                    <p className="text-neutral-300 leading-relaxed text-lg">
                      {event.about.description}
                    </p>
                  )}
                  {Array.isArray(event.about?.highlights) && event.about.highlights.length > 0 && (
                    <ul className="grid md:grid-cols-2 gap-3">
                      {event.about.highlights.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          <span className="text-neutral-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* Structure Section */}
          {event.structure && (
            <section className="mb-16">
              <SectionHeader icon={Target} title="Event Structure" />
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(event.structure).map(([key, value]) => (
                  <div 
                    key={key}
                    className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="text-cyan-400 font-medium text-sm mb-1 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <p className="text-neutral-200">
                          {typeof value === 'object' ? JSON.stringify(value, null, 2) : value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Deliverables Section (for Prompt to Product) */}
          {event.deliverables && (
            <section className="mb-16">
              <SectionHeader icon={CheckCircle} title="Deliverables" />
              <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
                <ul className="space-y-4">
                  {event.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Evaluation Criteria (for Prompt to Product) */}
          {event.evaluation && (
            <section className="mb-16">
              <SectionHeader icon={Award} title="Evaluation Criteria" />
              <div className="grid md:grid-cols-2 gap-4">
                {event.evaluation.map((criterion, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-5"
                  >
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-purple-400" />
                      <span className="text-neutral-200">{criterion}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Scoring Section */}
          {event.scoring && (
            <section className="mb-16">
              <SectionHeader icon={Trophy} title="Scoring System" />
              <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
                {Object.entries(event.scoring).map(([key, value]) => (
                  <div key={key} className="mb-4 last:mb-0">
                    <h4 className="text-yellow-400 font-medium mb-2 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <p className="text-neutral-300">{value}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Rules Section */}
          {(event.rules || event.rulesAndGuidelines) && (
            <section className="mb-16">
              <SectionHeader icon={Info} title="Rules & Guidelines" />
              <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 md:p-8">
                <ul className="space-y-4">
                  {(event.rules || event.rulesAndGuidelines).map((rule, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-neutral-300">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Basic Rules (for Chess) */}
          {event.basicRules && (
            <section className="mb-16">
              <SectionHeader icon={CheckCircle} title="Basic Rules" />
              <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 md:p-8">
                <ul className="space-y-4">
                  {event.basicRules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-neutral-300">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Tournament Format (for Chess) */}
          {event.tournamentFormat && (
            <section className="mb-16">
              <SectionHeader icon={Target} title="Tournament Format" />
              <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
                <p className="text-neutral-300 leading-relaxed text-lg">{event.tournamentFormat}</p>
              </div>
            </section>
          )}

          {/* Time Control (for Chess) */}
          {event.timeControl && (
            <section className="mb-16">
              <SectionHeader icon={Clock} title="Time Control" />
              <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
                <p className="text-neutral-300 leading-relaxed text-lg">{event.timeControl}</p>
              </div>
            </section>
          )}

          {/* Pitch Deck Slides (for Ideathon) */}
          {event.pitchDeckSlides && (
            <section className="mb-16">
              <SectionHeader icon={Target} title="Pitch Deck Structure" />
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 md:p-8">
                <ul className="space-y-4">
                  {event.pitchDeckSlides.map((slide, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-neutral-300">{slide}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Schedule Section */}
          {(event.schedule || event.timeline) && (
            <section className="mb-16">
              <SectionHeader icon={Calendar} title="Schedule" />
              <div className="space-y-4">
                {(event.schedule || event.timeline).map((item, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-cyan-400/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h4 className="text-white font-semibold">
                              {item.time || item.round || item.match || item.stage || `Step ${index + 1}`}
                            </h4>
                            <p className="text-neutral-400 text-sm">
                              {item.activity || item.notes || item.format || ''}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Prizes Section */}
          {event.prizes && (
            <section className="mb-16">
              <SectionHeader icon={Trophy} title="Prizes & Recognition" />
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* First Place */}
                {event.prizes.first && (
                  <div className="bg-gradient-to-br from-yellow-600/30 to-amber-700/30 backdrop-blur-sm border border-yellow-500/40 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                    <div className="w-20 h-20 rounded-full bg-yellow-500/20 border-2 border-yellow-400 flex items-center justify-center mx-auto mb-4">
                      <Trophy className="w-10 h-10 text-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-400 mb-2">1st Place</h3>
                    {event.prizes.first.amount && (
                      <p className="text-3xl font-bold text-white mb-3">{event.prizes.first.amount}</p>
                    )}
                    {event.prizes.first.rewards && (
                      <ul className="text-neutral-300 text-sm space-y-1">
                        {event.prizes.first.rewards.map((reward, idx) => (
                          <li key={idx}>{reward}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {/* Second Place */}
                {event.prizes.second && (
                  <div className="bg-gradient-to-br from-gray-400/30 to-gray-600/30 backdrop-blur-sm border border-gray-400/40 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                    <div className="w-20 h-20 rounded-full bg-gray-400/20 border-2 border-gray-300 flex items-center justify-center mx-auto mb-4">
                      <Trophy className="w-10 h-10 text-gray-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-300 mb-2">2nd Place</h3>
                    {event.prizes.second.amount && (
                      <p className="text-3xl font-bold text-white mb-3">{event.prizes.second.amount}</p>
                    )}
                    {event.prizes.second.rewards && (
                      <ul className="text-neutral-300 text-sm space-y-1">
                        {event.prizes.second.rewards.map((reward, idx) => (
                          <li key={idx}>{reward}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {/* Third Place */}
                {event.prizes.third && (
                  <div className="bg-gradient-to-br from-orange-700/30 to-orange-900/30 backdrop-blur-sm border border-orange-600/40 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                    <div className="w-20 h-20 rounded-full bg-orange-600/20 border-2 border-orange-500 flex items-center justify-center mx-auto mb-4">
                      <Trophy className="w-10 h-10 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-orange-500 mb-2">3rd Place</h3>
                    {event.prizes.third.amount && (
                      <p className="text-3xl font-bold text-white mb-3">{event.prizes.third.amount}</p>
                    )}
                    {event.prizes.third.rewards && (
                      <ul className="text-neutral-300 text-sm space-y-1">
                        {event.prizes.third.rewards.map((reward, idx) => (
                          <li key={idx}>{reward}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>

              {/* Special Awards */}
              {event.prizes.special && event.prizes.special.length > 0 && (
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/40 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                    <Award className="w-6 h-6" />
                    Special Awards
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {event.prizes.special.map((award, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2"
                      >
                        <Award className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span className="text-neutral-200 text-sm">{award}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* FAQ Section */}
          {(event.faq || event.faqs) && (
            <section className="mb-16">
              <SectionHeader icon={HelpCircle} title="Frequently Asked Questions" />
              <div className="space-y-4">
                {(event.faq || event.faqs).map((item, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors"
                  >
                    <h4 className="text-white font-semibold mb-2 flex items-start gap-2">
                      <HelpCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      {item.question}
                    </h4>
                    <p className="text-neutral-300 ml-7">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Contact Section */}
          {(event.contact || event.coordinator || event.coordinators) && (
            <section className="mb-16">
              <SectionHeader icon={Phone} title="Contact Information" />
              
              {/* Multiple Coordinators */}
              {event.coordinators && event.coordinators.length > 0 && (
                <div className="grid md:grid-cols-2 gap-4">
                  {event.coordinators.map((coord, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/40 rounded-2xl p-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-blue-400" />
                          <div>
                            <p className="text-sm text-neutral-400">Coordinator</p>
                            <p className="text-white font-medium">{coord.name}</p>
                          </div>
                        </div>
                        {coord.phone && (
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-blue-400" />
                            <div>
                              <p className="text-sm text-neutral-400">Phone</p>
                              <a href={`tel:${coord.phone}`} className="text-white font-medium hover:text-blue-400 transition-colors">
                                {coord.phone}
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Single Coordinator */}
              {event.coordinator && !event.coordinators && (
                <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/40 rounded-2xl p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="text-sm text-neutral-400">Coordinator</p>
                        <p className="text-white font-medium">{event.coordinator.name}</p>
                      </div>
                    </div>
                    {event.coordinator.phone && (
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="text-sm text-neutral-400">Phone</p>
                          <a href={`tel:${event.coordinator.phone}`} className="text-white font-medium hover:text-blue-400 transition-colors">
                            {event.coordinator.phone}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Legacy Contact Format */}
              {event.contact && !event.coordinator && !event.coordinators && (
                <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/40 rounded-2xl p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {event.contact.name && event.contact.name !== "[PLACEHOLDER]" && (
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="text-sm text-neutral-400">Coordinator</p>
                          <p className="text-white font-medium">{event.contact.name}</p>
                        </div>
                      </div>
                    )}
                    {event.contact.phone && event.contact.phone !== "[PLACEHOLDER]" && (
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="text-sm text-neutral-400">Phone</p>
                          <a href={`tel:${event.contact.phone}`} className="text-white font-medium hover:text-blue-400 transition-colors">
                            {event.contact.phone}
                          </a>
                        </div>
                      </div>
                    )}
                    {event.contact.email && event.contact.email !== "[PLACEHOLDER]" && (
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="text-sm text-neutral-400">Email</p>
                          <a href={`mailto:${event.contact.email}`} className="text-white font-medium hover:text-blue-400 transition-colors">
                            {event.contact.email}
                          </a>
                        </div>
                      </div>
                    )}
                    {event.contact.venue && event.contact.venue !== "[PLACEHOLDER]" && (
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="text-sm text-neutral-400">Venue</p>
                          <p className="text-white font-medium">{event.contact.venue}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Register CTA */}
          <div className="text-center py-12">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50"
            >
              <Trophy className="w-6 h-6" />
              Register for {event.name}
            </Link>
            <p className="text-neutral-400 mt-4 text-sm">
              Don't miss out on this exciting opportunity!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for section headers
const SectionHeader = ({ icon, title }) => {
  const IconComponent = icon;
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 flex items-center justify-center">
        <IconComponent className="w-6 h-6 text-cyan-400" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
    </div>
  );
};

export default EventDetail;
