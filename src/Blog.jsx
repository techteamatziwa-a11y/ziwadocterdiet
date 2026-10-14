import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Blog = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <Link to="/blog" className="text-[#5ba63b] font-bold border-b-2 border-[#5ba63b] pb-0.5">Blog</Link>
            <Link to="/faq" className="hover:text-[#5ba63b] transition-colors">FAQ</Link>
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
            <Link to="/blog" className="hover:text-[#5ba63b] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#102b1c] font-medium truncate max-w-[200px] sm:max-w-none">
              Weight Loss Diet Plan in Kerala
            </span>
          </nav>

          {/* Featured Article Card */}
          <article className="bg-white rounded-[28px] sm:rounded-[36px] md:rounded-[44px] p-8 sm:p-12 md:p-16 shadow-xl shadow-[#5ba63b]/5 border border-[#e4fceb] relative overflow-hidden">
            
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#e4fceb]/60 to-transparent rounded-bl-full pointer-events-none -z-0"></div>

            {/* Article Header & Badges */}
            <div className="relative z-10 mb-10 pb-8 border-b border-gray-100">
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <span className="bg-[#e4fceb] text-[#2e7d32] text-xs font-semibold px-3.5 py-1.5 rounded-full border border-[#c8f2d5]">
                  Diet & Nutrition
                </span>
                <span className="bg-[#f0f9ff] text-[#0284c7] text-xs font-semibold px-3.5 py-1.5 rounded-full border border-[#bae6fd]">
                  Doctor Guided
                </span>
                <span className="bg-[#fef9c3] text-[#854d0e] text-xs font-semibold px-3.5 py-1.5 rounded-full border border-[#fef08a]">
                  Kerala
                </span>
                <span className="text-gray-400 text-xs flex items-center gap-1.5 font-medium ml-auto">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
                    <polyline points="12 6 12 12 16 14" strokeWidth="2"></polyline>
                  </svg>
                  3 min read
                </span>
              </div>

              {/* Main Blog Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#102b1c] leading-[1.2] mb-6 tracking-tight">
                Weight Loss Diet Plan in Kerala — A Doctor Guided Approach
              </h1>

              {/* Author & Review Attribution */}
              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 rounded-full bg-[#e4fceb] border-2 border-[#5ba63b] flex items-center justify-center text-[#102b1c] text-xl shadow-xs">
                  🩺
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm md:text-base font-bold text-[#102b1c]">Ziwa Medical Team</p>
                    <span className="bg-[#e4fceb] text-[#2e7d32] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      ✓ Medically Reviewed
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">
                    Ayurvedic Physicians & Certified Nutritionists • Kayamkulam, Kerala
                  </p>
                </div>
              </div>
            </div>

            {/* Article Body Content */}
            <div className="relative z-10 space-y-7 text-[#333] text-[16px] md:text-[18px] leading-[1.8] font-normal">
              
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
                Finding a weight loss diet plan in Kerala that fits your daily routine, food preferences and health goals can be challenging. Ziwa Doctor Diet offers a doctor guided approach to healthy weight management, with practical dietary guidance designed to fit everyday life.
              </p>

              <p className="text-gray-600">
                Our personalized weight loss diet plan in Kerala focuses on building sustainable eating habits instead of relying on extreme diets. The plan is tailored to individual needs, with professional guidance to help you stay consistent throughout your journey.
              </p>

              {/* Visual 3-Pillar Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-4 my-8">
                <div className="bg-[#f8fdf9] border border-[#d1f5de] rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 mx-auto mb-3.5 rounded-full bg-[#e4fceb] flex items-center justify-center text-2xl">
                    🥗
                  </div>
                  <h4 className="font-bold text-[#102b1c] text-base mb-1.5">Tailored Kerala Diets</h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    Personalized to Kerala food habits without starving or cutting out traditional staples.
                  </p>
                </div>

                <div className="bg-[#f8fdf9] border border-[#d1f5de] rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 mx-auto mb-3.5 rounded-full bg-[#e4fceb] flex items-center justify-center text-2xl">
                    👨‍⚕️
                  </div>
                  <h4 className="font-bold text-[#102b1c] text-base mb-1.5">Doctor Guidance</h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    Direct consultations with Ayurvedic physicians to ensure safe and medically sound weight loss.
                  </p>
                </div>

                <div className="bg-[#f8fdf9] border border-[#d1f5de] rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 mx-auto mb-3.5 rounded-full bg-[#e4fceb] flex items-center justify-center text-2xl">
                    🏃‍♂️
                  </div>
                  <h4 className="font-bold text-[#102b1c] text-base mb-1.5">Live Fitness & Support</h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    Daily follow-ups plus live workout, yoga, and zumba sessions to keep you motivated.
                  </p>
                </div>
              </div>

              <p className="text-gray-600">
                Through our doctor guided weight loss program in Kerala you can receive professional consultation personalized diet guidance, regular follow ups and live fitness sessions, depending on your chosen package. Our aim is to help you make healthier lifestyle choices with ongoing support.
              </p>

              <p className="text-gray-600">
                You do not have to approach weight loss alone. Take the first step towards better health with guidance from Ziwa Doctor Diet.
              </p>

              {/* Core Philosophy Banner */}
              <div className="my-10 bg-gradient-to-r from-[#102b1c] to-[#1b432d] text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
                <div className="absolute right-0 bottom-0 opacity-10 translate-x-4 translate-y-4 pointer-events-none">
                  <svg width="220" height="220" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <span className="text-[#a8c7b6] text-xs font-bold tracking-widest uppercase block mb-3">
                  Our Core Philosophy
                </span>
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-white">
                  “Health is the aim; Weight loss is the bonus.”
                </p>
              </div>

              {/* Call to Action Box */}
              <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-[#102b1c] font-bold text-xl mb-1 text-center md:text-left">
                    Ready to start your health journey?
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                    Explore our packages or contact our team to learn more about the program.
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-4 w-full md:w-auto">
                  <Link
                    to="/select-package"
                    className="bg-[#5ba63b] hover:bg-[#4d8c32] text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md shadow-[#5ba63b]/25 hover:shadow-lg whitespace-nowrap cursor-pointer flex items-center gap-2 group"
                  >
                    <span>Explore Packages</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>

                  <Link
                    to="/contact"
                    className="border-2 border-[#102b1c] text-[#102b1c] hover:bg-[#102b1c] hover:text-white px-7 py-3 rounded-full font-semibold text-sm transition-all whitespace-nowrap text-center"
                  >
                    Contact Our Team
                  </Link>
                </div>
              </div>

            </div>
          </article>

        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Blog;
