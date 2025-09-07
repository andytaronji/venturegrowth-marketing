'use client';

import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  slug: string;
  featured?: boolean;
  onReadMore: () => void;
}

const BlogCard = ({ 
  title, 
  excerpt, 
  category, 
  readTime, 
  publishDate, 
  slug, 
  featured = false,
  onReadMore
}: BlogCardProps) => {

  const getCategoryColor = (category: string) => {
    // All categories now use the same blue color as the services filter section
    return 'bg-accent';
  };

  return (
    <div
      className={`group relative bg-white rounded-xl shadow-subtle border border-bg-secondary overflow-hidden transition-all duration-300 hover:shadow-medium hover:-translate-y-2 hover:scale-105 ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative p-6 h-full flex flex-col">
        {/* Category and meta info */}
        <div className="flex items-center justify-between mb-4">
          <span className={`font-figtree inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(category)}`}>
            {category}
          </span>
          <div className="font-figtree flex items-center space-x-2 text-xs text-text-secondary">
            <span>{readTime}</span>
            <span>•</span>
            <span>{publishDate}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-figtree text-card-title text-xl mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="font-figtree text-card-body mb-6 flex-grow line-clamp-3">
          {excerpt}
        </p>

        {/* Read more button */}
        <div className="mt-auto">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onReadMore();
            }}
            className="font-figtree inline-flex items-center text-accent font-medium hover:text-light-accent transition-colors duration-200 group/link relative z-10"
            style={{ pointerEvents: 'auto' }}
          >
            Read More
            <svg 
              className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Hover border effect */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent/20 transition-colors duration-300" />
    </div>
  );
};

export default BlogCard;
