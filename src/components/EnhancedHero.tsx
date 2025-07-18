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
              className="font-luxury-serif text-luxury-hero md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white"
              style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              Luxury Marketing Solutions for Small Businesses & Startups
            </h1>
            
            <p 
              className="text-luxury-subtitle md:text-3xl text-white mb-8 max-w-2xl font-luxury-sans font-medium"
              style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
            >
              Web Design, Analytics, Custom Tools, and AI Training—All Under One Roof for Ambitious Entrepreneurs
            </p>
            
            <div className="mb-8 max-w-2xl">
              <p 
                className="text-lg md:text-xl text-white opacity-90 font-luxury-sans"
                style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
              >
                Serving <span className="text-accent font-semibold">tech startups</span>, <span className="text-accent font-semibold">e-commerce</span>, <span className="text-accent font-semibold">professional services</span>, and growing businesses across Atlanta, Georgia, and nationwide with premium marketing solutions that deliver measurable results.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                href="/contact" 
                className="button-primary text-lg px-8 py-4 shadow-button hover:shadow-button-hover transform hover:scale-105"
              >
                Accelerate Your Startup Growth
              </Link>
              <Link 
                href="/services" 
                className="button-primary text-lg px-8 py-4 shadow-button hover:shadow-button-hover transform hover:scale-105"
              >
                Transform Your Small Business
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative h-96 w-full">
              <CldVideoWrapper
                src="https://res.cloudinary.com/di4phdven/video/upload/v1751454396/Data1_gmpujr.mp4"
                alt="Digital Mosaic Studios marketing consulting services helping Atlanta and Marietta businesses grow through data-driven strategies"
                className="rounded-lg shadow-subtle absolute inset-0 w-full h-full object-cover"
                loop={true}
                autoplay={true}
                muted={true}
                controls={false}
                playsInline={true}
                priority={true}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHero;
