'use client';

import { useEffect, useRef } from 'react';
import ContactForm from './ContactForm';

interface EnhancedContactSectionProps {
  title?: string;
  description?: string;
}

const EnhancedContactSection = ({
  title = "Let's Grow Your Business",
  description = "We respond to all inquiries within 24 hours."
}: EnhancedContactSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate everything simultaneously
            if (headerRef.current) {
              headerRef.current.classList.add('is-visible');
            }
            
            // Animate content at the same time (no delay)
            const content = entry.target.querySelector('.animate-card');
            if (content) {
              content.classList.add('is-visible');
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
      className="pt-20 md:pt-32 pb-16 md:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16 animate-header">
          <h1 className="font-figtree text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-4xl mx-auto font-figtree leading-relaxed">
            {description}
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 animate-card">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start hover:translate-x-1 transition-transform duration-300">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 flex items-center justify-center bg-bg-secondary rounded-full hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-white text-opacity-80 text-sm">infodigitalmosaicstudios@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start hover:translate-x-1 transition-transform duration-300">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 rounded-full hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-white text-opacity-80 text-sm">404-861-7744</p>
                </div>
              </div>
              
              <div className="flex items-start hover:translate-x-1 transition-transform duration-300">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 rounded-full hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">Office</h3>
                  <p className="text-white text-opacity-80 text-sm">Marietta, GA 30062, Serving Atlanta & Georgia</p>
                  <p className="text-white text-opacity-80 text-sm mt-2">Serving clients nationwide across the United States.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <p className="text-white" style={{ color: '#ffffff !important' }}>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-white" style={{ color: '#ffffff !important' }}>Saturday/Sunday: Closed</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">Trust & Privacy</h3>
              <div className="space-y-2 text-sm">
                <p className="text-white text-opacity-80">✓ Trusted by Atlanta small businesses</p>
                <p className="text-white text-opacity-80">✓ We never share your information</p>
                <p className="text-white text-opacity-80">✓ We respond to all inquiries within 24 hours</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61578329544080" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-opacity-80 hover:text-accent transition-colors duration-200"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/digital-mosaic-studios-llc/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-opacity-80 hover:text-accent transition-colors duration-200"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContactSection;
