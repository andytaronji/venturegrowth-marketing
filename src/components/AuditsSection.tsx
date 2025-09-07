'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import CldImageWrapper from './CldImageWrapper';

const AuditsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate in when entire card is at center of viewer's screen
            // First animate the header
            if (headerRef.current) {
              headerRef.current.classList.add('is-visible');
            }
            
            // Then animate the content with a delay to ensure header completes first
            setTimeout(() => {
              const content = entry.target.querySelector('.animate-card');
              if (content) {
                content.classList.add('is-visible');
              }
            }, 600); // 600ms delay after header starts animating
          }
        });
      },
      {
        threshold: 1.0,
        rootMargin: '0px'
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

  const features = [
    {
      title: "Performance Analysis"
    },
    {
      title: "Opportunity Identification"
    },
    {
      title: "Competitive Assessment"
    }
  ];

  return (
    <section 
      id="audits"
      ref={sectionRef}
      className="py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="bg-white/10 backdrop-blur-sm rounded-xl shadow-luxury overflow-hidden animate-header">
          <div className="gradient-border-card-content">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="order-2 md:order-2">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Audits
                  </h2>
                  <p className="text-lg text-white text-opacity-90 mb-6">
                    Get a comprehensive audit to uncover growth opportunities and outperform your competition in Marietta, Atlanta, and beyond. Our detailed marketing audits help Georgia businesses identify areas for improvement and benchmark against local competitors.
                  </p>
                  
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <Link 
                      href="/contact"
                      className="inline-block px-8 py-3 bg-accent text-white font-medium rounded-md hover:bg-light-accent hover:text-white transition-colors duration-200"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
                
                {/* Image */}
                <div className="relative h-96 w-full order-1 md:order-1">
                  <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <CldImageWrapper
                      src="https://res.cloudinary.com/di4phdven/image/upload/v1752192878/u9524928111_A_sleek_digital_magnifying_glass_scanning_a_netwo_fe306951-15d8-4e55-8c45-22747766baeb_3_pfpqjh.png"
                      alt="Marketing Audits Services"
                      width={800}
                      height={600}
                      crop="fit"
                      gravity="auto"
                      quality="auto:best"
                      className="rounded-lg shadow-subtle absolute inset-0 w-full h-full object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditsSection;
