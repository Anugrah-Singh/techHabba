import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundLines } from '../ui/background-lines';
import priceData from '../assets/price.json';
import toast, { Toaster } from 'react-hot-toast';

const departments = [
  'Computer Science & Engineering',
  'Artificial Intelligence & Machine Learning',
  'Electronics & Communication Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Information Science & Engineering',
  'Electrical Engineering',
  'Other'
];

const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Other'];

const technicalEvents = [
  'Technical Workshop',
  'Competitive Programming',
  'Capture The Flag (CTF)',
  'Ideathon',
  'Prompt to Product',
  'CAED – Computer-Aided Engineering Drawing',
  'Circuit Mania',
  'Bridge Building'
];

const gamingEvents = [
  'FIFA (EA FC 24 or Latest Version)',
  'PUBG MOBILE (Battle Royale)',
  'VALORANT'
];

const nonTechnicalEvents = [
  'TREASURE HUNT',
  'Chess Tournament'
];

function Register() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    collegeName: '',
    cityState: '',
    department: '',
    year: '',
    studentId: '',
    selectedEvents: [],
    paymentId: '',
    declaration1: false,
    declaration2: false,
    declaration3: false,
    declaration4: false
  });


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [redirectCountdown, setRedirectCountdown] = useState(5);

  // Calculate total price based on selected events
  const totalPrice = useMemo(() => {
    return formData.selectedEvents.reduce((total, event) => {
      // Check which category the event belongs to
      if (priceData.technicalEvents[event]) {
        return total + priceData.technicalEvents[event];
      } else if (priceData.gamingEvents[event]) {
        return total + priceData.gamingEvents[event];
      } else if (priceData.nonTechnicalEvents[event]) {
        return total + priceData.nonTechnicalEvents[event];
      }
      return total;
    }, 0);
  }, [formData.selectedEvents]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'selectedEvents') {
      const updatedEvents = checked
        ? [...formData.selectedEvents, value]
        : formData.selectedEvents.filter(event => event !== value);
      
      setFormData(prev => ({
        ...prev,
        selectedEvents: updatedEvents
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Handle auto-redirect countdown when success dialog is shown
  useEffect(() => {
    if (submitSuccess) {
      const timer = setInterval(() => {
        setRedirectCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            navigate('/');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [submitSuccess, navigate]);

  useEffect(() => {
    console.log('🔍 Setting up Pageclip with callbacks...');
    
    // Find the form element
    const form = document.querySelector('.pageclip-form');
    console.log('📝 Form found:', form ? 'YES' : 'NO');
    
    if (!form) {
      console.warn('⚠️ No form with class "pageclip-form" found!');
      return;
    }

    // Initialize Pageclip with callbacks
    if (window.Pageclip) {
      window.Pageclip.form(form, {
        onSubmit: function (event) {
          console.log('🚀 Pageclip submit started', event);
          setIsSubmitting(true);
          setSubmitError(null);
          // Return true to allow submission
          return true;
        },
        onResponse: function (error, response) {
          console.log('📥 Pageclip response received', { error, response });
          setIsSubmitting(false);
          
          if (error) {
            console.error('❌ Pageclip error:', error);
            setSubmitError('Failed to submit registration. Please try again.');
            // Return false to prevent default success message
            return false;
          } else {
            console.log('✅ Pageclip success:', response);
            setSubmitSuccess(true);
            setRedirectCountdown(5); // Reset countdown when success is shown
            // Return false to prevent default success template
            return false;
          }
        },
        successTemplate: '<span></span>' // Empty template since we're handling it ourselves
      });
      console.log('✅ Pageclip initialized with callbacks');
    } else {
      console.warn('⚠️ Pageclip library not loaded');
    }
  }, []);

  const handleSubmit = async (e) => {
    console.log('📤 handleSubmit called', e);
    console.log('🔍 Current formData:', formData);
    
    // Validate events are selected
    if (formData.selectedEvents.length === 0) {
      e.preventDefault();
      console.log('❌ Validation failed: No events selected');
      toast.error('Please select at least one event to register!', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#ef4444',
          color: '#fff',
          fontWeight: 'bold',
        },
      });
      return;
    }
    
    // Validate all declarations are checked
    if (!formData.declaration1 || !formData.declaration2 || 
        !formData.declaration3 || !formData.declaration4) {
      e.preventDefault();
      console.log('❌ Validation failed: Declarations not accepted');
      alert('Please accept all declarations to continue.');
      return;
    }

    // Validate payment ID if events are selected
    if (formData.selectedEvents.length > 0 && !formData.paymentId) {
      e.preventDefault();
      console.log('❌ Validation failed: Payment ID missing');
      alert('Please enter your payment/transaction ID to complete registration.');
      return;
    }

    console.log('✅ Validation passed - letting Pageclip handle the submission');
    // DON'T prevent default - let the form submit naturally so Pageclip can intercept it
    // Pageclip's event listeners will handle the AJAX submission automatically
  };

  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden">
      <Toaster />
      <BackgroundLines className="absolute inset-0" />
      <div className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <button
              onClick={() => navigate('/')}
              className="mb-6 text-gray-400 hover:text-white transition-colors">
              ← Back to Home
            </button>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tech Habba 2025 Registration
            </h1>
            <p className="text-lg text-gray-300">
              Fill in your details to register for the biggest tech event of the year
            </p>
            
            {/* Hackathon Registration Note */}
            <div className="mt-6 mx-auto max-w-2xl bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-purple-900/40 border-2 border-purple-500/50 rounded-xl p-6 shadow-lg shadow-purple-500/20">
              <div className="flex items-center justify-center mb-3">
                <span className="text-3xl mr-3">💻</span>
                <h3 className="text-xl font-bold text-white">Looking for Hackathon Registration?</h3>
              </div>
              <p className="text-gray-300 mb-4">
                To register for our 24-hour Hackathon, please visit the dedicated registration portal
              </p>
              <a
                href="https://the-big-hack.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50">
                Click Here for Hackathon Registration
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            {/* TESTING ONLY - Uncomment to test success dialog */}
            {/* <button
              onClick={() => setSubmitSuccess(true)}
              className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
              Test Success Dialog
            </button> */}
          </div>

          {/* Custom Loading State */}
          {isSubmitting && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
              <div className="bg-neutral-900 border-2 border-blue-500 rounded-2xl p-8 max-w-md mx-4 text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto mb-4"></div>
                <h3 className="text-2xl font-bold text-white mb-2">Submitting Registration...</h3>
                <p className="text-gray-400">Please wait while we process your registration</p>
              </div>
            </div>
          )}

          {/* Custom Success State */}
          {submitSuccess && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-gradient-to-br from-neutral-900/90 via-neutral-800/90 to-neutral-900/90 backdrop-blur-xl border-2 border-green-500/50 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl shadow-green-500/20">
                <div className="text-green-500 mb-6">
                  <svg className="w-20 h-20 mx-auto drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  Registration Successful! 🎉
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Thank you for registering for Tech Habba 2025!
                </p>
                <div className="bg-black/40 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-5 text-left text-sm text-gray-300 space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Events Selected:</span>
                    <span className="font-semibold text-white">{formData.selectedEvents.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Total Amount:</span>
                    <span className="font-semibold text-green-400">₹{totalPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Payment ID:</span>
                    <span className="font-semibold text-white text-xs break-all">{formData.paymentId}</span>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <p className="text-gray-400 text-sm">
                    Redirecting to homepage in <span className="text-white font-bold">{redirectCountdown}</span> seconds...
                  </p>
                </div>
                <button
                  onClick={() => navigate('/')}
                  className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg shadow-green-500/30 hover:shadow-green-500/50">
                  OK - Go to Homepage Now
                </button>
              </div>
            </div>
          )}

          {/* Custom Error State */}
          {submitError && (
            <div className="bg-red-900/20 border-2 border-red-500 rounded-xl p-4 mb-8">
              <p className="text-red-400 text-center">{submitError}</p>
            </div>
          )}

          {/* Registration Form */}
          <form
            action="https://send.pageclip.co/MMxJt1kw10ZnoxIyrGuHyYvR0TzZjZ2l/Registrations"
            method="post"
            className="pageclip-form bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 space-y-8"
            onSubmit={handleSubmit}>
            
            {/* Section 1: Basic Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white border-b border-neutral-700 pb-3">
                Basic Details
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="10-digit number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    College Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your college name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    City & State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="cityState"
                    value={formData.cityState}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Bangalore, Karnataka"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Department / Branch <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer hover:border-neutral-600 transition-colors"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}>
                    <option value="" className="bg-neutral-900">Select Department</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept} className="bg-neutral-900">{dept}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Year of Study <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer hover:border-neutral-600 transition-colors"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}>
                    <option value="" className="bg-neutral-900">Select Year</option>
                    {years.map(year => (
                      <option key={year} value={year} className="bg-neutral-900">{year}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Student ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your student ID"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Event Selection */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white border-b border-neutral-700 pb-3">
                Event Selection
              </h2>
              <p className="text-sm text-gray-400">Select all events you want to participate in</p>

              <div className="space-y-6">
                {/* Technical Events */}
                <div>
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                    Technical Events
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {technicalEvents.map(event => {
                      const isPaused = event === 'Technical Workshop';
                      return (
                        <label 
                          key={event} 
                          className={`flex items-center space-x-3 ${isPaused ? 'text-gray-500 cursor-not-allowed' : 'text-gray-300 hover:text-white cursor-pointer'}`}>
                          <input
                            type="checkbox"
                            name="selectedEvents"
                            value={event}
                            checked={formData.selectedEvents.includes(event)}
                            onChange={handleInputChange}
                            disabled={isPaused}
                            className="w-5 h-5 rounded border-neutral-600 bg-neutral-800 text-blue-600 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                          <span className="flex items-center gap-2">
                            {event}
                            {isPaused && (
                              <span className="text-xs px-2 py-1 bg-red-900/30 border border-red-500/50 rounded text-red-400 font-semibold">
                                Registration Paused
                              </span>
                            )}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Gaming Events */}
                <div>
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-fuchsia-300 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(232,121,249,0.3)]">
                    Gaming Events
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {gamingEvents.map(event => (
                      <label key={event} className="flex items-center space-x-3 text-gray-300 hover:text-white cursor-pointer">
                        <input
                          type="checkbox"
                          name="selectedEvents"
                          value={event}
                          checked={formData.selectedEvents.includes(event)}
                          onChange={handleInputChange}
                          className="w-5 h-5 rounded border-neutral-600 bg-neutral-800 text-purple-600 focus:ring-2 focus:ring-purple-500"
                        />
                        <span>{event}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Non-Technical Events */}
                <div>
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-emerald-300 via-teal-400 to-green-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                    Non-Technical Events
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {nonTechnicalEvents.map(event => (
                      <label key={event} className="flex items-center space-x-3 text-gray-300 hover:text-white cursor-pointer">
                        <input
                          type="checkbox"
                          name="selectedEvents"
                          value={event}
                          checked={formData.selectedEvents.includes(event)}
                          onChange={handleInputChange}
                          className="w-5 h-5 rounded border-neutral-600 bg-neutral-800 text-green-600 focus:ring-2 focus:ring-green-500"
                        />
                        <span>{event}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Important Note for Team Events */}
            <div className="space-y-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-2 border-blue-500/50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white border-b border-blue-500/50 pb-3">
                📋 Important Note for Team Events
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-400 text-2xl mt-1">👥</span>
                  <div>
                    <p className="text-lg font-semibold text-white mb-2">
                      Registering for Team Events?
                    </p>
                    <p className="text-gray-300">
                      If you've selected team-based events (Ideathon, BGMI, Valorant, Treasure Hunt, Bridge Building, etc.), 
                      please note that <span className="text-yellow-400 font-semibold">only the Team Leader should register</span>.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 text-2xl mt-1">📞</span>
                  <div>
                    <p className="text-lg font-semibold text-white mb-2">
                      Team Details Collection
                    </p>
                    <p className="text-gray-300">
                      You <span className="font-semibold">do not need to provide team member details</span> right now. 
                      Our team will <span className="text-green-400 font-semibold">contact you personally after registration</span> to 
                      collect complete team information.
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-blue-900/40 border border-blue-500/50 rounded-lg">
                  <p className="text-sm text-blue-200 text-center">
                    💡 <strong>Tip:</strong> Make sure your WhatsApp number and email are correct so we can reach you easily!
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Price Calculator */}
            {formData.selectedEvents.length > 0 && (
              <div className="space-y-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-2 border-blue-500/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white border-b border-blue-500/50 pb-3">
                  Registration Fee Summary
                </h2>
                
                <div className="space-y-3">
                  {formData.selectedEvents.map(event => {
                    let price = 0;
                    let category = '';
                    
                    if (priceData.technicalEvents[event]) {
                      price = priceData.technicalEvents[event];
                      category = 'Technical';
                    } else if (priceData.gamingEvents[event]) {
                      price = priceData.gamingEvents[event];
                      category = 'Gaming';
                    } else if (priceData.nonTechnicalEvents[event]) {
                      price = priceData.nonTechnicalEvents[event];
                      category = 'Non-Technical';
                    }
                    
                    return (
                      <div key={event} className="flex justify-between items-center text-gray-300 py-2 border-b border-neutral-700/50">
                        <div className="flex flex-col">
                          <span className="font-medium">{event}</span>
                          <span className="text-xs text-gray-500">{category}</span>
                        </div>
                        <span className="text-blue-400 font-semibold">₹{price}</span>
                      </div>
                    );
                  })}
                  
                  <div className="flex justify-between items-center pt-4 mt-4 border-t-2 border-blue-500/50">
                    <span className="text-xl font-bold text-white">Total Amount</span>
                    <span className="text-3xl font-bold text-green-400">₹{totalPrice}</span>
                  </div>
                </div>
                
              </div>
            )}

            {/* Section 5: Payment Information */}
            {formData.selectedEvents.length > 0 && totalPrice > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white border-b border-neutral-700 pb-3">
                  Payment Information
                </h2>
                <p className="text-sm text-gray-400">
                  Scan the QR code below to make payment and enter the transaction/payment ID
                </p>

                {/* QR Code Display */}
                <div className="flex flex-col items-center justify-center bg-neutral-800/50 rounded-xl p-8 border border-neutral-700">
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <img 
                      src="/qrcode.jpg" 
                      alt="Payment QR Code" 
                      className="w-64 h-64 object-contain"
                    />
                  </div>
                  <p className="text-gray-300 text-center mb-2">
                    <strong>Scan to Pay: ₹{totalPrice}</strong>
                  </p>
                  <p className="text-sm text-gray-500 text-center">
                    Use any qr-code scan app to scan and complete the payment
                  </p>
                  
                  {/* Prominent Payment Link */}
                  <div className="mt-6 mb-4 p-4 bg-blue-900/30 border-2 border-blue-500 rounded-lg">
                    <p className="text-lg text-center text-white font-semibold mb-2">
                      💳 Prefer Online Payment?
                    </p>
                    <a 
                      href="https://www.acharyaerptech.in/ExternalPayment/243"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-center rounded-lg transition-all transform hover:scale-105 shadow-lg">
                      Click Here to Pay Online →
                    </a>
                  </div>

                  <div className="mt-4 p-4 bg-orange-900/30 border-2 border-orange-500 rounded-lg">
                    <p className="text-sm text-orange-200 text-center">
                      ⚠️ <strong>IMPORTANT:</strong> When making the payment, enter the exact amount of <strong>₹{totalPrice}</strong> as shown above. The payment amount must match the total registration fee.
                    </p>
                  </div>
                </div>

                {/* Payment ID Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Payment/Transaction ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="paymentId"
                    value={formData.paymentId}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your payment/transaction ID"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    ⚠️ Please enter the transaction ID you got after completing the payment
                  </p>
                </div>
              </div>
            )}

            {/* Section 6: Declaration & Consent */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white border-b border-neutral-700 pb-3">
                Declaration & Consent
              </h2>
              <p className="text-sm text-gray-400">Please read and accept all declarations</p>

              <div className="space-y-4">
                <label className="flex items-start space-x-3 text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    name="declaration1"
                    checked={formData.declaration1}
                    onChange={handleInputChange}
                    required
                    className="w-5 h-5 mt-1 rounded border-neutral-600 bg-neutral-800 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <span>I confirm that all the information provided is true to the best of my knowledge. <span className="text-red-500">*</span></span>
                </label>

                <label className="flex items-start space-x-3 text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    name="declaration2"
                    checked={formData.declaration2}
                    onChange={handleInputChange}
                    required
                    className="w-5 h-5 mt-1 rounded border-neutral-600 bg-neutral-800 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <span>I agree to follow all rules, regulations, and the code of conduct of Tech Habba. <span className="text-red-500">*</span></span>
                </label>

                <label className="flex items-start space-x-3 text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    name="declaration3"
                    checked={formData.declaration3}
                    onChange={handleInputChange}
                    required
                    className="w-5 h-5 mt-1 rounded border-neutral-600 bg-neutral-800 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <span>I consent to the use of photos/videos taken during the event for promotional purposes. <span className="text-red-500">*</span></span>
                </label>

                <label className="flex items-start space-x-3 text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    name="declaration4"
                    checked={formData.declaration4}
                    onChange={handleInputChange}
                    required
                    className="w-5 h-5 mt-1 rounded border-neutral-600 bg-neutral-800 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <span>I understand that organizers are not responsible for the loss of personal belongings. <span className="text-red-500">*</span></span>
                </label>
              </div>
            </div>

            {/* Hidden fields for Pageclip to capture calculated values */}
            <input type="hidden" name="selectedEvents" value={formData.selectedEvents.join(', ')} />
            <input type="hidden" name="numberOfEvents" value={formData.selectedEvents.length} />
            <input type="hidden" name="totalAmount" value={totalPrice} />
            <input type="hidden" name="timestamp" value={new Date().toISOString()} />

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="w-full sm:w-auto px-8 py-3 bg-red-900/30 border border-red-700/50 rounded-lg text-red-400 font-medium hover:bg-red-800/40 hover:border-red-600 hover:text-red-300 transition-all">
                Cancel
              </button>
              <button
                type="submit"
                onClick={(e) => console.log('🖱️ Submit button clicked!', e)}
                className="pageclip-form__submit w-full sm:flex-1 inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 disabled:opacity-50 disabled:cursor-not-allowed animate-[shimmer_2s_linear_infinite]"
                disabled={isSubmitting || formData.selectedEvents.length === 0}>
                <span className="text-white font-semibold">{isSubmitting ? 'Submitting...' : 'Submit Registration'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
