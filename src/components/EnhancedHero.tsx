'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import CldImageWrapper from './CldImageWrapper';

const EnhancedHero = () => {
  const heroCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroCardRef.current) {
      // Add performance optimizations for adaptive frame rate
      const element = heroCardRef.current;
      element.style.willChange = "transform";
      element.style.transform = "translate3d(0,0,0)"; // Force hardware acceleration
      
      // Create adaptive floating animation with GSAP
      // GSAP automatically syncs to user's display refresh rate (60Hz, 120Hz, 144Hz, etc.)
      gsap.to(element, {
        y: -20,
        duration: 3.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        force3D: true, // GPU acceleration for all refresh rates
        transformOrigin: "center center"
      });
    }
    
    // Cleanup function
    return () => {
      if (heroCardRef.current) {
        heroCardRef.current.style.willChange = "auto";
        gsap.killTweensOf(heroCardRef.current);
      }
    };
  }, []);

  return (
    <div className="relative text-white overflow-hidden min-h-screen flex items-center justify-center pt-12 md:pt-14">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        {/* Unified Container - Text and Video Combined */}
        <div ref={heroCardRef} className="floating-card bg-white/10 backdrop-blur-sm rounded-xl shadow-luxury overflow-hidden mx-auto">
          <div className="gradient-border-card-content">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] items-center">
            {/* Text Content Side */}
            <div className="p-6 md:p-10 lg:pl-12 lg:pr-6 flex flex-col justify-center">
              <h1 
                className="font-figtree text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4 md:mb-6"
                style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
              >
                Social Media Management for Small Businesses
              </h1>
              
              <h2 
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-figtree font-medium mb-4 md:mb-6 leading-relaxed"
                style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
              >
                Content Creation, Content Publication, Ad Campaign Management, and More!
              </h2>
              
              <h3 
                className="text-sm sm:text-base md:text-lg text-accent font-figtree text-center mb-6 md:mb-8"
                style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
              >
                Scroll down to learn more!
              </h3>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/contact" 
                  className="px-6 py-3 sm:px-8 sm:py-4 font-medium font-figtree rounded-full transition-all duration-200 transform hover:scale-105 shadow-button hover:shadow-button-hover bg-accent text-white hover:bg-light-accent hover:text-white flex flex-col items-center text-sm sm:text-base"
                >
                  <span>Talk to Us, It's</span>
                  <span>Free</span>
                </Link>
                <Link 
                  href="/services" 
                  className="px-6 py-3 sm:px-8 sm:py-4 font-medium font-figtree rounded-full transition-all duration-200 transform hover:scale-105 shadow-button hover:shadow-button-hover bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary hover:border-white flex flex-col items-center text-sm sm:text-base"
                >
                  <span>Here's What We</span>
                  <span>offer</span>
                </Link>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="p-8 md:p-10 lg:pl-6 lg:pr-12 flex items-center justify-center">
              {/* Image Container for positioning */}
              <div className="relative w-full max-w-lg lg:max-w-2xl aspect-video">
                <CldImageWrapper
                  src="https://res.cloudinary.com/di4phdven/image/upload/w_1200,h_675,c_fill,q_auto,f_auto,dpr_auto/v1756593178/Brown_Green_Terracotta_Minimal_Social_Media_Mockup_Instagram_Post_vzeb5n.png"
                  alt="Social Media Management mockup showcasing Digital Mosaic Studios' professional social media design services for small businesses"
                  width={1200}
                  height={675}
                  className="absolute inset-0 w-full h-full object-cover rounded-none shadow-lg"
                  priority={true}
                  loading="eager"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHero;
