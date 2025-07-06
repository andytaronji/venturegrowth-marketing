'use client';

import { useEffect, useRef, useCallback } from 'react';
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
  description = "Let's work together to create a stunning digital presence that helps your business thrive. Serving high-value businesses nationwide across the United States.",
  buttons = [
    { text: "Get in Touch", href: "/contact", variant: "primary" },
    { text: "Explore Services", href: "/services", variant: "secondary" }
  ],
  backgroundGradient = true
}: EnhancedCTASectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsContainerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  const { gsap } = useGSAPAnimation();

  // Custom throttle function for performance
  const throttle = useCallback((func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout | null = null;
    let lastExecTime = 0;
    return (...args: any[]) => {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func(...args);
        lastExecTime = currentTime;
      } else {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func(...args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  }, []);

  // Throttled mouse move handler for performance
  const throttledMouseMove = useCallback(
    throttle((e: MouseEvent, button: HTMLElement) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(button, {
        x: x * 0.1,
        y: y * 0.1,
        rotationX: y * 0.05,
        rotationY: x * 0.05,
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
        transformPerspective: 1000
      });
    }, 16), // ~60fps
    [gsap, throttle]
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 30
      });

      gsap.set(buttonsContainerRef.current, {
        opacity: 0,
        y: 20
      });

      // Create main entrance timeline
      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          markers: false
        }
      });

      // Animate content entrance
      mainTimeline
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        })
        .to(descriptionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        }, '-=0.4')
        .to(buttonsContainerRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        }, '-=0.3');

      // Background gradient animation (if enabled)
      if (backgroundGradient && backgroundRef.current) {
        gsap.to(backgroundRef.current, {
          backgroundPosition: '200% center',
          duration: 8,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });
      }

      // Setup magnetic button effects
      const magneticButtons = buttonsContainerRef.current?.querySelectorAll('.js-tilt-btn');
      
      if (magneticButtons) {
        magneticButtons.forEach((button) => {
          const buttonElement = button as HTMLElement;
          
          const handleMouseEnter = () => {
            gsap.to(buttonElement, {
              scale: 1.02,
              duration: 0.3,
              ease: 'power2.out'
            });
          };

          const handleMouseMove = (e: MouseEvent) => {
            throttledMouseMove(e, buttonElement);
          };

          const handleMouseLeave = () => {
            gsap.to(buttonElement, {
              x: 0,
              y: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              duration: 0.5,
              ease: 'power2.out'
            });
          };

          // Add event listeners
          buttonElement.addEventListener('mouseenter', handleMouseEnter);
          buttonElement.addEventListener('mousemove', handleMouseMove);
          buttonElement.addEventListener('mouseleave', handleMouseLeave);

          // Store cleanup functions
          buttonElement.dataset.cleanup = 'true';
        });
      }

    }, sectionRef);

    return () => {
      // Cleanup magnetic button event listeners
      const magneticButtons = buttonsContainerRef.current?.querySelectorAll('.js-tilt-btn');
      if (magneticButtons) {
        magneticButtons.forEach((button) => {
          const buttonElement = button as HTMLElement;
          if (buttonElement.dataset.cleanup) {
            buttonElement.removeEventListener('mouseenter', () => {});
            buttonElement.removeEventListener('mousemove', () => {});
            buttonElement.removeEventListener('mouseleave', () => {});
          }
        });
      }
      
      ctx.revert();
    };
  }, [gsap, throttledMouseMove, backgroundGradient]);

  const backgroundClasses = backgroundGradient
    ? "bg-gradient-to-br from-primary via-secondary to-primary"
    : "bg-primary";

  return (
    <section 
      ref={sectionRef}
      className="js-pin py-16 md:py-24 text-light z-index-section overflow-hidden"
    >
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-index-content">
        <h2 
          ref={titleRef}
          className="js-fade-up-cta text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white text-on-busy gsap-will-change"
          style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
        >
          {title}
        </h2>
        
        <p 
          ref={descriptionRef}
          className="js-fade-up-cta text-xl md:text-2xl text-white text-on-busy mb-8 max-w-3xl mx-auto gsap-will-change"
          style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
        >
          {description}
        </p>
        
        <div 
          ref={buttonsContainerRef}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 gsap-will-change"
        >
          {buttons.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={`
                js-tilt-btn px-8 py-4 font-medium rounded-md transition-all duration-200 
                gsap-will-change gsap-hardware-accel relative overflow-hidden
                ${button.variant === 'primary' 
                  ? 'bg-accent text-white hover:bg-light-accent hover:text-white hover:shadow-lg' 
                  : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary hover:border-white'
                }
              `}
              style={{ transformStyle: 'preserve-3d' }}
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
