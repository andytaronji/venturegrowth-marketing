'use client';

import { useEffect, useRef } from 'react';

const ReadyToJoinCTASection = () => {
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
        {/* Call to action */}
        <div className="text-center">
          <div 
            ref={ctaRef}
            className="animate-card bg-gradient-to-r from-primary to-secondary bg-opacity-10 rounded-2xl p-8 border border-accent border-opacity-30"
            data-animate="pop-in"
          >
            <h3 
              className="font-figtree text-3xl font-semibold text-white mb-4"
              style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              Ready to Join These Success Stories?
            </h3>
            <p 
              className="text-white text-opacity-90 font-figtree mb-8 max-w-3xl mx-auto text-lg"
              style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
            >
              These results aren't accidents—they're the outcome of strategic, data-driven marketing designed specifically for ambitious small businesses and startups.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div 
                  className="text-white font-bold text-3xl font-figtree"
                  style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                >
                  600%
                </div>
                <div 
                  className="text-white text-sm font-figtree"
                  style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
                >
                  Average Lead Increase
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-white font-bold text-3xl font-figtree"
                  style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                >
                  $50K+
                </div>
                <div 
                  className="text-white text-sm font-figtree"
                  style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
                >
                  First Month Revenue
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-white font-bold text-3xl font-figtree"
                  style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                >
                  3 Weeks
                </div>
                <div 
                  className="text-white text-sm font-figtree"
                  style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
                >
                  Average Launch Time
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-white font-bold text-3xl font-figtree"
                  style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                >
                  100+
                </div>
                <div 
                  className="text-white text-sm font-figtree"
                  style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
                >
                  Growing Businesses
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 font-medium font-figtree rounded-full transition-all duration-200 transform hover:scale-105 shadow-button hover:shadow-button-hover bg-accent text-white hover:bg-light-accent hover:text-white"
              >
                Accelerate Your Growth
              </a>
              <a 
                href="/services" 
                className="px-8 py-4 font-medium font-figtree rounded-full transition-all duration-200 transform hover:scale-105 shadow-button hover:shadow-button-hover bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary hover:border-white"
              >
                See All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToJoinCTASection;
