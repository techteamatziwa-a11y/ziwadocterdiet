import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let rAF;
    
    // Parallax update loop
    const updateParallax = () => {
      if (!containerRef.current) {
        rAF = window.requestAnimationFrame(updateParallax);
        return;
      }
      
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return; // Disable parallax for accessibility
      }
      
      const rect = containerRef.current.getBoundingClientRect();
      const elements = containerRef.current.querySelectorAll('[data-speed]');
      
      elements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-speed')) || 0;
        
        // rect.top goes negative as we scroll down
        // yOffset pushes the element in the opposite direction or same direction depending on speed
        const yOffset = -rect.top * speed;
        
        el.style.transform = `translateY(${yOffset}px)`;
      });
      
      rAF = window.requestAnimationFrame(updateParallax);
    };
    
    rAF = window.requestAnimationFrame(updateParallax);
    
    return () => {
      if (rAF) window.cancelAnimationFrame(rAF);
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen font-sans bg-[#f8fdf9] overflow-hidden relative flex flex-col z-0">

      {/* --- PARALLAX BACKGROUND LAYERS --- */}
      {/* Back Layer (moves slowest, furthest away) */}
      <div 
        data-speed="0.1" 
        className="absolute top-[-10%] right-[-10%] w-[60vw] max-w-[800px] aspect-square rounded-full bg-gradient-to-br from-[#e4fceb]/80 to-[#d1f5de]/30 blur-3xl -z-20 will-change-transform"
      ></div>
      <div 
        data-speed="0.15" 
        className="absolute bottom-[-20%] left-[-10%] w-[50vw] max-w-[600px] aspect-square rounded-full bg-gradient-to-tr from-[#e4fceb]/60 to-transparent blur-3xl -z-20 will-change-transform"
      ></div>

      {/* Middle Layer (abstract decorative shapes) */}
      <div 
        data-speed="0.3" 
        className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full border-[6px] border-[#5ba63b]/10 -z-10 will-change-transform"
      ></div>
      <div 
        data-speed="0.4" 
        className="absolute bottom-[30%] right-[15%] w-24 h-24 rounded-full bg-[#5ba63b]/5 -z-10 will-change-transform"
      ></div>
      <div 
        data-speed="0.5" 
        className="absolute top-[60%] left-[45%] w-12 h-12 rounded-full bg-[#5ba63b]/10 -z-10 will-change-transform"
      ></div>

      {/* Navbar */}
      <nav className="w-full px-8 md:px-12 lg:px-16 py-8 grid grid-cols-3 items-center relative z-50">
        <div className="flex items-center justify-start">
          <img src="ziwa-logo.png" alt="Ziwa Doctor Diet LLP Logo" className="h-16 w-auto" />
        </div>
        
        <div className="hidden md:flex justify-center space-x-8 lg:space-x-12 text-[15px] font-medium text-gray-500 whitespace-nowrap">
          <Link to="/" className="hover:text-gray-900 transition-colors">Ziwa Doctor Diet</Link>
          <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-900 transition-colors font-medium">About</button>
          <button onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-900 transition-colors font-medium">Packages</button>
          <Link to="/contact" className="hover:text-gray-900 transition-colors">Contact</Link>
        </div>
        
        <div className="hidden md:block justify-end"></div>
        
        <div className="md:hidden flex justify-end col-span-2">
            <svg className="w-8 h-8 text-[#0e3b62]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 w-full flex flex-col lg:flex-row items-center justify-between relative z-10 pb-0">
        
        {/* Big Logo (Left Side) - Moves slightly faster than text for depth */}
        <div 
          data-speed="0.25"
          className="hidden lg:flex lg:w-[45%] h-full items-center justify-center pl-8 xl:pl-20 relative will-change-transform"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#5ba63b]/10 blur-3xl rounded-full transform scale-150"></div>
            <img 
              src="ziwa-logo.png" 
              alt="Ziwa Doctor Diet LLP Big Logo" 
              className="w-full max-w-[320px] xl:max-w-[450px] h-auto relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Text Content (Right Side) - Moves normally, or very slightly offset */}
        <div 
          data-speed="0.05"
          className="w-full lg:w-[55%] relative z-10 flex flex-col justify-center px-8 lg:pl-12 lg:pr-16 xl:pr-32 py-12 lg:py-0 will-change-transform"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-medium leading-[1.1] mb-6 tracking-tight">
            <span className="text-[#5ba63b] block mb-2">Health is the aim;</span>
            <span className="text-[#102b1c] block text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4.5rem]">Weight loss is the bonus.</span>
          </h1>
          <p className="text-[#333] text-base sm:text-lg lg:text-[1.35rem] max-w-[550px] mb-10 leading-[1.6] font-medium">
            Doctor-guided, dietitian-designed,<br className="hidden sm:block" />
            trainer-driven — a complete approach to your<br className="hidden sm:block" />
            fitness and health transformation
          </p>
          <div>
            <button 
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#5ba63b] hover:bg-[#4d8c32] text-white px-9 py-[14px] lg:py-[18px] lg:px-10 rounded-full font-semibold text-[15px] flex items-center shadow-lg shadow-[#5ba63b]/30 transition-all duration-300 group"
            >
              <span className="mr-5 tracking-widest uppercase">Start Now</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90 group-hover:translate-x-1 transition-transform">
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <polyline points="15 5 22 12 15 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
