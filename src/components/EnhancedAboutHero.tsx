'use client';

import { useEffect, useRef } from 'react';
import { useGSAPAnimation } from './GSAPProvider';

interface EnhancedAboutHeroProps {
  title?: string;
  description?: string;
}

const EnhancedAboutHero = ({
  title = "About Digital Mosaic Studios - Your Marietta Web Design Experts",
  description = "We're passionate about helping businesses grow through innovative digital solutions."
}: EnhancedAboutHeroProps) => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  const { gsap } = useGSAPAnimation();

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 40
      });

      // Background parallax setup
      gsap.set(backgroundRef.current, {
        y: 0
      });

      // Create entrance timeline
      const heroTimeline = gsap.timeline({ delay: 0.3 });

      heroTimeline
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out'
        })
        .to(descriptionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.5');

      // Background parallax on scroll
      gsap.to(backgroundRef.current, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <section 
      ref={heroRef}
      className="relative text-white py-20 md:py-32 overflow-hidden z-index-section"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent opacity-10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-light-accent opacity-5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-index-content">
        <div className="text-center">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-white mb-6 gsap-will-change"
          >
            {title}
          </h1>
          <p 
            ref={descriptionRef}
            className="text-xl text-white opacity-90 max-w-3xl mx-auto gsap-will-change"
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAboutHero;
