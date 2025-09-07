'use client';

import Link from 'next/link';

interface EnhancedServiceCardProps {
  title: string;
  id: string;
  index?: number;
}

const EnhancedServiceCard = ({ title, id, index = 0 }: EnhancedServiceCardProps) => {
  return (
    <div
      id={id}
      className="ice-card animate-card"
    >
      <div className="p-6 pt-8 md:p-8 md:pt-12">
        <h3 className="font-figtree text-lg md:text-xl font-bold text-white text-center mb-6 md:mb-8 leading-tight">
          {title}
        </h3>
        
        <div className="text-center">
          <Link 
            href={`/services#${id}`} 
            className="inline-block px-6 py-3 md:px-8 md:py-4 font-medium font-figtree rounded-full transition-all duration-200 transform hover:scale-105 shadow-button hover:shadow-button-hover bg-accent text-white hover:bg-light-accent hover:text-white text-sm md:text-base"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServiceCard;
