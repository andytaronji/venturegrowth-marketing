'use client';

import { useEffect, useRef } from 'react';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Function to get initials from name
  const getInitials = (name: string) => {
    const words = name.replace(/^Dr\.\s+/, '').split(' ');
    if (words.length >= 2) {
      return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    }
    return words[0][0].toUpperCase();
  };

  const testimonials = [
    {
      name: 'Mia Chen',
      company: 'LaunchPad Apps',
      industry: 'Tech Startup',
      location: 'Atlanta, GA',
      quote: 'We needed a digital partner who understood our vision and could move fast. Digital Mosaic Studios delivered a stunning site and a marketing plan that doubled our beta users in just six weeks.',
      result: '100% User Growth',
      avatar: '/team-member-1.jpg'
    },
    {
      name: 'James Carter',
      company: 'Carter Legal Group',
      industry: 'Professional Services',
      location: 'Marietta, GA',
      quote: 'As a law firm, credibility is everything. Our new site and SEO strategy brought in higher-quality leads and improved our reputation online.',
      result: 'Higher Quality Leads',
      avatar: '/team-member-2.jpg'
    },
    {
      name: 'Carlos Martinez',
      company: 'Peach Market',
      industry: 'E-commerce',
      location: 'Atlanta, GA',
      quote: 'Our Shopify sales jumped 40% after launching our new site and working with Digital Mosaic on paid ads and analytics. They really understand small business needs.',
      result: '40% Sales Increase',
      avatar: '/team-member-3.jpg'
    },
    {
      name: 'Dr. Priya Patel',
      company: 'Atlanta Family Health',
      industry: 'Healthcare',
      location: 'Roswell, GA',
      quote: 'Our clinic\'s new website is not only beautiful but also brought in 30% more patient inquiries. Digital Mosaic Studios made the process seamless.',
      result: '30% More Inquiries',
      avatar: '/team-member-1.jpg'
    },
    {
      name: 'Dana Williams',
      company: 'Metro Realty Group',
      industry: 'Real Estate',
      location: 'Alpharetta, GA',
      quote: 'The custom CRM tool they built for us tracks leads and automates follow-ups—our agents are closing more deals than ever.',
      result: 'More Closed Deals',
      avatar: '/team-member-2.jpg'
    },
    {
      name: 'Mike Rodriguez',
      company: 'Rodriguez Landscaping',
      industry: 'Landscaping',
      location: 'Marietta, GA',
      quote: 'Digital Mosaic Studios transformed our online presence completely. We went from 2-3 leads per week to 15-20 quality leads. Their understanding of service businesses is unmatched.',
      result: '600% Lead Increase',
      avatar: '/team-member-3.jpg'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate in when scrolling down and reaching trigger point
            // First animate the header
            if (headerRef.current) {
              headerRef.current.classList.add('is-visible');
            }
            
            // Then animate the cards with a delay to ensure header completes first
            setTimeout(() => {
              const cards = entry.target.querySelectorAll('.animate-card');
              cards.forEach((card) => {
                card.classList.add('is-visible');
              });
              
              // Dispatch completion event after all animations finish
              // Calculate total animation time: 600ms initial delay + 1100ms last card delay + 500ms animation duration
              setTimeout(() => {
                const completionEvent = new CustomEvent('testimonialsAnimationComplete', {
                  detail: { sectionId: 'testimonials' }
                });
                window.dispatchEvent(completionEvent);
              }, 1600); // Total time for all cards to complete their animations
            }, 600); // 600ms delay after header starts animating to ensure it completes
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -25% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-20 bg-gray-900 bg-opacity-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-12 md:mb-16 animate-header">
          <h2 className="font-figtree text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Success Stories from Growing Businesses
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-4xl mx-auto font-figtree leading-relaxed">
            Real results from <span className="text-blue-400 font-semibold">tech startups</span>, <span className="text-blue-400 font-semibold">professional services</span>, <span className="text-blue-400 font-semibold">e-commerce</span>, and small businesses across Atlanta, Georgia, and nationwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-blue-500 hover:border-opacity-40 transition-all duration-300 shadow-lg hover:shadow-xl animate-card"
            >
              {/* Header with avatar and info */}
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-3 md:mr-4 border-2 border-blue-500 border-opacity-30 bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm md:text-lg font-figtree">
                    {getInitials(testimonial.name)}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-figtree text-base md:text-lg font-semibold text-gray-900 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm font-semibold font-figtree text-blue-600">
                    {testimonial.company}
                  </p>
                  <p className="text-xs text-gray-600 font-figtree">
                    {testimonial.industry} • {testimonial.location}
                  </p>
                </div>
              </div>
              
              {/* Quote */}
              <blockquote className="text-sm md:text-base leading-relaxed mb-4 md:mb-6 italic text-gray-700 font-figtree">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Result badge */}
              <div className="bg-blue-50 rounded-lg px-3 md:px-4 py-2 text-center">
                <div className="font-semibold font-figtree text-xs md:text-sm text-blue-600">
                  RESULT
                </div>
                <div className="font-bold font-figtree text-sm md:text-lg text-gray-900">
                  {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
