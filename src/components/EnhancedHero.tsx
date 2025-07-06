'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import CldVideoWrapper from './CldVideoWrapper';
import { useGSAPAnimation } from './GSAPProvider';

const EnhancedHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { gsap } = useGSAPAnimation();

  useEffect(() => {
    if (heroRef.current && gsap) {
      // Simple blog-style animation - fade in with stagger
      gsap.fromTo(heroRef.current.children, 
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out'
        }
      );
    }
  }, [gsap]);

  return (
    <div ref={heroRef} className="relative text-white overflow-hidden mt-12 md:mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
              style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              Marketing Consulting & Web Design Agency Across the United States
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-white mb-8 max-w-xl"
              style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
            >
              Data - it keeps the world turning. Discover key insights about your industry today in one of our expert marketing consultations!
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/services" 
                className="px-8 py-3 bg-accent text-white font-medium rounded-md hover:bg-light-accent hover:text-white transition-colors duration-200 text-center transform hover:scale-105 transition-transform"
              >
                Our Services
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-primary hover:border-white transition-colors duration-200 text-center transform hover:scale-105 transition-transform"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative h-96 w-full">
              <CldVideoWrapper
                src="https://res.cloudinary.com/di4phdven/video/upload/v1751454396/Data1_gmpujr.mp4"
                alt="Business Growth and Analytics Video"
                className="rounded-lg shadow-subtle absolute inset-0 w-full h-full object-cover"
                loop={true}
                autoplay={true}
                muted={true}
                controls={false}
                playsInline={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHero;
