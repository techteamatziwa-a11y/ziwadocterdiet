import React, { useEffect, useRef, useState } from 'react';

const FeaturesCarousel = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const titleRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Tunable Parameters
  const N = 8;
  const SPINS = 2; // 2 full turns
  const RISE_MOBILE = 25; // pixels
  const RISE_DESKTOP = 45; // pixels
  const RADIUS_MOBILE = 140; // pixels
  const RADIUS_DESKTOP = 320; // pixels

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);

    let currentProgress = 0;
    let targetProgress = 0;
    const EASE = 0.08;
    let rAF;

    const renderLoop = () => {
      if (!containerRef.current || !trackRef.current || !titleRef.current) {
        rAF = window.requestAnimationFrame(renderLoop);
        return;
      }

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return; // Exit loop, standard scrolling applies
      }

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate target progress
      let rawProgress = -rect.top / (rect.height - windowHeight);
      targetProgress = Math.max(0, Math.min(1, rawProgress));

      // LERP current progress towards target
      currentProgress += (targetProgress - currentProgress) * EASE;

      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      
      const rise = mobile ? RISE_MOBILE : RISE_DESKTOP;
      const riseTotal = rise * N;
      
      // Use the lerped progress for all transforms
      const trackTranslateY = -currentProgress * riseTotal;
      const trackRotateX = -8 - currentProgress * 6;
      const trackRotateY = -currentProgress * SPINS * 360; // Reversed for anti-clockwise rotation
      
      trackRef.current.style.transform = `translateY(${trackTranslateY}px) rotateX(${trackRotateX}deg) rotateY(${trackRotateY}deg)`;

      const fadeOut = Math.max(0, Math.min(1, 1 - currentProgress * 6));
      const fadeIn = Math.max(0, Math.min(1, (currentProgress - 0.85) / 0.15));
      titleRef.current.style.opacity = fadeOut + fadeIn;

      rAF = window.requestAnimationFrame(renderLoop);
    };

    rAF = window.requestAnimationFrame(renderLoop);
    
    // Resize still triggers immediate mobile check, but the loop handles rendering
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      if (rAF) window.cancelAnimationFrame(rAF);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const features = [
    {
      title: "Doctor Consultation",
      image: "feature-doctor.png"
    },
    {
      title: "Daily Follow-up",
      image: "feature-support.png"
    },
    {
      title: "Customised Diet Chart",
      image: "feature-diet.png"
    },
    {
      title: "Live Workout Session",
      image: "feature-workout.png"
    },
    {
      title: "Live Yoga Session",
      image: "feature-yoga.png"
    },
    {
      title: "Live Zumba Session",
      image: "feature-zumba.jpg"
    },
    {
      title: "Doctor Live Interactive",
      image: "feature-interactive-doctor.png"
    },
    {
      title: "Psychology Interactive Session",
      image: "feature-psychology.jpg"
    }
  ];

  return (
    <section id="hscroll" ref={containerRef} className="bg-white relative font-sans" style={{ height: '400vh' }}>
      
      {/* Global override to ensure pinning works: clear overflow from root parents */}
      <style dangerouslySetInnerHTML={{__html: `
        html, body, #root { overflow-x: clip; overflow-y: visible; }
      `}} />

      {/* Sticky container that stays pinned to viewport */}
      <div className="w-full flex flex-col items-center overflow-hidden reduced-motion-static" style={{ position: 'sticky', top: 0, height: '100vh' }}>
        
        {/* Title: Bug 4 fix (z-index, spacing) */}
        <div 
          ref={titleRef} 
          className="relative mt-12 md:mt-24 max-w-[1400px] w-full px-6 md:px-12 lg:px-20 text-center will-change-opacity pointer-events-none"
          style={{ zIndex: 50 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#102b1c] mb-4 drop-shadow-sm bg-white/80 md:bg-transparent inline-block px-4 py-2 rounded-xl">
            Our <span className="text-[#5ba63b]">Features</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto drop-shadow-sm bg-white/80 md:bg-transparent px-4 py-1 rounded-lg">
            Everything you need for a complete health transformation.
          </p>
        </div>

        {/* Perspective container */}
        <div className="w-full flex justify-center items-center flex-1" style={{ perspective: '1400px', zIndex: 10 }}>
          
          {/* The 3D Track */}
          <div 
            id="track"
            ref={trackRef}
            className="relative w-[140px] h-[180px] sm:w-[200px] sm:h-[260px] md:w-[240px] md:h-[320px] reduced-motion-track will-change-transform mt-8 md:mt-16"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {features.map((feature, index) => {
              // Bug 3 fix: Apply math directly in JS instead of CSS custom variables to prevent chaotic overlap
              const radius = isMobile ? RADIUS_MOBILE : RADIUS_DESKTOP;
              const rise = isMobile ? RISE_MOBILE : RISE_DESKTOP;
              const angle = index * (360 / N);
              const yOffset = (index - (N - 1) / 2) * rise;

              return (
                <div 
                  key={index}
                  className="absolute inset-0 rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl border border-[#d1f5de] flex flex-col justify-end reduced-motion-card group"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px) translateY(${yOffset}px)`,
                    // Bug 2 fix: Hide backface to prevent mirrored text
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  {/* Image */}
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                  
                  {/* Card Content */}
                  <div className="p-4 md:p-5 whitespace-normal relative z-20 text-center pointer-events-none">
                    <h3 className="text-sm md:text-base lg:text-lg font-bold text-white leading-tight drop-shadow-md">{feature.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Reduced-motion fallback */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (prefers-reduced-motion: reduce) {
          #hscroll {
            height: auto !important;
            padding: 100px 0;
          }
          .reduced-motion-static {
            position: static !important;
            height: auto !important;
          }
          .reduced-motion-track {
            transform: none !important;
            transform-style: flat !important;
            display: flex !important;
            overflow-x: auto !important;
            width: 100% !important;
            padding: 20px 40px !important;
            gap: 20px !important;
            scroll-snap-type: x mandatory;
            margin-top: 0 !important;
          }
          .reduced-motion-card {
            position: static !important;
            transform: none !important;
            flex: 0 0 240px !important;
            scroll-snap-align: center;
          }
          #track > div {
            transform: none !important;
          }
        }
      `}} />
    </section>
  );
};

export default FeaturesCarousel;
