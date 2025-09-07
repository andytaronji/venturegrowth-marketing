'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import Link from 'next/link';
import { metadata } from './metadata';
import BlogCard from '@/components/BlogCard';
import BlogModal from '@/components/BlogModal';
import EnhancedCTASection from '@/components/EnhancedCTASection';
import { blogPosts, getAllCategories, BlogPost } from '@/data/blogPosts';
import { useGSAPAnimation } from '@/components/GSAPProvider';

export default function BlogPage() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const filtersRef = useRef<HTMLElement>(null);
  const blogGridRef = useRef<HTMLElement>(null);
  const { gsap } = useGSAPAnimation();
  
  // Modal state
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Filter state
  const [selectedCategory, setSelectedCategory] = useState<string>('All Posts');
  const [filterSectionRevealed, setFilterSectionRevealed] = useState<boolean>(false);

  const categories = getAllCategories();

  // Filtered posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All Posts') {
      return blogPosts;
    }
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  // GSAP animation for hero section (matching About page pattern)
  useEffect(() => {
    if (heroRef.current && gsap && titleRef.current && descriptionRef.current) {
      // About hero-style animation with staggered text reveals
      const tl = gsap.timeline();
      
      // Set initial states
      gsap.set([titleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 30,
        scale: 0.95
      });
      
      // Animate title first
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out'
      })
      // Then animate description with slight delay
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out'
      }, "-=0.4");
    }
  }, [gsap]);

  // IntersectionObserver for category filter section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Set filter section as revealed after a delay to allow animation to complete
            setTimeout(() => {
              setFilterSectionRevealed(true);
            }, 600); // Adjust timing based on CSS animation duration
          }
        });
      },
    {
      threshold: 1.0,
      rootMargin: '0px 0px -60% 0px'
    }
    );

    if (filtersRef.current) {
      observer.observe(filtersRef.current);
    }

    return () => {
      if (filtersRef.current) {
        observer.unobserve(filtersRef.current);
      }
    };
  }, []);

  // IntersectionObserver for blog grid section with row-by-row sequential animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && filterSectionRevealed) {
            const cards = entry.target.querySelectorAll('.animate-blog-card');
            
            // Calculate cards per row based on screen size (3 columns on lg+, 2 on md, 1 on mobile)
            const getCardsPerRow = () => {
              if (window.innerWidth >= 1024) return 3; // lg breakpoint
              if (window.innerWidth >= 768) return 2;  // md breakpoint
              return 1; // mobile
            };
            
            const cardsPerRow = getCardsPerRow();
            
            // Animate cards row by row
            cards.forEach((card, index) => {
              const row = Math.floor(index / cardsPerRow);
              const positionInRow = index % cardsPerRow;
              
              // Row delay: 400ms between rows, Position delay: 100ms between cards in same row
              const delay = (row * 400) + (positionInRow * 100);
              
              setTimeout(() => {
                card.classList.add('is-visible');
              }, delay);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -20% 0px'
      }
    );

    if (blogGridRef.current) {
      observer.observe(blogGridRef.current);
    }

    return () => {
      if (blogGridRef.current) {
        observer.unobserve(blogGridRef.current);
      }
    };
  }, [filteredPosts, filterSectionRevealed]);


  // Modal handlers
  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  // Filter handlers
  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      {/* Sophisticated dark background container */}
      <div className="relative min-h-screen overflow-hidden bg-dark-solid">
        {/* Elegant decorative elements for premium feel */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-20 left-20 w-16 h-16 bg-white opacity-3 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent opacity-8 rounded-full blur-2xl" />
          <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-white opacity-4 rounded-full blur-lg" />
          <div className="absolute bottom-1/2 left-1/3 w-20 h-20 bg-light-accent opacity-6 rounded-full blur-xl" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section 
            ref={heroRef}
            className="relative text-white min-h-screen flex items-center justify-center overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-20 left-10 w-32 h-32 bg-accent opacity-10 rounded-full blur-2xl" />
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-light-accent opacity-5 rounded-full blur-3xl" />
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="text-center">
                <h1 
                  ref={titleRef}
                  className="font-figtree text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                  style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                >
                  Digital Marketing & Web Design 
                  <span className="block text-accent">Insights for Georgia Businesses</span>
                </h1>
                <p 
                  ref={descriptionRef}
                  className="text-xl md:text-2xl text-white font-figtree font-medium max-w-4xl mx-auto leading-relaxed"
                  style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
                >
                  Expert insights on digital marketing, SEO strategies, web design trends, and business growth tactics specifically for Atlanta, Marietta, and Georgia businesses.
                </p>
              </div>
            </div>
          </section>

          {/* Category Filter Section */}
          <section 
            ref={filtersRef}
            className="py-8 md:py-12 animate-header"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-3">
                <button 
                  onClick={() => handleCategoryFilter('All Posts')}
                  className={`font-figtree px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === 'All Posts' 
                      ? 'bg-accent text-white' 
                      : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                  }`}
                >
                  All Posts
                </button>
                {categories.map((category) => (
                  <button 
                    key={category}
                    onClick={() => handleCategoryFilter(category)}
                    className={`font-figtree px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category 
                        ? 'bg-accent text-white' 
                        : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section ref={blogGridRef} className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto container-padding">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <div key={post.id} className="animate-blog-card">
                    <BlogCard
                      title={post.title}
                      excerpt={post.excerpt}
                      category={post.category}
                      readTime={post.readTime}
                      publishDate={post.date}
                      slug={post.id}
                      featured={false}
                      onReadMore={() => openModal(post)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <EnhancedCTASection
            title="Ready to Work With Us?"
            description="Serving Marietta, Atlanta, and all of Georgia. Book your free consultation now to discuss how our services can help your business grow."
            buttons={[
              { text: "Get Started", href: "/contact", variant: "primary" },
              { text: "View Our Services", href: "/services", variant: "secondary" }
            ]}
          />
        </div>
      </div>

      {/* Blog Modal */}
      <BlogModal
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
