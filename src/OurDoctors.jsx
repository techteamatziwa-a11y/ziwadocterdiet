import React from 'react';

const OurDoctors = () => {
  const doctors = [
    {
      name: "Dr. Dilshana",
      specialty: "BAMS (Ayurvedic Physician)",
      image: "dr-dilshana.jpg",
      description: "Ayurvedic physician who works on health, natural weight management and lifestyle care.",
      imagePosition: "object-center"
    },
    {
      name: "Dr. Fahana",
      specialty: "BAMS (Ayurvedic Physician)",
      image: "dr-fahana.jpg",
      description: "Ayurvedic physician who works on wellness and personalised Ayurvedic care.",
      imagePosition: "object-[center_30%]"
    },
    {
      name: "Dr. Rishali",
      specialty: "BAMS (Ayurvedic Physician)",
      image: "dr-rishali.jpg",
      description: "Ayurvedic physician who works on combining principles with modern wellness practices, for sustainable health.",
      imagePosition: "object-top"
    },
    {
      name: "Dr. Sumaya",
      specialty: "BAMS (Ayurvedic Physician)",
      image: "dr-sumaya.jpg",
      description: "Ayurvedic physician who works on Ayurvedic diet guidance, natural approaches and lifestyle management.",
      imagePosition: "object-top"
    }
  ];

  return (
    <section className="bg-[#f2faf4] py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e4fceb] text-[#5ba63b] px-5 py-2 rounded-full font-bold text-sm mb-6 shadow-sm border border-[#d1f5de]">
            Meet Our experts
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#102b1c] mb-6">
            Our <span className="text-[#5ba63b]">Doctors</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our BAMS Ayurvedic physicians provide guidance as part of your health and weight-management journey, helping you follow a personalised approach based on your individual needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#e4fceb]">
              <div className="h-72 overflow-hidden relative group">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className={`w-full h-full object-cover ${doctor.imagePosition} transition-transform duration-500 group-hover:scale-110`}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#102b1c] mb-1">{doctor.name}</h3>
                <p className="text-[#5ba63b] font-semibold mb-4 text-[13px] uppercase tracking-wider">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{doctor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;
