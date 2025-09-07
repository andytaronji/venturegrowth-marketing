'use client';

import { useEffect, useRef } from 'react';

const PopInCTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger the pop-in animation when scrolled into view
            if (ctaRef.current) {
              ctaRef.current.classList.add('is-visible');
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
    <section ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center">
          <div 
            ref={ctaRef}
            className="bg-white/10 backdrop-blur-sm rounded-xl shadow-luxury overflow-hidden mx-auto"
            data-animate="pop-in"
          >
            <div className="gradient-border-card-content">
              <div className="p-6 md:p-8 lg:p-10">
                <h3 
                  className="font-figtree text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6"
                  style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                >
                  Ready to Transform Your Business?
                </h3>
                <p 
                  className="font-figtree text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8 max-w-2xl mx-auto"
                  style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
                >
                  Join the growing number of startups and small businesses that have chosen luxury-level marketing to accelerate their growth and dominate their markets.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
                  <a 
                    href="/contact" 
                    className="px-6 py-3 sm:px-8 sm:py-4 font-medium font-figtree rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl bg-accent text-white hover:bg-light-accent hover:text-white text-sm sm:text-base"
                  >
                    Accelerate Your Growth
                  </a>
                  <a 
                    href="/services" 
                    className="px-6 py-3 sm:px-8 sm:py-4 font-medium font-figtree rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary hover:border-white text-sm sm:text-base"
                  >
                    Transform Your Business
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopInCTASection;
