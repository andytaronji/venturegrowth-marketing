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
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const { gsap } = useGSAPAnimation();

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 30
      });

      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 20
      });

      // Set initial states for feature items
      const featureItems = featuresRef.current?.querySelectorAll('.feature-item');
      if (featureItems) {
        gsap.set(featureItems, {
          opacity: 0,
          x: imagePosition === 'left' ? 30 : -30,
          y: 20
        });
      }

      // Create main timeline
      const serviceTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse',
          markers: false
        }
      });

      // Animate content
      serviceTimeline
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
        .to(imageRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.5');

      // Animate features with stagger
      if (featureItems && featureItems.length > 0) {
        serviceTimeline.to(featureItems, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1
        }, '-=0.4');
      }

      // Add hover effect for image
      if (imageRef.current) {
        const imageContainer = imageRef.current.querySelector('.service-image');
        if (imageContainer) {
          imageContainer.addEventListener('mouseenter', () => {
            gsap.to(imageContainer, {
              scale: 1.05,
              duration: 0.3,
              ease: 'power2.out'
            });
          });

          imageContainer.addEventListener('mouseleave', () => {
            gsap.to(imageContainer, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out'
            });
          });
        }
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, imagePosition]);

  const textColor = 'text-white';
  const descColor = 'text-white text-opacity-90';
  const featureTextColor = 'text-white';
  const featureDescColor = 'text-white text-opacity-80';

  return (
    <section 
      id={id}
      ref={sectionRef}
      className="py-16 md:py-24 z-index-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={imagePosition === 'left' ? 'order-2 md:order-2' : 'order-1 md:order-1'}>
            <h2 
              ref={titleRef}
              className={`text-3xl font-bold ${textColor} mb-6 gsap-will-change`}
            >
              {title}
            </h2>
            <p 
              ref={descriptionRef}
              className={`text-lg ${descColor} mb-6 gsap-will-change`}
            >
              {description}
            </p>
            
            <div 
              ref={featuresRef}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <div key={index} className="feature-item flex items-start gsap-will-change">
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
          <div 
            ref={imageRef}
            className={`relative h-96 w-full gsap-will-change ${
              imagePosition === 'left' ? 'order-1 md:order-1' : 'order-2 md:order-2'
            }`}
          >
            <div className="service-image relative h-full w-full overflow-hidden rounded-lg">
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
