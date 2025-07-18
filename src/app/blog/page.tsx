'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import Link from 'next/link';
import { metadata } from './metadata';
import BlogCard from '@/components/BlogCard';
import BlogModal from '@/components/BlogModal';
import { blogPosts, getAllCategories, BlogPost } from '@/data/blogPosts';
import { useGSAPAnimation } from '@/components/GSAPProvider';

export default function BlogPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { gsap } = useGSAPAnimation();
  
  // Modal state
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Filter state
  const [selectedCategory, setSelectedCategory] = useState<string>('All Posts');

  useEffect(() => {
    if (heroRef.current) {
      // Hero animation
      gsap.fromTo(heroRef.current.children, 
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out'
        }
      );
    }
  }, [gsap]);

  const categories = getAllCategories();

  // Filtered posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All Posts') {
      return blogPosts;
    }
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

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
          <section className="section-padding">
            <div className="max-w-7xl mx-auto container-padding">
              <div ref={heroRef} className="text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Digital Marketing & Web Design 
                  <span className="block text-accent">Insights for Georgia Businesses</span>
                </h1>
                <p className="text-xl md:text-2xl text-text-secondary-light mb-8 max-w-3xl mx-auto leading-relaxed">
                  Expert insights on digital marketing, SEO strategies, web design trends, and business growth tactics specifically for Atlanta, Marietta, and Georgia businesses.
                </p>
                
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  <button 
                    onClick={() => handleCategoryFilter('All Posts')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
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
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
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
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="pb-24">
            <div className="max-w-7xl mx-auto container-padding">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    category={post.category}
                    readTime={post.readTime}
                    publishDate={post.date}
                    slug={post.id}
                    featured={false}
                    onReadMore={() => openModal(post)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Consultation CTA Section */}
          <section className="py-16 bg-primary/20">
            <div className="max-w-4xl mx-auto container-padding text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated with Marketing Insights
              </h2>
              <p className="text-xl text-text-secondary-light mb-8">
                Get the latest SEO tips, marketing strategies, and business growth insights in one of our expert consultations.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-accent text-white font-medium rounded-lg hover:bg-light-accent transition-colors duration-200 text-lg"
                >
                  Schedule Your Consultation
                </Link>
              </div>
            </div>
          </section>
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
