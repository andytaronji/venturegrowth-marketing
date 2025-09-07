'use client';

import { useEffect, useRef } from 'react';

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Proven ROI',
      description: 'Our startup and small business clients see remarkable growth: 3x increase in demo signups for tech startups, 40% sales growth for retailers, and doubled inbound leads in 60 days.',
      stat: '3x Demo Signups'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z" />
        </svg>
      ),
      title: 'Industry Expertise',
      description: 'Specialized knowledge in SaaS, e-commerce, professional services, and real estate marketing. We understand your growth challenges, customer acquisition costs, and scaling strategies.',
      stat: '100+ Growing Businesses'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Fast Turnaround',
      description: 'Most projects launch within 2-4 weeks. We know startups and growing businesses can\'t wait months for results—you need marketing that drives growth now.',
      stat: '2-4 Week Launch'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Custom Solutions',
      description: 'No cookie-cutter approaches. Every strategy, website, and tool is built specifically for your business goals and market position.',
      stat: '100% Custom Built'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Exclusive Support',
      description: 'Direct access to our team via phone, email, and monthly strategy calls. No outsourced support—you work directly with marketing experts.',
      stat: 'Direct Expert Access'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Data-Driven Results',
      description: 'Every decision backed by analytics. Monthly reports show exactly how your marketing investment translates to leads, calls, and revenue.',
      stat: 'Monthly Performance Reports'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate in when scrolling down and reaching trigger point
            // First animate the header
            if (headerRef.current) {
              headerRef.current.classList.add('is-visible');
            }
            
            // Then animate the cards with a delay to ensure header completes first
            setTimeout(() => {
              const cards = entry.target.querySelectorAll('.animate-card');
              cards.forEach((card) => {
                card.classList.add('is-visible');
              });
              
              // No need to dispatch events - pop-in animation is now automatic on scroll
            }, 600); // 600ms delay after header starts animating to ensure it completes
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
      className="section-padding bg-luxury-navy bg-opacity-10"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div ref={headerRef} className="section-header animate-header text-center mb-12 md:mb-16">
          <h2 className="font-figtree text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Why Small Businesses & Startups Choose Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-4xl mx-auto font-figtree leading-relaxed">
            We're not just another marketing agency. We're specialists who understand the unique challenges and opportunities in <span className="text-accent font-semibold">tech startups</span>, <span className="text-accent font-semibold">SaaS platforms</span>, <span className="text-accent font-semibold">professional services</span>, and <span className="text-accent font-semibold">e-commerce</span>.
          </p>
        </div>
        
        <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="animate-card benefit-card bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-accent hover:border-opacity-40 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-4 md:mb-6">
                <div className="p-2 md:p-3 bg-accent bg-opacity-10 rounded-lg mr-3 md:mr-4 flex-shrink-0">
                  {benefit.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-figtree text-lg md:text-xl font-bold text-primary mb-1">
                    {benefit.title}
                  </h3>
                  <div className="text-accent text-sm font-semibold font-figtree">
                    {benefit.stat}
                  </div>
                </div>
              </div>
              
              <p className="text-sm md:text-base text-gray-600 font-figtree leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
