'use client';

import { useEffect, useRef } from 'react';
import EnhancedServiceCard from './EnhancedServiceCard';
import { useGSAPAnimation } from './GSAPProvider';

const EnhancedServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { gsap } = useGSAPAnimation();

  const services = [
    {
      id: 'marketing-consultations',
      title: 'Marketing Consultations',
      description: 'Unlock your business\'s growth potential with tailored marketing consultations. We work closely with small businesses and startups to identify your unique market position, define your most profitable customer segments, and map out actionable strategies for scalable success.',
      icon: '/globe.svg',
      industries: ['Startups', 'Small Businesses', 'Growth Strategy'],
      perfectFor: 'Startups needing a go-to-market plan, small businesses seeking to break out of a plateau, or founders ready to scale with confidence.'
    },
    {
      id: 'marketing-audits',
      title: 'Comprehensive Marketing Audits',
      description: 'Make every marketing dollar count. Our audits dive deep into your current strategies—website, SEO, advertising, and analytics—pinpointing what\'s working, what isn\'t, and where you can maximize ROI.',
      icon: '/file.svg',
      industries: ['ROI Optimization', 'Performance Analysis', 'Strategy Review'],
      perfectFor: 'Businesses with limited budgets, teams looking for quick wins, or anyone wanting to optimize for measurable results.'
    },
    {
      id: 'custom-saas-tools',
      title: 'Custom SaaS Tools',
      description: 'Supercharge your operations with bespoke SaaS solutions. We build tools that automate repetitive tasks, streamline lead tracking, and deliver powerful insights—customized for your industry and business model.',
      icon: '/file.svg',
      industries: ['Automation', 'Lead Tracking', 'Custom Dashboards'],
      perfectFor: 'Startups scaling fast, businesses juggling multiple channels, or teams seeking a competitive edge through automation.'
    },
    {
      id: 'web-design',
      title: 'Custom Responsive Web Design',
      description: 'Your website is your first impression—make it count. We create conversion-focused, mobile-friendly sites that reflect your brand, engage your audience, and turn visitors into loyal customers.',
      icon: '/globe.svg',
      industries: ['Web Development', 'Brand Identity', 'Conversion Optimization'],
      perfectFor: 'New businesses, rebrands, or anyone ready to level up their digital presence.'
    },
    {
      id: 'analytics',
      title: 'Data-Driven Analytics & Insights',
      description: 'Stop guessing—start growing. We set up robust analytics, track your KPIs, and deliver clear, actionable reports so you always know what\'s driving results.',
      icon: '/file.svg',
      industries: ['Performance Tracking', 'KPI Monitoring', 'Growth Analytics'],
      perfectFor: 'Founders who want to make smarter decisions, teams tired of "vanity metrics," or businesses ready to scale what works.'
    },
    {
      id: 'ai-prompting-lessons',
      title: 'AI Prompting Lessons',
      description: 'Harness the power of AI for your business. Our hands-on training sessions teach you and your team to use ChatGPT, Gemini, and other AI tools for marketing, content creation, and workflow automation.',
      icon: '/globe.svg',
      industries: ['AI Training', 'Productivity', 'Competitive Advantage'],
      perfectFor: 'Teams new to AI, founders seeking a competitive edge, or anyone ready to unlock next-level productivity.'
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
          <h2 className="font-luxury-serif text-luxury-title md:text-5xl font-bold text-white mb-6">
            Premium Marketing Solutions
          </h2>
          <p className="text-luxury-body md:text-xl text-white max-w-4xl mx-auto font-luxury-sans leading-relaxed">
            Specialized services designed for <span className="text-accent font-semibold">startups</span>, <span className="text-accent font-semibold">small businesses</span>, and <span className="text-accent font-semibold">growing companies</span> who demand excellence and measurable results.
          </p>
          <div className="mt-8">
            <p className="text-lg text-white opacity-90 font-luxury-sans">
              From strategy to execution, we deliver luxury-level marketing that drives real growth for ambitious entrepreneurs across Atlanta, Georgia, and nationwide.
            </p>
          </div>
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
