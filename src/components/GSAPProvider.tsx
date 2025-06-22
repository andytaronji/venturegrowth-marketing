'use client';

import { createContext, useContext, useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPContextType {
  gsap: typeof gsap;
  ScrollTrigger: typeof ScrollTrigger;
}

const GSAPContext = createContext<GSAPContextType | null>(null);

export const useGSAP = () => {
  const context = useContext(GSAPContext);
  if (!context) {
    throw new Error('useGSAP must be used within a GSAPProvider');
  }
  return context;
};

interface GSAPProviderProps {
  children: ReactNode;
}

export const GSAPProvider = ({ children }: GSAPProviderProps) => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || isInitialized.current) return;

    // Global GSAP configuration
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });

    // ScrollTrigger defaults
    ScrollTrigger.defaults({
      toggleActions: 'play none none reverse',
      markers: false,
    });

    // Refresh ScrollTrigger on route changes
    ScrollTrigger.refresh();

    isInitialized.current = true;

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const contextValue: GSAPContextType = {
    gsap,
    ScrollTrigger,
  };

  return (
    <GSAPContext.Provider value={contextValue}>
      {children}
    </GSAPContext.Provider>
  );
};

// Custom hook for component-level GSAP animations
export const useGSAPAnimation = () => {
  const { gsap, ScrollTrigger } = useGSAP();
  
  const animateElements = (
    elements: string | Element | Element[],
    animation: gsap.TweenVars,
    scrollTrigger?: ScrollTrigger.Vars
  ) => {
    const tween = gsap.fromTo(elements, 
      // From state (initial)
      {
        opacity: 0,
        y: 30,
        ...animation.from
      },
      // To state (final)
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        ...animation,
        scrollTrigger: scrollTrigger ? {
          trigger: elements,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          ...scrollTrigger
        } : undefined
      }
    );
    
    return tween;
  };

  const staggerElements = (
    elements: string | Element[],
    animation: gsap.TweenVars = {},
    scrollTrigger?: ScrollTrigger.Vars
  ) => {
    return gsap.fromTo(elements,
      {
        opacity: 0,
        y: 30,
        ...animation.from
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.15,
        ...animation,
        scrollTrigger: scrollTrigger ? {
          trigger: elements,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          ...scrollTrigger
        } : undefined
      }
    );
  };

  return {
    gsap,
    ScrollTrigger,
    animateElements,
    staggerElements,
  };
};

export default GSAPProvider;
