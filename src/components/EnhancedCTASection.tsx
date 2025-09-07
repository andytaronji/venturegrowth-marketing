'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface EnhancedCTASectionProps {
  title?: string;
  description?: string;
  buttons?: CTAButton[];
  backgroundGradient?: boolean;
}

const EnhancedCTASection = ({
  title = "Ready to Grow Your Business?",
  description = "Serving Marietta, Atlanta, and all of Georgia. Contact us today to schedule your free consultation and bring your business ideas into reality!",
  buttons = [
    { text: "Book Your Free Consultation", href: "/contact", variant: "primary" },
    { text: "See Our Services", href: "/services", variant: "secondary" }
  ],
  backgroundGradient = true
}: EnhancedCTASectionProps) => {
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
              <div className="p-8 md:p-10">
                <h2 
                  className="font-figtree text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight"
                  style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                >
                  {title}
                </h2>
                
                <p 
                  className="font-figtree text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed px-4"
                  style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
                >
                  {description}
                </p>
                
                {/* Contact Information */}
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8 mb-6 md:mb-8 px-4">
                  <div className="flex items-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-accent flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-sm sm:text-base md:text-lg font-medium font-figtree">404-861-7744</span>
                  </div>
                  <div className="flex items-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-accent flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium font-figtree break-all">infodigitalmosaicstudios@gmail.com</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  {buttons.map((button, index) => (
                    <Link
                      key={index}
                      href={button.href}
                      className={`
                        px-6 py-3 sm:px-8 sm:py-4 font-medium font-figtree rounded-full transition-all duration-200 transform hover:scale-105 shadow-button hover:shadow-button-hover text-sm sm:text-base
                        ${button.variant === 'primary' 
                          ? 'bg-accent text-white hover:bg-light-accent hover:text-white' 
                          : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary hover:border-white'
                        }
                      `}
                    >
                      {button.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedCTASection;
