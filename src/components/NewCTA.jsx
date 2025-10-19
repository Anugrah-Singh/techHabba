import React from 'react';
import { useNavigate } from 'react-router-dom';

function NewCTA() {
  const navigate = useNavigate();
  
  return (
    <div className="py-20 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Ready to Join the Future?
      </h2>
      <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8">
        Don't miss out on the biggest tech event of the year. Register now to secure your spot and be a part of the innovation, learning, and networking at Tech Habba 2025.
      </p>
      <button
        onClick={() => navigate('/register')}
        className="w-60 transform rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700">
        Register Now
      </button>
    </div>
  );
}

export default NewCTA;