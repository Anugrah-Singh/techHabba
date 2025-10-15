import React from "react";

const events = [
    { name: "Hackathon (Team of 4)", fee: 600 },
    { name: "Prompt to Product", fee: 300 },
    { name: "CTF", fee: 300 },
    { name: "Treasure Hunt", fee: 200 },
    { name: "Workshop", fee: 500 },
    { name: "Chess", fee: 100 },
    { name: "Quiz", fee: 100 },
    { name: "Debate", fee: 100 },
    { name: "C P", fee: 100 },
    { name: "BGMI", fee: 200 },
];

export default function Registration() {
    const handleRegisterClick = () => {
        window.location.href = "https://www.acharyaerptech.in/ExternalPayment/243";
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-sans mt-8">
            <h1 className="text-4xl  mb-8 tracking-wider font-bold">Event Registration</h1>
            <div className="w-full max-w-lg bg-gray-900 rounded-2xl shadow-lg p-8">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b-2 border-gray-700">
                            <th className="text-left py-2 text-lg font-semibold">Event</th>
                            <th className="text-right py-2 text-lg font-semibold">Registration Fee (₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event) => (
                            <tr key={event.name} className="border-b border-gray-800">
                                <td className="py-3 font-medium">{event.name}</td>
                                <td className="py-3 text-right font-bold text-green-400">{event.fee}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-8 text-center">
                    <button
                        className="bg-green-400 text-gray-900 border-none rounded-lg px-8 py-3 text-lg font-bold cursor-pointer shadow-md hover:bg-green-300 transition"
                        onClick={handleRegisterClick}
                    >
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    );
}
