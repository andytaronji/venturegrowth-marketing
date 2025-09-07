'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import CldImageWrapper from './CldImageWrapper';

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
  description = "Based in Marietta and serving Atlanta, Georgia, and beyond, we work closely with our clients to deliver exclusive marketing experiences that are result-oriented and tailored to their specific needs. Our unique approach combines local market knowledge with cutting-edge digital strategies.",
  features = [
    {
      title: "Expert Strategies",
      description: "• Proven track record with Atlanta startups and Georgia businesses\n• Custom strategies designed for your specific market and audience\n• Deep knowledge of local competition and market dynamics",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Expert Team",
      description: "• Certified in leading marketing platforms (Google, Facebook, HubSpot)\n• Extensive experience in web design, development, and digital marketing\n• Local team with deep understanding of Georgia business landscape",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Results-Driven Approach",
      description: "• Focus on measurable ROI and business growth metrics\n• Data-driven strategies with regular performance reporting\n• Transparent communication and accountability throughout projects",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    }
  ],
  ctaText = "Learn More About Us",
  ctaLink = "/about",
  imageSrc = "https://res.cloudinary.com/di4phdven/image/upload/v1752188902/u9524928111_glass_capsule_luxury_clothing_studio_ghibli_beach_43c21d6e-d75f-46ef-95b2-331e3eb6e258_0_zts6p1.png",
  imageAlt = "About Digital Mosaic Studios"
}: EnhancedAboutSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger advanced animations immediately
            entry.target.classList.add('start-animation');
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
      className="section-padding"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div ref={headerRef} className="section-header text-center mb-16">
          <div className="reveal-mask mb-6">
            <h2 
              className="animate-slide-up font-figtree text-luxury-title md:text-5xl font-bold text-white"
              style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', transitionDelay: '0.1s' }}
            >
              {title}
            </h2>
          </div>
          
          <div className="reveal-mask">
            <p 
              className="animate-slide-up text-luxury-body md:text-xl text-white max-w-4xl mx-auto font-figtree leading-relaxed"
              style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)', transitionDelay: '0.3s' }}
            >
              {description}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="reveal-mask">
                <div 
                  className="animate-slide-in bg-white/10 backdrop-blur-sm rounded-xl shadow-luxury overflow-hidden hover:shadow-luxury-hover transition-all duration-300"
                  style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="gradient-border-card-content">
                    <div className="p-6 text-center">
                      <h3 
                        className="text-xl md:text-2xl font-bold text-white font-figtree mb-3" 
                        style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                      >
                        {feature.title}
                      </h3>
                      <div 
                        className="text-base text-white text-opacity-90 font-figtree leading-relaxed" 
                        style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)' }}
                      >
                        {feature.description.split('\n').map((line, idx) => (
                          <div key={idx} className="mb-2">{line}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative h-96 w-full">
            <CldImageWrapper
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={600}
              crop="fit"
              gravity="auto"
              quality="auto:best"
              className="animate-image-reveal rounded-lg shadow-subtle absolute inset-0 w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ transitionDelay: '1.5s' }}
            />
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href={ctaLink}
            className="animate-button inline-block px-8 py-4 bg-accent text-white font-medium font-figtree rounded-full hover:bg-light-accent hover:text-white transition-colors duration-200 transform hover:scale-105 shadow-button hover:shadow-button-hover"
            style={{ transitionDelay: '0.9s' }}
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAboutSection;
