'use client';

import { useEffect, useRef } from 'react';
import EnhancedServiceCard from './EnhancedServiceCard';
import { useGSAPAnimation } from './GSAPProvider';

const EnhancedServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { gsap } = useGSAPAnimation();

  const services = [
    {
      id: 'consultations',
      title: 'Consultations',
      description: 'Expert marketing consultations to help you develop effective strategies and grow your business.',
      icon: '/globe.svg'
    },
    {
      id: 'audits',
      title: 'Audits',
      description: 'Comprehensive marketing audits to identify opportunities and areas for improvement in your current strategy.',
      icon: '/file.svg'
    },
    {
      id: 'custom-saas-tools',
      title: 'Custom SaaS Tools',
      description: 'Take control and dominate your industry with custom tools built specifically to your industry and service offerings.',
      icon: '/file.svg'
    },
    {
      id: 'web-design',
      title: 'Web Design',
      description: 'Custom, responsive websites that convert visitors into customers and reflect your brand.',
      icon: '/globe.svg'
    },
    {
      id: 'analytics',
      title: 'Analytics',
      description: 'Data-driven insights and analytics to help you make informed marketing decisions and track performance.',
      icon: '/file.svg'
    },
    {
      id: 'ai-prompting-lessons',
      title: 'AI Prompting Lessons',
      description: 'Learn how to effectively communicate with AI tools to maximize productivity and achieve better results.',
      icon: '/globe.svg'
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
            Whether it's a consultation with one of our marketing experts, an audit to find ways to improve your marketing, or a custom-built solution (SaaS), we are here to help.
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
