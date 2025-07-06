'use client';

import { useEffect, useRef } from 'react';
import CldImageWrapper from './CldImageWrapper';
import { useGSAPAnimation } from './GSAPProvider';

interface WhyChooseUsFeature {
  title: string;
  description: string;
}

interface EnhancedWhyChooseUsSectionProps {
  title?: string;
  description?: string;
  features?: WhyChooseUsFeature[];
  imageSrc?: string;
  imageAlt?: string;
}

const EnhancedWhyChooseUsSection = ({
  title = "Why Choose Us",
  description = "At Digital Mosaic Studios, we stand out from other agencies in several key ways:",
  features = [
    {
      title: "Comprehensive Services",
      description: "We offer end-to-end digital solutions, eliminating the need to work with multiple agencies."
    },
    {
      title: "Tailored Approach",
      description: "We develop customized strategies based on your unique business goals and target audience."
    },
    {
      title: "Results-Driven",
      description: "We focus on delivering measurable results that contribute to your business growth."
    },
    {
      title: "Transparent Communication",
      description: "We maintain open, honest communication throughout every project."
    }
  ],
  imageSrc = "samples/imagecon-group",
  imageAlt = "Why Choose Digital Mosaic Studios"
}: EnhancedWhyChooseUsSectionProps) => {
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
          x: -30,
          y: 20
        });
      }

      // Create main timeline
      const whyChooseTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse',
          markers: false
        }
      });

      // Animate content
      whyChooseTimeline
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
        whyChooseTimeline.to(featureItems, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1
        }, '-=0.4');
      }

      // Add hover effects for feature items
      if (featureItems) {
        featureItems.forEach((item) => {
          const itemElement = item as HTMLElement;
          const icon = itemElement.querySelector('.feature-icon');
          
          itemElement.addEventListener('mouseenter', () => {
            gsap.to(itemElement, {
              x: 5,
              duration: 0.3,
              ease: 'power2.out'
            });
            
            if (icon) {
              gsap.to(icon, {
                scale: 1.1,
                rotation: 5,
                duration: 0.3,
                ease: 'power2.out'
              });
            }
          });

          itemElement.addEventListener('mouseleave', () => {
            gsap.to(itemElement, {
              x: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
            
            if (icon) {
              gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
              });
            }
          });
        });
      }

      // Add hover effect for image
      if (imageRef.current) {
        const imageContainer = imageRef.current.querySelector('.why-choose-image');
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
  }, [gsap]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 z-index-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            ref={imageRef}
            className="order-2 md:order-1 relative h-96 w-full gsap-will-change"
          >
            <div className="why-choose-image relative h-full w-full overflow-hidden rounded-lg">
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
          
          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 
              ref={titleRef}
              className="text-3xl font-bold text-white mb-6 gsap-will-change"
            >
              {title}
            </h2>
            <p 
              ref={descriptionRef}
              className="text-lg text-white mb-6 gsap-will-change"
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
                    <div className="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-white text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedWhyChooseUsSection;
