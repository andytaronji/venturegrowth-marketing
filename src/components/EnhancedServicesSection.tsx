'use client';

import { useEffect, useRef } from 'react';
import EnhancedServiceCard from './EnhancedServiceCard';
import { useGSAPAnimation } from './GSAPProvider';

const EnhancedServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { gsap } = useGSAPAnimation();

  const services = [
    {
      id: 'custom-saas-tools',
      title: 'Custom SaaS Tools',
      description: 'Take control and dominate your industry with custom tools built specifically to your industry and service offerings.',
      icon: '/globe.svg'
    },
    {
      id: 'website-development',
      title: 'Web Design',
      description: 'Custom, responsive websites that convert visitors into customers and reflect your brand.',
      icon: '/window.svg'
    },
    {
      id: 'competitor-analysis',
      title: 'Competitor Analysis',
      description: 'In-depth analysis of your competition to identify opportunities and strategic advantages.',
      icon: '/file.svg'
    }
  ];

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
      className="section-padding"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Comprehensive marketing solutions designed to drive growth and maximize your business potential
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <EnhancedServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              id={service.id}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesSection;
