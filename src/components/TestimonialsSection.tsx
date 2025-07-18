'use client';

import { useEffect, useRef } from 'react';
import { useGSAPAnimation } from './GSAPProvider';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { gsap } = useGSAPAnimation();

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
    if (sectionRef.current && gsap) {
      const testimonialCards = sectionRef.current.querySelectorAll('.testimonial-card');
      
      gsap.fromTo(testimonialCards, 
        {
          opacity: 0,
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, [gsap]);

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-luxury-charcoal bg-opacity-20"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="font-luxury-serif text-luxury-title md:text-5xl font-bold text-white mb-6">
            Success Stories from Growing Businesses
          </h2>
          <p className="text-luxury-body md:text-xl text-white max-w-4xl mx-auto font-luxury-sans leading-relaxed">
            Real results from <span className="text-accent font-semibold">tech startups</span>, <span className="text-accent font-semibold">professional services</span>, <span className="text-accent font-semibold">e-commerce</span>, and small businesses across Atlanta, Georgia, and nationwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white rounded-2xl p-8 border border-gray-200 hover:border-accent hover:border-opacity-40 transition-all duration-300 hover:transform hover:scale-105 shadow-card hover:shadow-card-hover"
              style={{ color: 'initial' }}
            >
              {/* Header with avatar and info */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full mr-4 border-2 border-accent border-opacity-30 bg-accent flex items-center justify-center">
                  <span className="text-white font-semibold text-lg font-luxury-sans">
                    {getInitials(testimonial.name)}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: '#000000' }}>
                    {testimonial.name}
                  </h3>
                  <p className="text-sm font-semibold font-luxury-sans" style={{ color: '#1d4ed8' }}>
                    {testimonial.company}
                  </p>
                  <p className="text-xs" style={{ color: '#4b5563' }}>
                    {testimonial.industry} • {testimonial.location}
                  </p>
                </div>
              </div>
              
              {/* Quote */}
              <blockquote className="leading-relaxed mb-6 italic" style={{ color: '#374151' }}>
                "{testimonial.quote}"
              </blockquote>
              
              {/* Result badge */}
              <div className="bg-blue-50 rounded-lg px-4 py-2 text-center">
                <div className="font-semibold font-luxury-sans text-sm" style={{ color: '#1d4ed8' }}>
                  RESULT
                </div>
                <div className="font-bold font-luxury-serif text-lg" style={{ color: '#000000' }}>
                  {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary bg-opacity-10 rounded-2xl p-8 border border-accent border-opacity-30">
            <h3 className="font-luxury-serif text-3xl font-semibold text-white mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-white text-opacity-90 font-luxury-sans mb-8 max-w-3xl mx-auto text-lg">
              These results aren't accidents—they're the outcome of strategic, data-driven marketing designed specifically for ambitious small businesses and startups.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-white font-bold text-3xl font-luxury-serif">600%</div>
                <div className="text-white text-sm font-luxury-sans">Average Lead Increase</div>
              </div>
              <div className="text-center">
                <div className="text-white font-bold text-3xl font-luxury-serif">$50K+</div>
                <div className="text-white text-sm font-luxury-sans">First Month Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-white font-bold text-3xl font-luxury-serif">3 Weeks</div>
                <div className="text-white text-sm font-luxury-sans">Average Launch Time</div>
              </div>
              <div className="text-center">
                <div className="text-white font-bold text-3xl font-luxury-serif">100+</div>
                <div className="text-white text-sm font-luxury-sans">Growing Businesses</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="button-primary text-lg px-8 py-4 shadow-button hover:shadow-button-hover transform hover:scale-105"
              >
                Accelerate Your Growth
              </a>
              <a 
                href="/services" 
                className="button-primary text-lg px-8 py-4 shadow-button hover:shadow-button-hover transform hover:scale-105"
              >
                See All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
