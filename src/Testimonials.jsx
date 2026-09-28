import React, { useEffect, useRef } from 'react';
import postersData from './data/posters.json';

const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId;
    let scrollSpeed = 1; // pixels per frame (adjust for speed)

    const scroll = () => {
      if (el) {
        el.scrollLeft += scrollSpeed;
        
        // If we reach the end, reset to the beginning smoothly
        if (el.scrollLeft >= (el.scrollWidth - el.clientWidth - 1)) {
          el.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    // Start animation
    animationId = requestAnimationFrame(scroll);

    // Pause on hover or touch
    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => {
      cancelAnimationFrame(animationId);
      animationId = requestAnimationFrame(scroll);
    };

    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('touchstart', pause);
    el.addEventListener('touchend', resume);

    return () => {
      cancelAnimationFrame(animationId);
      if (el) {
        el.removeEventListener('mouseenter', pause);
        el.removeEventListener('mouseleave', resume);
        el.removeEventListener('touchstart', pause);
        el.removeEventListener('touchend', resume);
      }
    };
  }, []);

  return (
    <section id="success-stories" className="bg-white py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block bg-[#e4fceb] text-[#5ba63b] px-5 py-2 rounded-full font-bold text-sm mb-6 shadow-sm border border-[#d1f5de]">
            ✨ 5000+ Happy Clients
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#102b1c] mb-10 leading-tight">
            Client <span className="text-[#5ba63b]">Transformations</span>
          </h2>
        </div>
        
        {/* Client Posters Gallery */}
        {postersData && postersData.length > 0 && (
          <div>
            {/* Horizontal Auto-Scroll Container */}
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 md:gap-6 pb-8 hide-scrollbar cursor-pointer" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {postersData.map((poster, index) => (
                <div key={poster.id} className="flex-none shadow-sm hover:shadow-lg transition-shadow rounded-2xl overflow-hidden bg-gray-100">
                  <img 
                    src={poster.url} 
                    alt={`Satisfied client transformation ${index + 1}`} 
                    className="h-[250px] md:h-[300px] lg:h-[400px] w-auto object-cover max-w-none"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
