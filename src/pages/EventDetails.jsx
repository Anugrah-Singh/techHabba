import React from "react";
import { useParams } from "react-router-dom";
import eventsData from "../data/events.json";

const EventDetails = () => {
  const { id } = useParams();
  const event = eventsData.events.find(e => String(e.id) === String(id));

  if (!event) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-2xl text-red-500">Event not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black px-4 pt-36 pb-12">
      {/* Acharya white logo in top left */}
      <img
        src="/Acharya white logo.png"
        alt="Acharya White Logo"
        style={{ position: 'absolute', top: 20, left: 20, width: 60, height: 'auto', zIndex: 50 }}
      />
      <h1 className="text-4xl font-bold text-neutral-100 mb-6 text-center">
        {event.emoji} {event.name}
      </h1>
      <div className="max-w-2xl mx-auto bg-[#1F2121] rounded-2xl p-8 text-neutral-200 shadow-lg">
        {event.eligibility && (
          <div className="mb-4">
            <span className="font-semibold">Eligibility:</span> {event.eligibility}
          </div>
        )}
        {event.teamSize && (
          <div className="mb-4">
            <span className="font-semibold">Team Size:</span> {event.teamSize}
          </div>
        )}
        {event.overview && (
          <div className="mb-4">
            <span className="font-semibold">Overview:</span> {event.overview}
          </div>
        )}
        {event.requirements && (
          <div className="mb-4">
            <span className="font-semibold">Requirements:</span>
            <ul className="list-disc ml-6">
              {event.requirements.map((req, i) => <li key={i}>{req}</li>)}
            </ul>
          </div>
        )}
        {event.guidelines && (
          <div className="mb-4">
            <span className="font-semibold">Guidelines:</span>
            <ul className="list-disc ml-6">
              {event.guidelines.map((g, i) => <li key={i}>{g}</li>)}
            </ul>
          </div>
        )}
        {event.format && (
          <div className="mb-4">
            <span className="font-semibold">Format:</span>
            <ul className="list-disc ml-6">
              {Array.isArray(event.format)
                ? event.format.map((f, i) => <li key={i}>{f}</li>)
                : <li>{event.format}</li>}
            </ul>
          </div>
        )}
        {event.deliverables && (
          <div className="mb-4">
            <span className="font-semibold">Deliverables:</span>
            <ul className="list-disc ml-6">
              {event.deliverables.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        )}
        {event.judgingCriteria && (
          <div className="mb-4">
            <span className="font-semibold">Judging Criteria:</span>
            <ul className="list-disc ml-6">
              {event.judgingCriteria.map((jc, i) =>
                typeof jc === "string"
                  ? <li key={i}>{jc}</li>
                  : <li key={i}>{jc.name} <span className="text-xs text-gray-400">({jc.weight})</span></li>
              )}
            </ul>
          </div>
        )}
        {event.tools && (
          <div className="mb-4">
            <span className="font-semibold">Tools:</span> {event.tools}
          </div>
        )}
        {event.quiz && (
          <div className="mb-4">
            <span className="font-semibold">Quiz:</span>
            <div className="ml-4">
              {event.quiz.teamSize && <div><span className="font-semibold">Team Size:</span> {event.quiz.teamSize}</div>}
              {event.quiz.format && <div><span className="font-semibold">Format:</span>
                <ul className="list-disc ml-6">{event.quiz.format.map((f, i) => <li key={i}>{f}</li>)}</ul></div>}
              {event.quiz.rules && <div><span className="font-semibold">Rules:</span>
                <ul className="list-disc ml-6">{event.quiz.rules.map((r, i) => <li key={i}>{r}</li>)}</ul></div>}
            </div>
          </div>
        )}
        {event.debate && (
          <div className="mb-4">
            <span className="font-semibold">Debate:</span>
            <div className="ml-4">
              {event.debate.format && <div><span className="font-semibold">Format:</span> {event.debate.format}</div>}
              {event.debate.structure && <div><span className="font-semibold">Structure:</span>
                <ul className="list-disc ml-6">{event.debate.structure.map((s, i) => <li key={i}>{s}</li>)}</ul></div>}
              {event.debate.judgingCriteria && <div><span className="font-semibold">Judging Criteria:</span>
                <ul className="list-disc ml-6">{event.debate.judgingCriteria.map((jc, i) => <li key={i}>{jc}</li>)}</ul></div>}
              {event.debate.rules && <div><span className="font-semibold">Rules:</span>
                <ul className="list-disc ml-6">{event.debate.rules.map((r, i) => <li key={i}>{r}</li>)}</ul></div>}
            </div>
          </div>
        )}
        {event.duration && (
          <div className="mb-4">
            <span className="font-semibold">Duration:</span> {event.duration}
          </div>
        )}
        {event.platform && (
          <div className="mb-4">
            <span className="font-semibold">Platform:</span> {event.platform}
          </div>
        )}
        {event.languagesPermitted && (
          <div className="mb-4">
            <span className="font-semibold">Languages Permitted:</span> {event.languagesPermitted.join(", ")}
          </div>
        )}
        {event.rules && (
          <div className="mb-4">
            <span className="font-semibold">Rules:</span>
            <ul className="list-disc ml-6">
              {event.rules.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
        )}
        {event.theme && (
          <div className="mb-4">
            <span className="font-semibold">Theme:</span> {event.theme}
          </div>
        )}
        {event.timeline && (
          <div className="mb-4">
            <span className="font-semibold">Timeline:</span> {event.timeline}
          </div>
        )}
        {event.prizePool && (
          <div className="mb-4">
            <span className="font-semibold">Prize Pool:</span> {event.prizePool}
          </div>
        )}
        {event.howItWorks && (
          <div className="mb-4">
            <span className="font-semibold">How It Works:</span>
            <ul className="list-disc ml-6">
              {event.howItWorks.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
        )}
        {event.developmentRules && (
          <div className="mb-4">
            <span className="font-semibold">Development Rules:</span>
            <ul className="list-disc ml-6">
              {event.developmentRules.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        )}
        {event.submissionRequirements && (
          <div className="mb-4">
            <span className="font-semibold">Submission Requirements:</span>
            <ul className="list-disc ml-6">
              {event.submissionRequirements.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        )}
        {event.codeOfConduct && (
          <div className="mb-4">
            <span className="font-semibold">Code of Conduct:</span>
            <ul className="list-disc ml-6">
              {event.codeOfConduct.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
