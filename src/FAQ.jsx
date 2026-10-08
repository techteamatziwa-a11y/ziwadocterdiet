import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What type of diet plan does Ziwa Doctor Diet provide?",
      answer: "Ziwa Doctor Diet provides a diet plan. The plan is built around your health, your lifestyle what you eat every day and your own goals for weight management."
    },
    {
      question: "Is Ziwa Doctor Diet a doctor guided weight loss program?",
      answer: "Yes. The program includes doctor consultations, personal diet advice, daily follow-up support and live wellness sessions to keep you on track."
    },
    {
      question: "Can I get a weight loss diet plan in Kerala through Ziwa Doctor Diet?",
      answer: "Yes. Ziwa Doctor Diet is based in Kayamkulam, Kerala. We offer guided weight-management services with support and live sessions so location in Kerala is not a barrier."
    },
    {
      question: "Is the diet plan personalized?",
      answer: "Yes. Every diet plan is custom-made. It considers your health condition, your habits, your eating patterns and your personal weight-loss targets. No two plans are the same."
    },
    {
      question: "Do I have to stop eating rice?",
      answer: "No you do not have to stop eating rice. Your food plan will be designed according to your needs and your usual eating habits. Rice may still be included in a way."
    },
    {
      question: "Who will guide me during the program?",
      answer: "You will receive guidance from doctors, dietitians and through interactive sessions as part of the program."
    },
    {
      question: "Can I join the program from outside Kayamkulam?",
      answer: "Yes. You can join from anywhere. Please contact our team to find out how online consultations, diet guidance and live sessions can work for you no matter where you are."
    },
    {
      question: "How can I join Ziwa Doctor Diet?",
      answer: "You can join by contacting our team via phone, email or through the Contact page. We will share details, about our programs and the different package options available."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e4fceb] text-[#5ba63b] px-5 py-2 rounded-full font-bold text-sm mb-6 shadow-sm border border-[#d1f5de]">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#102b1c] mb-6">
            Frequently Asked Questions <span className="text-[#5ba63b]">About Weight Loss</span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-[#e4fceb] rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full text-left px-6 py-5 bg-[#f2faf4] hover:bg-[#e4fceb] transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-[#102b1c]">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 text-[#5ba63b] transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-white">
                  <p className="text-gray-600 leading-relaxed text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
