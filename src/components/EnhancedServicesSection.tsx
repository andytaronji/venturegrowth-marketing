'use client';

import { useEffect, useRef } from 'react';
import EnhancedServiceCard from './EnhancedServiceCard';
import { useGSAPAnimation } from './GSAPProvider';

const EnhancedServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  const { gsap } = useGSAPAnimation();

  const services = [
    {
      id: 'marketing-consulting',
      title: 'Marketing Consulting',
      description: 'Strategic marketing guidance to accelerate your business growth and market positioning.',
      icon: '/globe.svg'
    },
    {
      id: 'web-design',
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
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 30
      });

      // Create timeline for section header
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.3');

    }, sectionRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-bg-tertiary"
      data-gsap="fade-up"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-primary mb-4 gsap-will-change"
            data-gsap="fade-up"
          >
            Our Services
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl text-secondary max-w-3xl mx-auto gsap-will-change"
            data-gsap="fade-up"
            data-gsap-delay="0.2"
          >
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
