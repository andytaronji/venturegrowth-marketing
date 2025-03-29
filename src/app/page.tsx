import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Services Overview Section */}
      <section className="section-padding bg-light-gray">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Our Services</h2>
            <p className="text-lg text-navy-text max-w-3xl mx-auto">
              We offer a comprehensive range of digital services to help your business grow and thrive online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-navy-blue rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-blue text-center mb-3">Website Design</h3>
                <p className="text-navy-text mb-4">
                  Custom website designs that are visually stunning, user-friendly, and aligned with your brand identity.
                </p>
                <div className="text-center">
                  <Link 
                    href="/services#website-design" 
                    className="inline-block px-6 py-2 bg-light-blue text-white rounded-md hover:bg-navy-blue transition-colors duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-navy-blue rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-blue text-center mb-3">Website Development</h3>
                <p className="text-navy-text mb-4">
                  Robust, scalable website development with cutting-edge technologies for optimal performance.
                </p>
                <div className="text-center">
                  <Link 
                    href="/services#website-development" 
                    className="inline-block px-6 py-2 bg-light-blue text-white rounded-md hover:bg-navy-blue transition-colors duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-navy-blue rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-blue text-center mb-3">Website Maintenance</h3>
                <p className="text-navy-text mb-4">
                  Regular updates, security patches, and performance optimization to keep your website running smoothly.
                </p>
                <div className="text-center">
                  <Link 
                    href="/services#website-maintenance" 
                    className="inline-block px-6 py-2 bg-light-blue text-white rounded-md hover:bg-navy-blue transition-colors duration-200"
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
              className="inline-block px-8 py-3 bg-navy-blue text-white font-bold rounded-md hover:bg-light-blue transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">Why Choose VentureGrowth Marketing?</h2>
              <p className="text-lg text-navy-text mb-6">
                At VentureGrowth Marketing, we're dedicated to helping businesses establish a powerful online presence that drives growth and success.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Tailored Solutions</h3>
                    <p className="text-navy-text">Custom strategies designed specifically for your business goals and target audience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Expert Team</h3>
                    <p className="text-navy-text">Skilled professionals with extensive experience in web design, development, and digital marketing.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Results-Driven Approach</h3>
                    <p className="text-navy-text">Focus on delivering measurable results that contribute to your business growth.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/about" 
                  className="inline-block px-6 py-3 bg-light-blue text-white font-bold rounded-md hover:bg-navy-blue transition-colors duration-200"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
            
            <div className="relative h-96 w-full">
              <div className="absolute inset-0 bg-navy-blue rounded-lg opacity-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/about-image.jpg"
                  alt="About VentureGrowth Marketing"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Let's work together to create a stunning digital presence that helps your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-gold text-navy-blue font-bold rounded-md hover:bg-light-blue hover:text-white transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-navy-blue transition-colors duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
