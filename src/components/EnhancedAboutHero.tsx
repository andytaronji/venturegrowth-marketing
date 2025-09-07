'use client';

import { useEffect, useRef } from 'react';
import { useGSAPAnimation } from './GSAPProvider';

interface EnhancedAboutHeroProps {
  title?: string;
  description?: string;
}

const EnhancedAboutHero = ({
  title = "The Luxury Marketing Agency Built for Small Business & Startup Growth",
  description = "Founded in Marietta, GA, we specialize in helping tech startups, SaaS platforms, professional services, and e-commerce businesses scale across Atlanta, Georgia, and nationwide."
}: EnhancedAboutHeroProps) => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const { gsap } = useGSAPAnimation();

  useEffect(() => {
    if (heroRef.current && gsap && titleRef.current && descriptionRef.current) {
      // Services hero-style animation with staggered text reveals
      const tl = gsap.timeline();
      
      // Set initial states
      gsap.set([titleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 30,
        scale: 0.95
      });
      
      // Animate title first
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out'
      })
      // Then animate description with slight delay
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out'
      }, "-=0.4");
    }
  }, [gsap]);

  return (
    <section 
      ref={heroRef}
      className="relative text-white min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent opacity-10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-light-accent opacity-5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 
            ref={titleRef}
            className="font-figtree text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            {title}
          </h1>
          <p 
            ref={descriptionRef}
            className="text-lg md:text-xl text-white font-figtree font-medium max-w-4xl mx-auto leading-relaxed"
            style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAboutHero;
