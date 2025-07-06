'use client';

import { useEffect } from 'react';
import { BlogPost } from '@/data/blogPosts';

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
      'Tips': 'bg-yellow-500'
    };
    return colors[category as keyof typeof colors] || 'bg-accent';
  };

  const formatContent = (content: string) => {
    // Simple markdown-like formatting
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
                  <span>{post.publishDate}</span>
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
            {formatContent(post.content)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
