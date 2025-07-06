'use client';

import { useEffect, useRef } from 'react';
import CldImageWrapper from './CldImageWrapper';
import { useGSAPAnimation } from './GSAPProvider';

interface ServiceFeature {
  title: string;
  description: string;
}

interface EnhancedServiceDetailSectionProps {
  id?: string;
  title: string;
  description: string;
  features: ServiceFeature[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: 'white' | 'secondary';
  imageCrop?: 'fit' | 'fill';
  imageGravity?: 'auto' | 'center' | 'face';
  imageObjectFit?: 'contain' | 'cover';
}

const EnhancedServiceDetailSection = ({
  id,
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  backgroundColor = 'white',
  imageCrop = 'fit',
  imageGravity = 'auto',
  imageObjectFit = 'contain'
}: EnhancedServiceDetailSectionProps) => {
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

  const textColor = 'text-white';
  const descColor = 'text-white text-opacity-90';
  const featureTextColor = 'text-white';
  const featureDescColor = 'text-white text-opacity-80';

  return (
    <section 
      id={id}
      ref={sectionRef}
      className="py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={imagePosition === 'left' ? 'order-2 md:order-2' : 'order-1 md:order-1'}>
            <h2 className={`text-3xl font-bold ${textColor} mb-6`}>
              {title}
            </h2>
            <p className={`text-lg ${descColor} mb-6`}>
              {description}
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
                    <h3 className={`text-lg font-semibold ${featureTextColor}`}>{feature.title}</h3>
                    <p className={`${featureDescColor} text-sm`}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className={`relative h-96 w-full ${
              imagePosition === 'left' ? 'order-1 md:order-1' : 'order-2 md:order-2'
            }`}>
            <div className="relative h-full w-full overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <CldImageWrapper
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={600}
                crop={imageCrop}
                gravity={imageGravity}
                quality="auto:best"
                className={`rounded-lg shadow-subtle absolute inset-0 w-full h-full ${
                  imageObjectFit === 'contain' ? 'object-contain' : 'object-cover'
                }`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServiceDetailSection;
