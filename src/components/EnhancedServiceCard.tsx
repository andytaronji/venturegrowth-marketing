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
  const iconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  
  const { gsap } = useGSAPAnimation();

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(cardRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.95
      });

      // Scroll-triggered animation
      gsap.to(cardRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        delay: index * 0.1, // Stagger based on index
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });

      // Hover animations
      const card = cardRef.current;
      
      if (card) {
        const handleMouseEnter = () => {
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          });
          
          gsap.to(iconRef.current, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: 'power2.out'
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
          
          gsap.to(iconRef.current, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup
        return () => {
          card.removeEventListener('mouseenter', handleMouseEnter);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      }

    }, cardRef);

    return () => ctx.revert();
  }, [gsap, index]);

  return (
    <div 
      ref={cardRef}
      id={id} 
      className="group bg-white rounded-lg overflow-hidden border border-bg-secondary gsap-will-change gsap-hardware-accel"
      data-gsap="fade-up"
      data-gsap-delay={index * 0.1}
      style={{ 
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        transition: 'box-shadow 0.3s ease'
      }}
    >
      <div className="p-6">
        <div 
          ref={iconRef}
          className="w-12 h-12 mx-auto mb-6 flex items-center justify-center bg-bg-secondary rounded-full gsap-will-change"
        >
          <img 
            src={icon} 
            alt={title} 
            width={24} 
            height={24}
            className="text-primary"
          />
        </div>
        
        <h3 
          ref={titleRef}
          className="text-lg font-semibold text-primary text-center mb-3"
        >
          {title}
        </h3>
        
        <p 
          ref={descriptionRef}
          className="text-secondary mb-6 text-center text-sm"
        >
          {description}
        </p>
        
        <div ref={buttonRef} className="text-center">
          <Link 
            href={`/services#${id}`} 
            className="inline-block px-5 py-2 border border-accent text-accent font-medium rounded-md hover:bg-accent hover:text-white transition-all duration-200 text-sm transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServiceCard;
