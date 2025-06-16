'use client';

import Link from 'next/link';
import CldImageWrapper from './CldImageWrapper';

const Hero = () => {
  return (
    <div className="relative bg-white text-primary overflow-hidden mt-12 md:mt-14">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-bg-secondary opacity-50">
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23000000" fill-opacity="0.05"%3E%3Cpath d="M0 0h20v20H0z"/%3E%3C/g%3E%3C/svg%3E")', 
            backgroundSize: '20px 20px'
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary">
              Marketing Consulting & Web Design Agency Across the United States
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8 max-w-xl">
              Gain powerful insights with our advanced competitor analysis and SWOT assessments—helping you identify opportunities, outmaneuver rivals, and accelerate business growth effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/services" 
                className="px-8 py-3 bg-accent text-white font-medium rounded-md hover:bg-light-accent transition-colors duration-200 text-center"
              >
                Our Services
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-transparent border border-accent text-accent font-medium rounded-md hover:bg-accent hover:text-white transition-colors duration-200 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative h-96 w-full transition-all duration-300 hover:shadow-medium">
              <CldImageWrapper
                src="nice_vnyvxy"
                alt="Business Growth and Analytics"
                width={1200}
                height={800}
                crop="fill"
                gravity="auto"
                quality="auto:best"
                className="rounded-lg shadow-subtle absolute inset-0 w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in;
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
