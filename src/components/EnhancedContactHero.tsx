'use client';

import { useEffect, useRef } from 'react';
import { useGSAPAnimation } from './GSAPProvider';

interface EnhancedContactHeroProps {
  title?: string;
  description?: string;
}

const EnhancedContactHero = ({
  title = "Contact Digital Mosaic Studios",
  description = "We're here to help!"
}: EnhancedContactHeroProps) => {
  const heroRef = useRef<HTMLElement>(null);
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
    <section 
      ref={heroRef}
      className="relative text-white pt-20 md:pt-32 pb-8 md:pb-12 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-accent opacity-10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-light-accent opacity-5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContactHero;
