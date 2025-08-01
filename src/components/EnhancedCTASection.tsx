'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useGSAPAnimation } from './GSAPProvider';

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
  const { gsap } = useGSAPAnimation();

  useEffect(() => {
    if (sectionRef.current && gsap) {
      // Simple blog-style animation - fade in with stagger
      gsap.fromTo(sectionRef.current.children, 
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, [gsap]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 text-light overflow-hidden"
    >
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
          style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
        >
          {title}
        </h2>
        
        <p 
          className="text-xl md:text-2xl text-white mb-6 max-w-3xl mx-auto"
          style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
        >
          {description}
        </p>
        
        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 mb-8">
          <div className="flex items-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-lg font-medium">404-861-7744</span>
          </div>
          <div className="flex items-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-lg font-medium">infodigitalmosaicstudios@gmail.com</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          {buttons.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={`
                px-8 py-4 font-medium rounded-md transition-all duration-200 transform hover:scale-105
                ${button.variant === 'primary' 
                  ? 'bg-accent text-white hover:bg-light-accent hover:text-white hover:shadow-lg' 
                  : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary hover:border-white'
                }
              `}
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent opacity-10 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-light-accent opacity-5 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default EnhancedCTASection;
