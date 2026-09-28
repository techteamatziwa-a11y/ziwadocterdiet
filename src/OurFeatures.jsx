import React, { useEffect, useState } from 'react';

const OurFeatures = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call once to set initial position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Medical Consultation",
      description: "Expert guidance from doctors to ensure safe and effective progress.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Personalized Nutrition",
      description: "Custom meal plans designed specifically for your body and goals.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Live Workouts",
      description: "Daily live sessions including yoga and zumba to keep you active.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Daily Monitoring",
      description: "Continuous tracking and real-time adjustments by certified dietitians.",
      image: "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#102b1c] mb-6">
            Our <span className="text-[#5ba63b]">Features</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need for a complete health transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => {
            // Create a slightly different rotation speed/direction for each item for variety
            const rotation = (index % 2 === 0 ? 1 : -1) * scrollY * 0.15;
            // Create a slight parallax vertical movement
            const parallax = scrollY * 0.03;

            return (
              <div key={index} className="flex flex-col items-center text-center group">
                
                {/* Interactive Circle Image Container */}
                <div className="relative w-56 h-56 mb-8">
                  
                  {/* Decorative rotating dashed circle */}
                  <div 
                    className="absolute inset-0 rounded-full border-2 border-dashed border-[#5ba63b] opacity-40 transition-transform duration-75 ease-linear"
                    style={{ transform: `rotate(${rotation}deg)` }}
                  ></div>
                  
                  {/* Inner rotating solid circle */}
                  <div 
                    className="absolute inset-2 rounded-full border border-[#a8c7b6] opacity-60 transition-transform duration-75 ease-linear"
                    style={{ transform: `rotate(${-rotation * 0.5}deg)` }}
                  ></div>
                  
                  {/* Image container with parallax effect */}
                  <div className="absolute inset-4 rounded-full overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 bg-[#f2faf4]">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover transition-transform duration-75 ease-linear"
                      style={{ 
                        transform: `scale(1.2) translateY(${parallax - 20}px)` 
                      }} 
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-[#102b1c] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
