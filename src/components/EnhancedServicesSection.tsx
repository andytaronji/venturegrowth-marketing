'use client';

import { useEffect, useRef } from 'react';
import EnhancedServiceCard from './EnhancedServiceCard';

const EnhancedServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

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
              
              // Dispatch completion event after all animations finish
              // Calculate total animation time: 600ms initial delay + 1100ms last card delay + 500ms animation duration
              setTimeout(() => {
                const completionEvent = new CustomEvent('servicesAnimationComplete', {
                  detail: { sectionId: 'enhanced-services' }
                });
                window.dispatchEvent(completionEvent);
              }, 1600); // Total time for all cards to complete their animations
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

  const services = [
    {
      id: 'marketing-consultations',
      title: 'Marketing Consultations',
      description: 'Unlock your business\'s growth potential with tailored marketing consultations. We work closely with small businesses and startups to identify your unique market position, define your most profitable customer segments, and map out actionable strategies for scalable success.',
      industries: ['Startups', 'Small Businesses', 'Growth Strategy'],
      perfectFor: 'Startups needing a go-to-market plan, small businesses seeking to break out of a plateau, or founders ready to scale with confidence.'
    },
    {
      id: 'marketing-audits',
      title: 'Comprehensive Marketing Audits',
      description: 'Make every marketing dollar count. Our audits dive deep into your current strategies—website, SEO, advertising, and analytics—pinpointing what\'s working, what isn\'t, and where you can maximize ROI.',
      industries: ['ROI Optimization', 'Performance Analysis', 'Strategy Review'],
      perfectFor: 'Businesses with limited budgets, teams looking for quick wins, or anyone wanting to optimize for measurable results.'
    },
    {
      id: 'custom-saas-tools',
      title: 'Custom SaaS Tools',
      description: 'Supercharge your operations with bespoke SaaS solutions. We build tools that automate repetitive tasks, streamline lead tracking, and deliver powerful insights—customized for your industry and business model.',
      industries: ['Automation', 'Lead Tracking', 'Custom Dashboards'],
      perfectFor: 'Startups scaling fast, businesses juggling multiple channels, or teams seeking a competitive edge through automation.'
    },
    {
      id: 'web-design',
      title: 'Custom Responsive Web Design',
      description: 'Your website is your first impression—make it count. We create conversion-focused, mobile-friendly sites that reflect your brand, engage your audience, and turn visitors into loyal customers.',
      industries: ['Web Development', 'Brand Identity', 'Conversion Optimization'],
      perfectFor: 'New businesses, rebrands, or anyone ready to level up their digital presence.'
    },
    {
      id: 'analytics',
      title: 'Data-Driven Analytics & Insights',
      description: 'Stop guessing—start growing. We set up robust analytics, track your KPIs, and deliver clear, actionable reports so you always know what\'s driving results.',
      industries: ['Performance Tracking', 'KPI Monitoring', 'Growth Analytics'],
      perfectFor: 'Founders who want to make smarter decisions, teams tired of "vanity metrics," or businesses ready to scale what works.'
    },
    {
      id: 'ai-prompting-lessons',
      title: 'AI Prompting Lessons',
      description: 'Harness the power of AI for your business. Our hands-on training sessions teach you and your team to use ChatGPT, Gemini, and other AI tools for marketing, content creation, and workflow automation.',
      industries: ['AI Training', 'Productivity', 'Competitive Advantage'],
      perfectFor: 'Teams new to AI, founders seeking a competitive edge, or anyone ready to unlock next-level productivity.'
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div ref={headerRef} className="section-header animate-header text-center mb-12 md:mb-16">
          <h2 className="font-figtree text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Your Partner in Marketing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-4xl mx-auto font-figtree leading-relaxed px-4">
            Think of us as the <span className="text-accent font-semibold">marketing team</span> for your small business. Driving <span className="text-accent font-semibold">real results</span> at a <span className="text-accent font-semibold">realistic cost</span>.
          </p>
          <div className="mt-6 md:mt-8">
            <p className="text-sm sm:text-base md:text-lg text-white opacity-90 font-figtree px-4">
              Select from one of our many marketing services <span className="text-accent font-semibold">designed to help your business idea become a reality</span>.
            </p>
          </div>
        </div>
        
        <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <EnhancedServiceCard
              key={service.id}
              title={service.title}
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
