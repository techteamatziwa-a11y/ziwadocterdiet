import React from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
  const features = [
    "Daily follow-up",
    "Doctor consultation",
    "Live workout session",
    "Live yoga session",
    "Live zumba session",
    "Doctor live interactive session",
    "Psychology live interactive session"
  ];

  return (
    <section id="packages" className="bg-[#f2faf4] py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#102b1c] mb-6">
            Our <span className="text-[#5ba63b]">Packages</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the transformation plan that best fits your goals and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-[#102b1c] rounded-3xl p-8 shadow-lg flex flex-col hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-white mb-2">Basic</h3>
            <p className="text-[#a8c7b6] font-medium mb-6">1 Month Plan</p>
            <div className="mb-8 flex items-baseline">
              <span className="text-gray-400 line-through text-lg mr-3">₹3000</span>
              <span className="text-4xl font-bold text-white">₹1000</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-5 h-5 text-[#5ba63b] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/select-package?plan=Basic" className="w-full">
              <button className="w-full bg-[#5ba63b] hover:bg-[#4d8c32] text-white py-3 rounded-full font-bold transition-colors shadow-lg shadow-[#5ba63b]/30">
                Choose Basic
              </button>
            </Link>
          </div>

          {/* Advanced Plan */}
          <div className="bg-[#102b1c] rounded-3xl p-8 shadow-lg flex flex-col hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-white mb-2 mt-4">Advanced</h3>
            <p className="text-[#a8c7b6] font-medium mb-6">2 Month Plan</p>
            <div className="mb-8 flex items-baseline">
              <span className="text-gray-400 line-through text-lg mr-3">₹5000</span>
              <span className="text-4xl font-bold text-white">₹2000</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-5 h-5 text-[#5ba63b] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/select-package?plan=Advanced" className="w-full">
              <button className="w-full bg-[#5ba63b] hover:bg-[#4d8c32] text-white py-3 rounded-full font-bold transition-colors shadow-lg shadow-[#5ba63b]/30">
                Choose Advanced
              </button>
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="bg-[#102b1c] rounded-3xl p-8 shadow-lg transform md:-translate-y-4 flex flex-col relative border-2 border-[#5ba63b]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#5ba63b] text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-md">
              Most Popular
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2 mt-4">Premium</h3>
            <p className="text-[#a8c7b6] font-medium mb-6">3 Month Plan</p>
            <div className="mb-8 flex items-baseline">
              <span className="text-gray-400 line-through text-lg mr-3">₹6999</span>
              <span className="text-4xl font-bold text-white">₹2500</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-5 h-5 text-[#5ba63b] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/select-package?plan=Premium" className="w-full">
              <button className="w-full bg-[#5ba63b] hover:bg-[#4d8c32] text-white py-3 rounded-full font-bold transition-colors shadow-lg shadow-[#5ba63b]/30">
                Choose Premium
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Packages;
