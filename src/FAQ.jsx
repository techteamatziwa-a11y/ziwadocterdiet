import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      category: "Diet & Nutrition",
      question: "What type of diet plan does Ziwa Doctor Diet provide?",
      answer: "Ziwa Doctor Diet provides a diet plan. The plan is built around your health, your lifestyle what you eat every day and your own goals for weight management."
    },
    {
      category: "Medical Guidance",
      question: "Is Ziwa Doctor Diet a doctor guided weight loss program?",
      answer: "Yes. The program includes doctor consultations, personal diet advice, daily follow-up support and live wellness sessions to keep you on track."
    },
    {
      category: "Location & Access",
      question: "Can I get a weight loss diet plan in Kerala through Ziwa Doctor Diet?",
      answer: "Yes. Ziwa Doctor Diet is based in Kayamkulam, Kerala. We offer guided weight-management services with support and live sessions so location in Kerala is not a barrier."
    },
    {
      category: "Diet & Nutrition",
      question: "Is the diet plan personalized?",
      answer: "Yes. Every diet plan is custom-made. It considers your health condition, your habits, your eating patterns and your personal weight-loss targets. No two plans are the same."
    },
    {
      category: "Diet & Food Habits",
      question: "Do I have to stop eating rice?",
      answer: "No you do not have to stop eating rice. Your food plan will be designed according to your needs and your usual eating habits. Rice may still be included in a way."
    },
    {
      category: "Medical Guidance",
      question: "Who will guide me during the program?",
      answer: "You will receive guidance from doctors, dietitians and through interactive sessions as part of the program."
    },
    {
      category: "Location & Access",
      question: "Can I join the program from outside Kayamkulam?",
      answer: "Yes. You can join from anywhere. Please contact our team to find out how online consultations, diet guidance and live sessions can work for you no matter where you are."
    },
    {
      category: "Getting Started",
      question: "How can I join Ziwa Doctor Diet?",
      answer: "You can join by contacting our team via phone, email or through the Contact page. We will share details, about our programs and the different package options available."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f8fdf9] font-sans flex flex-col selection:bg-[#5ba63b] selection:text-white">
      
      {/* Top Navigation Bar */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-[#e4fceb] shadow-xs">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="ziwa-logo.png" 
              alt="Ziwa Doctor Diet Logo" 
              className="h-12 md:h-14 w-auto transition-transform group-hover:scale-105" 
            />
            <span className="text-xl md:text-2xl font-bold text-[#102b1c] tracking-tight hidden sm:inline-block">
              Ziwa Doctor Diet
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-gray-600">
            <Link to="/" className="hover:text-[#5ba63b] transition-colors">Home</Link>
            <a href="/#about" className="hover:text-[#5ba63b] transition-colors">About</a>
            <Link to="/select-package" className="hover:text-[#5ba63b] transition-colors">Packages</Link>
            <Link to="/blog" className="hover:text-[#5ba63b] transition-colors">Blog</Link>
            <Link to="/faq" className="text-[#5ba63b] font-bold border-b-2 border-[#5ba63b] pb-0.5">FAQ</Link>
            <Link to="/contact" className="hover:text-[#5ba63b] transition-colors">Contact</Link>
          </nav>

          {/* CTA Action Button */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/select-package"
              className="bg-[#5ba63b] hover:bg-[#4d8c32] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md shadow-[#5ba63b]/25 hover:shadow-lg"
            >
              Start Your Plan
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#102b1c] focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 pt-3 pb-6 bg-white border-b border-[#e4fceb] shadow-lg flex flex-col space-y-4 text-center">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium py-1 hover:text-[#5ba63b]">Home</Link>
            <Link to="/select-package" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium py-1 hover:text-[#5ba63b]">Packages</Link>
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium py-1 hover:text-[#5ba63b]">Blog</Link>
            <Link to="/faq" onClick={() => setMobileMenuOpen(false)} className="text-[#5ba63b] font-bold py-1">FAQ</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium py-1 hover:text-[#5ba63b]">Contact</Link>
            <Link 
              to="/select-package" 
              onClick={() => setMobileMenuOpen(false)} 
              className="bg-[#5ba63b] text-white py-2.5 rounded-full font-semibold text-sm"
            >
              Start Your Plan
            </Link>
          </div>
        )}
      </header>

      {/* Main Page Content */}
      <main className="flex-1 py-12 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1000px] mx-auto">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#5ba63b] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#102b1c] font-medium">Frequently Asked Questions</span>
          </nav>

          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-[#e4fceb] text-[#5ba63b] px-5 py-2 rounded-full font-bold text-sm mb-6 shadow-sm border border-[#d1f5de]">
              FAQ & Help Center
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#102b1c] mb-6 tracking-tight">
              Frequently Asked Questions <span className="text-[#5ba63b]">About Weight Loss</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about our doctor-guided weight management, personalized meal plans, and daily routine care.
            </p>

            {/* Quick Search Bar */}
            <div className="mt-8 max-w-lg mx-auto relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. rice, doctor, Kerala, diet)..."
                className="w-full pl-12 pr-10 py-3.5 rounded-full border border-[#d1f5de] bg-white focus:outline-none focus:ring-2 focus:ring-[#5ba63b] text-sm text-gray-800 shadow-xs"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
          
          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index} 
                    className="border border-[#e4fceb] bg-white rounded-2xl overflow-hidden shadow-xs transition-all duration-200 hover:border-[#b4f0c9]"
                  >
                    <button
                      className="w-full text-left px-6 py-5 bg-[#f8fdf9] hover:bg-[#eefcf2] transition-colors flex justify-between items-center cursor-pointer gap-4"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-1">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#e4fceb] text-[#2e7d32] w-fit">
                          {faq.category}
                        </span>
                        <span className="text-base sm:text-lg font-semibold text-[#102b1c] leading-snug">
                          {faq.question}
                        </span>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white border border-[#d1f5de] text-[#5ba63b] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 bg-[#5ba63b] text-white border-transparent' : ''}`}>
                        <svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 py-5 bg-white border-t border-[#e4fceb]">
                        <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 p-8">
                <p className="text-gray-500 text-base mb-4">No questions found matching "{searchQuery}".</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-[#5ba63b] font-semibold text-sm hover:underline"
                >
                  View all questions
                </button>
              </div>
            )}
          </div>

          {/* Still Have Questions CTA Card */}
          <div className="mt-16 bg-gradient-to-br from-[#102b1c] to-[#1b432d] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-[#a8c7b6] text-xs font-bold tracking-wider uppercase block mb-2">
                Still have questions?
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug">
                Speak With Our Medical Consultation Team
              </h3>
              <p className="text-[#a8c7b6] text-sm sm:text-base leading-relaxed">
                Our doctors and certified dietitians are ready to help you choose the best plan for your lifestyle and health requirements.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 flex-shrink-0">
              <Link 
                to="/select-package"
                className="bg-[#5ba63b] hover:bg-[#4d8c32] text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md shadow-[#5ba63b]/25 hover:shadow-lg whitespace-nowrap"
              >
                Explore Packages
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-white/80 hover:bg-white hover:text-[#102b1c] text-white px-7 py-3 rounded-full font-semibold text-sm transition-all whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default FAQ;
