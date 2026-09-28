import React from 'react';

const HowItWorks = () => {
  return (
    <div className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 font-sans">
      
      <div className="max-w-[1400px] mx-auto bg-gradient-to-r from-[#e4fceb] via-[#d1f5de] to-[#c1ebd1] rounded-[40px] p-10 md:p-16 lg:p-24 relative overflow-hidden shadow-xl">
        
        {/* Top Background Image */}
        <div 
          className="hidden md:block absolute inset-0 z-0 opacity-100 mix-blend-multiply pointer-events-none"
          style={{ 
            backgroundImage: "url('step2-bg.jpg?v=1')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        {/* Title */}
        <div className="flex items-center space-x-3 mb-16 relative z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-[#5ba63b]"></div>
          <h2 className="text-[#102b1c] text-2xl md:text-3xl font-medium tracking-wide">How It Works</h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-5xl mx-auto pt-8 pb-12">
          
          {/* SVG Dotted Line Background */}
          <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
            <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="none">
               <path 
                 d="M 150,200 C 250,300 300,350 400,200 C 500,50 550,0 650,150 C 750,300 800,350 900,200" 
                 fill="none" 
                 stroke="rgba(16,43,28,0.15)" 
                 strokeWidth="2" 
                 strokeDasharray="6,6" 
               />
               {/* Arrow heads / dots on line */}
               <circle cx="270" cy="285" r="5" fill="#5ba63b" />
               <circle cx="530" cy="85" r="5" fill="#5ba63b" />
               <circle cx="760" cy="285" r="5" fill="#5ba63b" />
            </svg>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10 items-start mt-12 lg:mt-0">
            
            {/* Card 1 - Up */}
            <div className="bg-gradient-to-br from-white to-[#f0fbf3] rounded-[32px] p-8 lg:p-8 xl:p-10 text-center shadow-lg lg:-mt-8 flex flex-col justify-center aspect-auto lg:aspect-square transition-transform hover:-translate-y-2 mx-auto w-full max-w-[320px] border border-white">
              <span className="text-[#5ba63b] text-lg font-bold mb-3 block tracking-wider uppercase">Step 01</span>
              <h3 className="text-[#102b1c] text-xl lg:text-[22px] font-bold mb-4 leading-snug">Health<br />Assesment</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                Dietitian records your weight, height, lifestyle, and health details.
              </p>
            </div>

            {/* Card 2 - Down */}
            <div className="bg-[#5ba63b] rounded-[32px] p-8 lg:p-8 xl:p-10 text-center shadow-lg lg:mt-24 flex flex-col justify-center aspect-auto lg:aspect-square transition-transform hover:-translate-y-2 mx-auto w-full max-w-[320px] border border-[#4d8c32]">
              <span className="text-white/90 text-lg font-bold mb-3 block tracking-wider uppercase drop-shadow-sm">Step 02</span>
              <h3 className="text-white text-xl lg:text-[22px] font-bold mb-4 leading-snug drop-shadow-sm">Doctor's<br />Consultation</h3>
              <p className="text-white/90 text-sm leading-relaxed font-medium">
                Our doctors review your medical issues and select the right approach.
              </p>
            </div>

            {/* Card 3 - Up */}
            <div className="bg-gradient-to-br from-white to-[#f0fbf3] rounded-[32px] p-8 lg:p-8 xl:p-10 text-center shadow-lg lg:-mt-8 flex flex-col justify-center aspect-auto lg:aspect-square transition-transform hover:-translate-y-2 mx-auto w-full max-w-[320px] border border-white">
              <span className="text-[#5ba63b] text-lg font-bold mb-3 block tracking-wider uppercase">Step 03</span>
              <h3 className="text-[#102b1c] text-xl lg:text-[22px] font-bold mb-4 leading-snug">Personalized<br />Diet Plan</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                System combines all data to create a simple, practical, and effective health plan.
              </p>
            </div>

            {/* Card 4 - Down */}
            <div className="bg-[#5ba63b] rounded-[32px] p-8 lg:p-8 xl:p-10 text-center shadow-lg lg:mt-24 flex flex-col justify-center aspect-auto lg:aspect-square transition-transform hover:-translate-y-2 mx-auto w-full max-w-[320px] border border-[#4d8c32]">
              <span className="text-white/90 text-lg font-bold mb-3 block tracking-wider uppercase drop-shadow-sm">Step 04</span>
              <h3 className="text-white text-xl lg:text-[22px] font-bold mb-4 leading-snug drop-shadow-sm">Continuous<br />Support</h3>
              <p className="text-white/90 text-sm leading-relaxed font-medium">
                Daily workouts + weekly live sessions + dietitian follow-up.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
