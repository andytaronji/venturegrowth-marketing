'use client';

import { createContext, useContext, useEffect, useRef, ReactNode, useState } from 'react';

// Lazy load GSAP to improve initial page load
let gsap: any = null;
let ScrollTrigger: any = null;

const loadGSAP = async () => {
  if (gsap && ScrollTrigger) return { gsap, ScrollTrigger };
  
  try {
    const [gsapModule, scrollTriggerModule] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger')
    ]);
    
    gsap = gsapModule.gsap;
    ScrollTrigger = scrollTriggerModule.ScrollTrigger;
    
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    return { gsap, ScrollTrigger };
  } catch (error) {
    console.warn('Failed to load GSAP:', error);
    return { gsap: null, ScrollTrigger: null };
  }
};

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
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || isInitialized.current) return;

    // Lazy load GSAP after initial render
    const initializeGSAP = async () => {
      try {
        const { gsap: loadedGsap, ScrollTrigger: loadedScrollTrigger } = await loadGSAP();
        
        if (loadedGsap && loadedScrollTrigger) {
          // Global GSAP configuration
          loadedGsap.config({
            force3D: true,
            nullTargetWarn: false,
          });

          // ScrollTrigger defaults
          loadedScrollTrigger.defaults({
            toggleActions: 'play none none reverse',
            markers: false,
          });

          // Refresh ScrollTrigger on route changes
          loadedScrollTrigger.refresh();

          isInitialized.current = true;
          setGsapLoaded(true);

          // Add fallback visibility for any elements that might be hidden
          const hiddenElements = document.querySelectorAll('.gsap-will-change[style*="opacity: 0"]');
          if (hiddenElements.length > 0) {
            setTimeout(() => {
              hiddenElements.forEach(el => {
                const element = el as HTMLElement;
                if (element.style.opacity === '0') {
                  element.classList.add('gsap-fallback-visible');
                }
              });
            }, 2000);
          }
        }
      } catch (error) {
        console.warn('GSAP initialization failed:', error);
        // Fallback: make all GSAP elements visible
        const gsapElements = document.querySelectorAll('.gsap-will-change');
        gsapElements.forEach(el => {
          (el as HTMLElement).classList.add('gsap-fallback-visible');
        });
      }
    };

    // Delay GSAP loading to improve initial page load
    const timer = setTimeout(initializeGSAP, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (ScrollTrigger?.getAll) {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
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
