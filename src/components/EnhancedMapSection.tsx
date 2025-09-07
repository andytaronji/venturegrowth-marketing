'use client';

import { useEffect, useRef } from 'react';

const EnhancedMapSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger the animation when scrolled into view
            if (mapRef.current) {
              mapRef.current.classList.add('is-visible');
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -25% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={mapRef}
          className="relative h-96 w-full rounded-lg overflow-hidden shadow-subtle hover:scale-105 transition-transform duration-300 animate-header"
        >
          <div className="absolute inset-0 bg-white flex items-center justify-center">
            <div className="text-center p-6">
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
