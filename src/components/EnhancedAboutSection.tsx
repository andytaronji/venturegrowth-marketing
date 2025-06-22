'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import CldImageWrapper from './CldImageWrapper';
import { useGSAPAnimation } from './GSAPProvider';

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface EnhancedAboutSectionProps {
  title?: string;
  description?: string;
  features?: FeatureItem[];
  ctaText?: string;
  ctaLink?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const EnhancedAboutSection = ({
  title = "Why Choose Digital Mosaic Studios?",
  description = "At Digital Mosaic Studios, we're dedicated to helping businesses establish a powerful online presence that drives growth and success.",
  features = [
    {
      title: "Expert Strategies",
      description: "Custom strategies designed specifically for your business goals, with deep knowledge of your market and target audience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Expert Team",
      description: "Skilled professionals with extensive experience in web design, development, and digital marketing.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Results-Driven Approach",
      description: "Focus on delivering measurable results that contribute to your business growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    }
  ],
  ctaText = "Learn More About Us",
  ctaLink = "/about",
  imageSrc = "samples/people/kitchen-bar",
  imageAlt = "About Digital Mosaic Studios"
}: EnhancedAboutSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const featureListRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  const { gsap } = useGSAPAnimation();

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states for text elements
      gsap.set([titleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 20
      });

      gsap.set(ctaRef.current, {
        opacity: 0,
        y: 20
      });

      // Set initial states for feature items
      const featureItems = featureListRef.current?.querySelectorAll('.js-fade-up-item');
      if (featureItems) {
        gsap.set(featureItems, {
          opacity: 0,
          y: 20
        });
      }

      // Set initial state for image
      gsap.set(imageContainerRef.current, {
        opacity: 0,
        scale: 0.95
      });

      // Create main timeline
      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse',
          markers: false
        }
      });

      // Animate title and description
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
        }, '-=0.4');

      // Staggered animation for feature items
      if (featureItems && featureItems.length > 0) {
        mainTimeline.to(featureItems, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1
        }, '-=0.3');
      }

      // Animate CTA button
      mainTimeline.to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.2');

      // Animate image
      mainTimeline.to(imageContainerRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.6');

      // Image parallax effect
      gsap.to(imageContainerRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          markers: false
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <section 
      ref={sectionRef}
      className="js-pin py-16 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              ref={titleRef}
              className="js-fade-up-text text-3xl md:text-4xl font-bold text-primary mb-6 gsap-will-change"
            >
              {title}
            </h2>
            
            <p 
              ref={descriptionRef}
              className="js-fade-up-text text-lg text-secondary mb-6 gsap-will-change"
            >
              {description}
            </p>
            
            <div ref={featureListRef} className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="js-fade-up-item flex items-start gsap-will-change"
                >
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
                    <p className="text-secondary text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div ref={ctaRef} className="mt-8 gsap-will-change">
              <Link 
                href={ctaLink}
                className="inline-block px-6 py-3 border border-accent text-accent font-medium rounded-md hover:bg-accent hover:text-white hover:border-accent transition-colors duration-200 transform hover:scale-105"
              >
                {ctaText}
              </Link>
            </div>
          </div>
          
          <div className="relative h-96 w-full">
            <div 
              ref={imageContainerRef}
              className="js-parallax-img relative h-full w-full gsap-will-change gsap-hardware-accel"
            >
              <CldImageWrapper
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={600}
                crop="fit"
                gravity="auto"
                quality="auto:best"
                className="rounded-lg shadow-subtle absolute inset-0 w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAboutSection;
