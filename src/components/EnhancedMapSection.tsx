'use client';

import { useEffect, useRef } from 'react';
import { useGSAPAnimation } from './GSAPProvider';

const EnhancedMapSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const { gsap } = useGSAPAnimation();

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([mapRef.current, contentRef.current], {
        opacity: 0,
        y: 30
      });

      // Create main timeline
      const mapTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          markers: false
        }
      });

      // Animate content
      mapTimeline
        .to(mapRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        })
        .to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        }, '-=0.4');

      // Add hover effect for the map container
      if (mapRef.current) {
        mapRef.current.addEventListener('mouseenter', () => {
          gsap.to(mapRef.current, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        mapRef.current.addEventListener('mouseleave', () => {
          gsap.to(mapRef.current, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <section 
      ref={sectionRef}
      className="py-12 z-index-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={mapRef}
          className="relative h-96 w-full rounded-lg overflow-hidden shadow-subtle gsap-will-change"
        >
          <div className="absolute inset-0 bg-white flex items-center justify-center">
            <div 
              ref={contentRef}
              className="text-center p-6 gsap-will-change"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-accent mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-primary text-lg font-medium">Digital Mosaic Studios</p>
              <p className="text-secondary mt-2">Based in Georgia. Serving clients nationwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedMapSection;
