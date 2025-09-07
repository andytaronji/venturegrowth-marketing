/**
 * Pure CSS + JavaScript Pop-In Animation System
 * 
 * This system uses Intersection Observer API to trigger CSS animations
 * when elements with data-animate="pop-in" scroll into view.
 * 
 * Features:
 * - Uses CSS keyframes for smooth bubble pop effect with 70% overshoot
 * - Intersection Observer for performance-optimized scroll detection
 * - Staggered animations for multiple elements
 * - Fallback animations if JavaScript fails
 * - Respects user's reduced motion preferences
 * - SSR compatible with client-side checks
 * - Next.js hydration compatible
 */

// Only run on client side
if (typeof window !== 'undefined') {
  
  function initializePopInAnimations() {
    console.log('🎬 Initializing Pop-In Animation System...');
    
    // Find all elements that have our custom data-attribute
    const animatedElements = document.querySelectorAll('[data-animate="pop-in"]');
    console.log(`🎯 Found ${animatedElements.length} elements with data-animate="pop-in"`);
    
    if (animatedElements.length === 0) {
      console.log('⚠️ No elements found with data-animate="pop-in" attribute');
      return;
    }
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    console.log(`♿ Reduced motion preference: ${prefersReducedMotion}`);
    
    // If user prefers reduced motion, show all elements immediately
    if (prefersReducedMotion) {
      animatedElements.forEach(element => {
        element.classList.add('is-visible');
      });
      console.log('✅ All elements made visible (reduced motion)');
      return;
    }
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('🎉 Element entered viewport, triggering animation:', entry.target);
          
          // Add the 'is-visible' class to trigger CSS animation
          entry.target.classList.add('is-visible');
          
          // Stop observing this element since animation only happens once
          observer.unobserve(entry.target);
        }
      });
    }, {
      // Animation starts when the top of the element is 85% down the viewport
      threshold: 0,
      rootMargin: '0px 0px -15% 0px'
    });
    
    // Start observing each element
    animatedElements.forEach((element, index) => {
      console.log(`👀 Observing element ${index + 1}:`, element);
      observer.observe(element);
    });
    
    console.log('✅ Pop-In Animation System initialized successfully');
    
    // Cleanup function for when the page unloads
    window.addEventListener('beforeunload', () => {
      observer.disconnect();
    });
  }
  
  // Multiple initialization strategies for Next.js compatibility
  
  // Strategy 1: DOMContentLoaded (for initial page loads)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePopInAnimations);
  } else {
    // Strategy 2: Document already loaded (for client-side navigation)
    initializePopInAnimations();
  }
  
  // Strategy 3: Fallback with setTimeout (for hydration edge cases)
  setTimeout(() => {
    const elements = document.querySelectorAll('[data-animate="pop-in"]:not(.is-visible)');
    if (elements.length > 0) {
      console.log('🔄 Fallback initialization triggered');
      initializePopInAnimations();
    }
  }, 1000);
}
