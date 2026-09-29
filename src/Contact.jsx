import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // List of available WhatsApp numbers
    const whatsappNumbers = ["+91 8891 64 41 41","+91 7559 97 83 20"," +91 7902 41 41 92","+91 7902 41 41 52","+91 8089 12 41 27","+91 9207 41 41 68","+91 7510 63 74 14","+91 8714 35 53 21","+91 9895 30 63 47","+91 7994 87 61 41","+91 9895 92 25 75","+91 7025 41 41 69"];
    
    // Pick a random number
    const randomRawNumber = whatsappNumbers[Math.floor(Math.random() * whatsappNumbers.length)];
    
    // Clean the number
    const cleanNumber = randomRawNumber.replace(/[\s+-]/g, '');
    
    const text = `*New General Inquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:*\n${message}`;
    const encodedText = encodeURIComponent(text);
    
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-700 tracking-tight">Ziwa Doctor Diet</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link to="/" className="text-gray-600 hover:text-green-700 font-medium transition-colors">Home</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Have questions about our diet plans? We're here to help. Send us a message and we'll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.031 0C5.385 0 0 5.386 0 12.033c0 2.12.548 4.195 1.591 6.01L.067 23.633l5.748-1.507c1.748.956 3.731 1.458 5.753 1.458h.005c6.645 0 12.03-5.387 12.03-12.034C23.603 5.385 18.22 0 12.031 0zm0 21.61h-.004c-1.802 0-3.567-.484-5.11-1.401l-.367-.217-3.799.996 1.015-3.705-.238-.379c-1.008-1.603-1.54-3.461-1.54-5.384 0-5.568 4.531-10.096 10.103-10.096 5.568 0 10.099 4.528 10.099 10.096s-4.531 10.09-10.16 10.09zm5.545-7.58c-.304-.152-1.802-.89-2.08-.992-.279-.101-.482-.152-.685.152s-.786.992-.964 1.194c-.178.203-.356.228-.66.076-1.503-.751-2.614-1.393-3.644-2.887-.203-.279.03-.45.18-.621.15-.171.304-.356.456-.533.152-.178.203-.304.304-.507.102-.203.051-.381-.025-.533-.076-.152-.685-1.65-.938-2.259-.249-.597-.502-.516-.685-.525-.178-.009-.381-.009-.584-.009-.203 0-.533.076-.812.381s-1.065 1.041-1.065 2.538c0 1.498 1.091 2.945 1.243 3.148.152.203 2.146 3.275 5.197 4.593.726.314 1.293.502 1.734.643.728.232 1.391.199 1.916.12.589-.089 1.802-.736 2.055-1.447.254-.711.254-1.32.178-1.447-.076-.127-.279-.203-.583-.355z" />
              </svg>
              Send via WhatsApp
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
