import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Hero from './Hero'
import Features from './Features'
import FeaturesCarousel from './FeaturesCarousel'
import HowItWorks from './HowItWorks'
import Packages from './Packages'
import OurDoctors from './OurDoctors'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import Footer from './Footer'

function Home() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease out
      smoothWheel: true,
    });

    let rAF;
    function raf(time) {
      lenis.raf(time);
      rAF = requestAnimationFrame(raf);
    }

    rAF = requestAnimationFrame(raf);

    return () => {
      if (rAF) cancelAnimationFrame(rAF);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <FeaturesCarousel />
      <HowItWorks />
      <OurDoctors />
      <Packages />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  )
}

export default Home
