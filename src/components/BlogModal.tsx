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
    const colors = {
      'SEO': 'bg-green-500',
      'Web Design': 'bg-blue-500',
      'Marketing': 'bg-purple-500',
      'Strategy': 'bg-orange-500',
      'Automation': 'bg-teal-500',
      'Analytics': 'bg-red-500',
      'Consulting': 'bg-indigo-500',
      'Tips': 'bg-yellow-500',
      'Startup Marketing': 'bg-purple-600',
      'Growth Strategy': 'bg-orange-600',
      'Marketing Tools': 'bg-teal-600',
      'Digital Marketing': 'bg-blue-600',
      'Social Media': 'bg-pink-500',
      'Content Marketing': 'bg-indigo-600',
      'Local Marketing': 'bg-green-600'
    };
    return colors[category as keyof typeof colors] || 'bg-accent';
  };

  // Generate table of contents from headings
  const generateTableOfContents = (content: ContentSection[]) => {
    const headings = content.filter(section => section.type === 'heading' && section.level && section.level <= 3);
    if (headings.length === 0) return null;

    return (
      <div className="bg-bg-secondary rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-primary mb-3">Table of Contents</h4>
        <ul className="space-y-1">
          {headings.map((heading, index) => (
            <li key={index}>
              <a
                href={`#${heading.id}`}
                className={`text-sm hover:text-accent transition-colors duration-200 ${
                  heading.level === 2 ? 'font-medium' : 'ml-4 text-text-secondary'
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Render structured content sections
  const renderContentSection = (section: ContentSection, index: number) => {
    switch (section.type) {
      case 'heading':
        const HeadingTag = `h${section.level}` as keyof JSX.IntrinsicElements;
        const headingClasses = {
          1: 'text-3xl font-bold text-primary mt-8 mb-4 first:mt-0',
          2: 'text-2xl font-semibold text-primary mt-6 mb-3',
          3: 'text-xl font-semibold text-primary mt-5 mb-2',
          4: 'text-lg font-semibold text-primary mt-4 mb-2',
          5: 'text-base font-semibold text-primary mt-3 mb-2',
          6: 'text-sm font-semibold text-primary mt-2 mb-1'
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
          <p key={index} className="text-text-secondary mb-4 leading-relaxed">
            {section.text}
          </p>
        );

      case 'list':
        return (
          <ul key={index} className="list-disc list-inside mb-4 space-y-1">
            {section.items?.map((item, itemIndex) => (
              <li key={itemIndex} className="text-text-secondary">
                {item}
              </li>
            ))}
          </ul>
        );

      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-accent pl-4 italic text-text-secondary mb-4">
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
          return <h1 key={index} className="text-3xl font-bold text-primary mt-8 mb-4 first:mt-0">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-semibold text-primary mt-6 mb-3">{line.slice(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold text-primary mt-5 mb-2">{line.slice(4)}</h3>;
        }
        
        // Empty lines
        if (line.trim() === '') {
          return <div key={index} className="h-2"></div>;
        }
        
        // Regular paragraphs
        return <p key={index} className="text-text-secondary mb-4 leading-relaxed">{line}</p>;
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
        <div className="sticky top-0 bg-white border-b border-bg-secondary p-6 z-10">
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-3 mb-3">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(post.category)}`}>
                  {post.category}
                </span>
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                {post.title}
              </h1>
            </div>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 rounded-full hover:bg-bg-secondary transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="prose prose-lg max-w-none">
            {/* Table of Contents for structured content */}
            {Array.isArray(post.content) && generateTableOfContents(post.content)}
            
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
