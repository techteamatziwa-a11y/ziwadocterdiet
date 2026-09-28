import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className="w-full font-sans">
      
      {/* About Ziwa Doctor Diet Section */}
      <section id="about" className="bg-white py-20 px-6 md:px-12 lg:px-20 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#102b1c] mb-6 leading-tight max-w-4xl mx-auto">
          Ziwa Doctor Diet
        </h2>
        <p className="text-gray-600 text-[15px] md:text-base lg:text-lg max-w-4xl mx-auto mb-10 leading-relaxed">
          Ziwa Doctor Diet offers a comprehensive, doctor-led health and wellness program. Our services include personalized medical consultations, daily nutritional monitoring, and lifestyle guidance from certified dietitians. To support your fitness goals, we also provide live daily workout sessions designed to keep you active, motivated, and on track throughout your transformation journey.
        </p>
        <Link to="/contact">
          <button className="bg-[#5ba63b] hover:bg-[#4d8c32] text-white px-10 py-3 rounded-full font-medium text-[15px] transition-colors">
            Learn More
          </button>
        </Link>
      </section>



    </div>
  );
};

export default Features;
