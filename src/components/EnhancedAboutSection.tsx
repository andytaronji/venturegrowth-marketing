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
      className="py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              {title}
            </h2>
            
            <p 
              className="text-lg text-white mb-6"
              style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
            >
              {description}
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-white" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>{feature.title}</h3>
                    <p className="text-white text-opacity-90 text-sm" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Link 
                href={ctaLink}
                className="inline-block px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-light-accent hover:text-white transition-colors duration-200 transform hover:scale-105"
              >
                {ctaText}
              </Link>
            </div>
          </div>
          
          <div className="relative h-96 w-full">
            <div className="relative h-full w-full">
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
