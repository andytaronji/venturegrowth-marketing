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
      description: 'Expert marketing consultations from our Atlanta-based team to help Marietta and Georgia businesses develop effective strategies and drive real growth.',
      icon: '/globe.svg'
    },
    {
      id: 'audits',
      title: 'Audits',
      description: 'Comprehensive marketing audits to identify opportunities and outperform your competition in Atlanta, Marietta, and throughout Georgia.',
      icon: '/file.svg'
    },
    {
      id: 'custom-saas-tools',
      title: 'Custom SaaS Tools',
      description: 'Industry-specific SaaS solutions built for Atlanta businesses, from accountants to retailers, designed to dominate your market.',
      icon: '/file.svg'
    },
    {
      id: 'web-design',
      title: 'Web Design',
      description: 'Custom, responsive websites that convert visitors into customers for Atlanta and Georgia businesses, optimized for local SEO.',
      icon: '/globe.svg'
    },
    {
      id: 'analytics',
      title: 'Analytics',
      description: 'Data-driven insights using Google Analytics and custom dashboards to help Atlanta and Georgia businesses make informed decisions.',
      icon: '/file.svg'
    },
    {
      id: 'ai-prompting-lessons',
      title: 'AI Prompting Lessons',
      description: 'Learn AI tools for marketing and workflow automation through local workshops and virtual sessions for Georgia businesses.',
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
