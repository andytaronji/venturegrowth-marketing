'use client';

import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { CldImage } from "next-cloudinary";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              We offer a comprehensive range of digital services to help businesses throughout metro Atlanta and beyond grow and thrive online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-subtle overflow-hidden transition-all duration-300 hover:shadow-medium border border-bg-secondary">
              <div className="p-6">
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center bg-bg-secondary rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary text-center mb-3">Website Design</h3>
                <p className="text-secondary text-sm mb-6 text-center">
                  Custom website designs that are visually stunning, user-friendly, and perfectly aligned with your brand identity.
                </p>
                <div className="text-center">
                  <Link 
                    href="/services#website-design" 
                    className="inline-block px-5 py-2 border border-accent text-accent font-medium rounded-md hover:bg-accent hover:text-white transition-colors duration-200 text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-subtle overflow-hidden transition-all duration-300 hover:shadow-medium border border-bg-secondary">
              <div className="p-6">
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center bg-bg-secondary rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary text-center mb-3">Website Development</h3>
                <p className="text-secondary text-sm mb-6 text-center">
                  Robust, scalable website development with cutting-edge technologies for optimal performance and search visibility.
                </p>
                <div className="text-center">
                  <Link 
                    href="/services#website-development" 
                    className="inline-block px-5 py-2 border border-accent text-accent font-medium rounded-md hover:bg-accent hover:text-white transition-colors duration-200 text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-subtle overflow-hidden transition-all duration-300 hover:shadow-medium border border-bg-secondary">
              <div className="p-6">
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center bg-bg-secondary rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary text-center mb-3">Website Maintenance</h3>
                <p className="text-secondary text-sm mb-6 text-center">
                  Regular updates, security patches, and performance optimization to keep your website running smoothly and securely.
                </p>
                <div className="text-center">
                  <Link 
                    href="/services#website-maintenance" 
                    className="inline-block px-5 py-2 border border-accent text-accent font-medium rounded-md hover:bg-accent hover:text-white transition-colors duration-200 text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-block px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-light-accent transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Choose Digital Mosaic Studios?</h2>
              <p className="text-lg text-secondary mb-6">
                At Digital Mosaic Studios, we're dedicated to helping businesses establish a powerful online presence that drives growth and success.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-primary">Expert Strategies</h3>
                    <p className="text-secondary text-sm">Custom strategies designed specifically for your business goals, with deep knowledge of your market and target audience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-primary">Expert Team</h3>
                    <p className="text-secondary text-sm">Skilled professionals with extensive experience in web design, development, and digital marketing.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-primary">Results-Driven Approach</h3>
                    <p className="text-secondary text-sm">Focus on delivering measurable results that contribute to your business growth.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/about" 
                  className="inline-block px-6 py-3 border border-accent text-accent font-medium rounded-md hover:bg-accent hover:text-white transition-colors duration-200"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
            
            <div className="relative h-96 w-full">
              <CldImage
                src="samples/people/kitchen-bar"
                alt="About Digital Mosaic Studios"
                width={800}
                height={600}
                crop="fit"
                gravity="auto"
                quality="auto:best"
                className="rounded-lg shadow-subtle absolute inset-0 w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Ready to Grow Your Business?</h2>
          <p className="text-xl text-light mb-8 max-w-3xl mx-auto">
            Let's work together to create a stunning digital presence that helps your business thrive. Based in metro Atlanta and serving clients nationwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-accent text-white font-medium rounded-md hover:bg-light-accent transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
