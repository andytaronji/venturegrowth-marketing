'use client';

import { useEffect } from 'react';
import { BlogPost, ContentSection } from '@/data/blogPosts';

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

const BlogModal = ({ post, isOpen, onClose }: BlogModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const getCategoryColor = (category: string) => {
    // All categories now use the same purple color as "Startup Marketing"
    return 'bg-purple-600';
  };


  // Render structured content sections
  const renderContentSection = (section: ContentSection, index: number) => {
    switch (section.type) {
      case 'heading':
        const HeadingTag = `h${section.level}` as keyof JSX.IntrinsicElements;
        const headingClasses = {
          1: 'font-figtree text-3xl font-bold text-primary mt-8 mb-4 first:mt-0',
          2: 'font-figtree text-2xl font-semibold text-primary mt-6 mb-3',
          3: 'font-figtree text-xl font-semibold text-primary mt-5 mb-2',
          4: 'font-figtree text-lg font-semibold text-primary mt-4 mb-2',
          5: 'font-figtree text-base font-semibold text-primary mt-3 mb-2',
          6: 'font-figtree text-sm font-semibold text-primary mt-2 mb-1'
        };
        
        return (
          <HeadingTag
            key={index}
            id={section.id}
            className={headingClasses[section.level as keyof typeof headingClasses] || headingClasses[2]}
          >
            {section.text}
          </HeadingTag>
        );

      case 'paragraph':
        return (
          <p key={index} className="font-figtree text-text-secondary mb-4 leading-relaxed">
            {section.text}
          </p>
        );

      case 'list':
        return (
          <ul key={index} className="font-figtree list-disc list-inside mb-4 space-y-1">
            {section.items?.map((item, itemIndex) => (
              <li key={itemIndex} className="text-text-secondary">
                {item}
              </li>
            ))}
          </ul>
        );

      case 'quote':
        return (
          <blockquote key={index} className="font-figtree border-l-4 border-accent pl-4 italic text-text-secondary mb-4">
            {section.text}
          </blockquote>
        );

      default:
        return null;
    }
  };

  // Legacy support for old HTML string format
  const formatLegacyContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="font-figtree text-3xl font-bold text-primary mt-8 mb-4 first:mt-0">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="font-figtree text-2xl font-semibold text-primary mt-6 mb-3">{line.slice(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="font-figtree text-xl font-semibold text-primary mt-5 mb-2">{line.slice(4)}</h3>;
        }
        
        // Empty lines
        if (line.trim() === '') {
          return <div key={index} className="h-2"></div>;
        }
        
        // Regular paragraphs
        return <p key={index} className="font-figtree text-text-secondary mb-4 leading-relaxed">{line}</p>;
      });
  };

  if (!post) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div
        className={`relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 ${
          isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-blue-500 p-6 z-10 relative">
          {/* Close Button - Positioned absolutely */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Centered Content */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="font-figtree flex items-center space-x-2 text-sm text-white/90">
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
            </div>
            <h1 className="font-figtree text-2xl md:text-3xl font-bold text-white leading-tight max-w-4xl mx-auto">
              {post.title}
            </h1>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="prose prose-lg max-w-none">
            {/* Render content based on type */}
            {Array.isArray(post.content) 
              ? post.content.map((section, index) => renderContentSection(section, index))
              : formatLegacyContent(post.content)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
