'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useGSAPAnimation } from './GSAPProvider';

interface EnhancedServiceCardProps {
  title: string;
  description: string;
  icon: string;
  id: string;
  index?: number;
}

const EnhancedServiceCard = ({ title, description, icon, id, index = 0 }: EnhancedServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { gsap } = useGSAPAnimation();

  useEffect(() => {
    if (cardRef.current && gsap) {
      // Simple blog-style animation - fade in with stagger
      gsap.set(cardRef.current, {
        opacity: 1,
        y: 20,
        scale: 0.98
      });

      gsap.to(cardRef.current, {
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    }
  }, [gsap]);

  return (
    <div 
      ref={cardRef}
      id={id} 
      className="group bg-black bg-opacity-20 backdrop-blur-sm rounded-lg overflow-hidden border border-white border-opacity-10 hover:-translate-y-2 hover:scale-105 transition-all duration-300"
      style={{ 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="p-6">
        <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center bg-accent bg-opacity-20 rounded-full group-hover:scale-110 transition-transform duration-300">
          <img 
            src={icon} 
            alt={title} 
            width={24} 
            height={24}
            className="text-white filter brightness-0 invert"
          />
        </div>
        
        <h3 
          className="text-lg font-semibold text-white text-center mb-3"
          style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}
        >
          {title}
        </h3>
        
        <p 
          className="text-white text-opacity-90 mb-6 text-center text-sm"
          style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
        >
          {description}
        </p>
        
        <div className="text-center">
          <Link 
            href={`/services#${id}`} 
            className="inline-block px-5 py-2 bg-accent text-white font-medium rounded-md hover:bg-light-accent hover:text-white transition-all duration-200 text-sm transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServiceCard;
