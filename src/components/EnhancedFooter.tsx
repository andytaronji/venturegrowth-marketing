'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useGSAPAnimation } from './GSAPProvider';

const EnhancedFooter = () => {
  const footerRef = useRef<HTMLElement>(null);
  const companyInfoRef = useRef<HTMLDivElement>(null);
  const quickLinksRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);
  
  const { gsap } = useGSAPAnimation();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (!footerRef.current || !gsap) return;

    const ctx = gsap.context(() => {
      // Set initial states only if elements exist
      const footerSections = [
        companyInfoRef.current,
        quickLinksRef.current,
        servicesRef.current,
        contactRef.current
      ].filter(Boolean);

      if (footerSections.length > 0) {
        gsap.set(footerSections, {
          opacity: 0,
          y: 30
        });
      }

      if (copyrightRef.current) {
        gsap.set(copyrightRef.current, {
          opacity: 0,
          y: 20
        });
      }

      // Create staggered entrance animation with fallback
      const footerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse',
          markers: false,
          onRefresh: () => {
            // Ensure elements are visible if ScrollTrigger fails
            if (footerSections.length > 0) {
              gsap.set(footerSections, { opacity: 1, y: 0 });
            }
            if (copyrightRef.current) {
              gsap.set(copyrightRef.current, { opacity: 1, y: 0 });
            }
          }
        }
      });

      // Animate footer sections with stagger
      if (footerSections.length > 0) {
        footerTimeline.to(footerSections, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1
        });
      }

      if (copyrightRef.current) {
        footerTimeline.to(copyrightRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out'
        }, '-=0.2');
      }

      // Add hover effects for social media icons
      const socialIcons = footerRef.current?.querySelectorAll('.social-icon');
      if (socialIcons) {
        socialIcons.forEach((icon) => {
          const iconElement = icon as HTMLElement;
          
          iconElement.addEventListener('mouseenter', () => {
            gsap.to(iconElement, {
              scale: 1.1,
              y: -2,
              duration: 0.3,
              ease: 'power2.out'
            });
          });

          iconElement.addEventListener('mouseleave', () => {
            gsap.to(iconElement, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
          });
        });
      }

      // Add subtle hover effects for links
      const footerLinks = footerRef.current?.querySelectorAll('.footer-link');
      if (footerLinks) {
        footerLinks.forEach((link) => {
          const linkElement = link as HTMLElement;
          
          linkElement.addEventListener('mouseenter', () => {
            gsap.to(linkElement, {
              x: 3,
              duration: 0.2,
              ease: 'power2.out'
            });
          });

          linkElement.addEventListener('mouseleave', () => {
            gsap.to(linkElement, {
              x: 0,
              duration: 0.2,
              ease: 'power2.out'
            });
          });
        });
      }

    }, footerRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <footer 
      ref={footerRef}
      className="bg-dark-solid text-white z-index-section border-t border-white border-opacity-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div 
            ref={companyInfoRef}
            className="col-span-1 md:col-span-1 gsap-will-change"
          >
            <h3 className="text-lg font-semibold mb-4 text-white text-on-busy" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>Digital Mosaic Studios</h3>
            <p className="text-white text-opacity-90 text-sm mb-4 text-on-dark" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}>
              Helping startups and small businesses grow through innovative digital solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div 
            ref={quickLinksRef}
            className="col-span-1 gsap-will-change"
          >
            <h3 className="text-sm font-semibold mb-4 text-white text-on-busy" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="footer-link text-white text-opacity-90 text-sm hover:text-accent transition-colors duration-200 gsap-will-change text-on-dark"
                  style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="footer-link text-white text-opacity-90 text-sm hover:text-accent transition-colors duration-200 gsap-will-change text-on-dark"
                  style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="footer-link text-white text-opacity-90 text-sm hover:text-accent transition-colors duration-200 gsap-will-change text-on-dark"
                  style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="footer-link text-white text-opacity-90 text-sm hover:text-accent transition-colors duration-200 gsap-will-change text-on-dark"
                  style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="footer-link text-white text-opacity-90 text-sm hover:text-accent transition-colors duration-200 gsap-will-change text-on-dark"
                  style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div 
            ref={servicesRef}
            className="col-span-1 gsap-will-change"
          >
            <h3 className="text-sm font-semibold mb-4 text-white text-on-busy" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>Services</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/services#consultations" 
                  className="footer-link text-white text-opacity-90 text-sm hover:text-accent transition-colors duration-200 gsap-will-change text-on-dark"
                  style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
                >
                  Consultations
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#audits" 
                  className="footer-link text-white text-opacity-90 text-sm hover:text-accent transition-colors duration-200 gsap-will-change text-on-dark"
                  style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
                >
                  Audits
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#custom-saas-tools" 
                  className="footer-link text-white text-opacity-90 text-sm hover:text-accent transition-colors duration-200 gsap-will-change text-on-dark"
                  style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
                >
                  Custom SaaS Tools
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#web-design" 
                  className="footer-link text-white text-opacity-90 text-sm hover:text-accent transition-colors duration-200 gsap-will-change text-on-dark"
                  style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#analytics" 
                  className="footer-link text-white text-opacity-90 text-sm hover:text-accent transition-colors duration-200 gsap-will-change text-on-dark"
                  style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
                >
                  Analytics
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#ai-prompting-lessons" 
                  className="footer-link text-white text-opacity-90 text-sm hover:text-accent transition-colors duration-200 gsap-will-change text-on-dark"
                  style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
                >
                  AI Prompting Lessons
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div 
            ref={contactRef}
            className="col-span-1 gsap-will-change"
          >
            <h3 className="text-sm font-semibold mb-4 text-white text-on-busy" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>Contact Us</h3>
            <ul className="space-y-3 text-white text-opacity-90 text-sm text-on-dark">
              <li className="flex items-start" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-luxury-gold" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-semibold text-luxury-gold">Digital Mosaic Studios</div>
                  <div>Marietta, GA 30062</div>
                  <div className="text-xs opacity-80">Serving Atlanta, Georgia & Nationwide</div>
                </div>
              </li>
              <li className="flex items-start" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-luxury-gold" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-semibold">404-861-7744</span>
              </li>
              <li className="flex items-start" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-luxury-gold" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <Link 
                  href="/contact" 
                  className="text-luxury-gold hover:text-luxury-bronze transition-colors duration-200 font-semibold underline-effect"
                >
                  Use Contact Form
                </Link>
              </li>
            </ul>
            
            {/* Social Media Icons */}
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61578329544080" 
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-white text-opacity-90 hover:text-accent transition-colors duration-200 gsap-will-change"
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
                className="social-icon text-white text-opacity-90 hover:text-accent transition-colors duration-200 gsap-will-change"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div 
          ref={copyrightRef}
          className="mt-8 pt-8 border-t border-white border-opacity-20 text-center gsap-will-change"
        >
          <p className="text-white text-opacity-90 text-sm text-on-dark" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}>
            © {currentYear} <span className="text-accent font-semibold">Digital Mosaic Studios</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
