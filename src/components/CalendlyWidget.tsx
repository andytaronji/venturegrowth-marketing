'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

interface CalendlyWidgetProps {
  url?: string;
}

// Extend Window interface to include Calendly
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
      closePopupWidget: () => void;
      showPopupWidget: (url: string) => void;
    };
  }
}

const CalendlyWidget = ({ 
  url = "https://calendly.com/infodigitalmosaicstudios" 
}: CalendlyWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const initializationAttempted = useRef(false);

  // Initialize Calendly widget
  const initializeCalendly = () => {
    if (!containerRef.current || !window.Calendly || initializationAttempted.current) {
      return;
    }

    try {
      // Clear any existing content
      containerRef.current.innerHTML = '';
      
      // Initialize the widget
      window.Calendly.initInlineWidget({
        url: url,
        parentElement: containerRef.current
      });
      
      initializationAttempted.current = true;
      setIsInitialized(true);
    } catch (error) {
      console.error('Error initializing Calendly widget:', error);
      initializationAttempted.current = false;
    }
  };

  // Handle script load
  const handleScriptLoad = () => {
    setIsScriptLoaded(true);
  };

  // Initialize widget when script is loaded
  useEffect(() => {
    if (isScriptLoaded && !isInitialized) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        initializeCalendly();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isScriptLoaded, isInitialized]);

  // Cleanup and re-initialize on mount/unmount
  useEffect(() => {
    // Reset initialization flag when component mounts
    initializationAttempted.current = false;
    setIsInitialized(false);

    // Try to initialize if script is already loaded
    if (window.Calendly && containerRef.current) {
      initializeCalendly();
    }

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      initializationAttempted.current = false;
      setIsInitialized(false);
    };
  }, [url]); // Re-run when URL changes

  return (
    <>
      {/* Load Calendly CSS */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      
      {/* Load Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
        onError={() => {
          console.error('Failed to load Calendly script');
        }}
      />
      
      {/* Calendly widget container */}
      <div className="calendly-widget-wrapper">
        {!isInitialized && (
          <div className="flex items-center justify-center" style={{ minHeight: '700px' }}>
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent mb-4"></div>
              <p className="text-white text-opacity-80">Loading calendar...</p>
            </div>
          </div>
        )}
        <div 
          ref={containerRef}
          className={`calendly-container ${isInitialized ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            minWidth: '320px', 
            height: '700px',
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      </div>
    </>
  );
};

export default CalendlyWidget;
