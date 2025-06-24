'use client';

import { useEffect, useRef } from 'react';
import { useGSAPAnimation } from './GSAPProvider';

const EnhancedMissionValuesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  
  const { gsap } = useGSAPAnimation();

  const values = [
    {
      title: 'Excellence',
      description: "We're committed to delivering the highest quality work in everything we do, from website design to content creation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Partnership',
      description: 'We view our clients as partners, working collaboratively to achieve their business goals and vision.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Innovation',
      description: 'We stay at the forefront of digital trends and technologies to provide cutting-edge solutions for our clients.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
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

      // Set initial states for value cards
      const valueCards = cardsContainerRef.current?.querySelectorAll('.value-card');
      if (valueCards) {
        gsap.set(valueCards, {
          opacity: 0,
          y: 30
        });
      }

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

      // Staggered animation for value cards
      if (valueCards && valueCards.length > 0) {
        tl.to(valueCards, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.15
        }, '-=0.2');
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-bg-secondary"
      data-gsap="fade-up"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-white mb-4 gsap-will-change text-on-dark"
            data-gsap="fade-up"
          >
            Our Mission & Values
          </h2>
          <p 
            ref={subtitleRef}
            className="text-lg text-white max-w-3xl mx-auto gsap-will-change text-on-dark"
            data-gsap="fade-up"
            data-gsap-delay="0.2"
          >
            At Digital Mosaic Studios, we're guided by a set of core values that inform everything we do.
          </p>
        </div>
        
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="value-card bg-white rounded-lg shadow-subtle p-8 border border-bg-secondary gsap-will-change"
              data-gsap="fade-up"
              data-gsap-delay={0.1 * index}
            >
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center bg-bg-secondary rounded-full">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary text-center mb-4">
                {value.title}
              </h3>
              <p className="text-secondary text-sm text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedMissionValuesSection;
