'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import CldVideoWrapper from './CldVideoWrapper';
import { useGSAPAnimation } from './GSAPProvider';

const EnhancedHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  const { gsap, animateElements, staggerElements } = useGSAPAnimation();

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current], {
        opacity: 0,
        y: 30
      });
      
      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 20
      });

      // Background parallax setup
      gsap.set(backgroundRef.current, {
        y: 0
      });

      // Create timeline for entrance animations
      const tl = gsap.timeline({ delay: 0.2 });

      // Animate title
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      })
      // Animate subtitle
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.4')
      // Animate buttons
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.3')
      // Animate image
      .to(imageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.6');

      // Background parallax on scroll
      gsap.to(backgroundRef.current, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Image hover effect
      if (imageRef.current) {
        const imageElement = imageRef.current;
        
        imageElement.addEventListener('mouseenter', () => {
          gsap.to(imageElement, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        imageElement.addEventListener('mouseleave', () => {
          gsap.to(imageElement, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      }

    }, heroRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <div ref={heroRef} className="relative bg-white text-primary overflow-hidden mt-12 md:mt-14">
      {/* Enhanced background with parallax */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-bg-secondary opacity-50"
      >
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23000000" fill-opacity="0.05"%3E%3Cpath d="M0 0h20v20H0z"/%3E%3C/g%3E%3C/svg%3E")', 
            backgroundSize: '20px 20px'
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary gsap-will-change"
              data-gsap="fade-up"
            >
              Marketing Consulting & Web Design Agency Across the United States
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-secondary mb-8 max-w-xl gsap-will-change"
              data-gsap="fade-up"
              data-gsap-delay="0.2"
            >
              Data - it keeps the world turning. Discover key insights about your industry today in one of our expert marketing consultations!
            </p>
            
            <div 
              ref={buttonsRef}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 gsap-will-change"
              data-gsap="fade-up"
              data-gsap-delay="0.4"
            >
              <Link 
                href="/services" 
                className="px-8 py-3 bg-accent text-white font-medium rounded-md hover:bg-light-accent hover:text-white transition-colors duration-200 text-center transform hover:scale-105 transition-transform"
              >
                Our Services
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-transparent border border-accent text-accent font-medium rounded-md hover:bg-accent hover:text-white transition-colors duration-200 text-center transform hover:scale-105 transition-transform"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div 
              ref={imageRef}
              className="relative h-96 w-full gsap-will-change gsap-hardware-accel"
              data-gsap="scale-in"
              data-gsap-delay="0.6"
            >
              <CldVideoWrapper
                src="https://res.cloudinary.com/di4phdven/video/upload/v1751454396/Data1_gmpujr.mp4"
                alt="Business Growth and Analytics Video"
                className="rounded-lg shadow-subtle absolute inset-0 w-full h-full object-cover"
                loop={true}
                autoplay={true}
                muted={true}
                controls={false}
                playsInline={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHero;
