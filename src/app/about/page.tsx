import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | VentureGrowth Marketing",
  description: "Learn about VentureGrowth Marketing, our mission, values, and the team behind our professional web design and digital marketing services.",
};

export default function AboutPage() {
  return (
    <>
      {/* About Hero */}
      <section className="bg-navy-blue text-white py-20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We're passionate about helping businesses grow through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-blue mb-6">Our Story</h2>
              <p className="text-lg text-navy-text mb-6">
                VentureGrowth Marketing was founded with a simple mission: to help businesses establish a powerful online presence that drives real growth and success.
              </p>
              <p className="text-lg text-navy-text mb-6">
                We recognized that many businesses struggle to navigate the complex digital landscape, often working with multiple agencies for different aspects of their online presence. Our vision was to create a comprehensive digital marketing agency that could handle all aspects of a business's online presence, from website design and development to content creation and social media management.
              </p>
              <p className="text-lg text-navy-text">
                Today, we're proud to partner with businesses of all sizes, helping them achieve their goals through strategic, results-driven digital solutions.
              </p>
            </div>
            
            <div className="relative h-96 w-full">
              <Image
                src="/about-story.jpg"
                alt="VentureGrowth Marketing Story"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission & Values */}
      <section className="section-padding bg-light-gray">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Our Mission & Values</h2>
            <p className="text-lg text-navy-text max-w-3xl mx-auto">
              At VentureGrowth Marketing, we're guided by a set of core values that inform everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-navy-blue rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-blue text-center mb-4">Excellence</h3>
              <p className="text-navy-text text-center">
                We're committed to delivering the highest quality work in everything we do, from website design to content creation.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-navy-blue rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-blue text-center mb-4">Partnership</h3>
              <p className="text-navy-text text-center">
                We view our clients as partners, working collaboratively to achieve their business goals and vision.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-navy-blue rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-blue text-center mb-4">Innovation</h3>
              <p className="text-navy-text text-center">
                We stay at the forefront of digital trends and technologies to provide cutting-edge solutions for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Our Team</h2>
            <p className="text-lg text-navy-text max-w-3xl mx-auto">
              Meet the talented professionals behind VentureGrowth Marketing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="relative h-80 w-full">
                <Image
                  src="/team-member-1.jpg"
                  alt="Team Member"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-blue mb-1">Alex Johnson</h3>
                <p className="text-light-blue font-medium mb-4">Founder & CEO</p>
                <p className="text-navy-text mb-4">
                  With over 15 years of experience in digital marketing and web development, Alex leads our team with vision and expertise.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="relative h-80 w-full">
                <Image
                  src="/team-member-2.jpg"
                  alt="Team Member"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-blue mb-1">Sarah Martinez</h3>
                <p className="text-light-blue font-medium mb-4">Creative Director</p>
                <p className="text-navy-text mb-4">
                  Sarah brings creativity and strategic thinking to every project, ensuring our designs are both beautiful and effective.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="relative h-80 w-full">
                <Image
                  src="/team-member-3.jpg"
                  alt="Team Member"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-blue mb-1">David Chen</h3>
                <p className="text-light-blue font-medium mb-4">Lead Developer</p>
                <p className="text-navy-text mb-4">
                  David's technical expertise and problem-solving skills ensure our websites are robust, secure, and high-performing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section-padding bg-light-gray">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 w-full">
              <Image
                src="/why-choose-us.jpg"
                alt="Why Choose VentureGrowth Marketing"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-xl"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-navy-blue mb-6">Why Choose Us</h2>
              <p className="text-lg text-navy-text mb-6">
                At VentureGrowth Marketing, we stand out from other agencies in several key ways:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Comprehensive Services</h3>
                    <p className="text-navy-text">We offer end-to-end digital solutions, eliminating the need to work with multiple agencies.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Tailored Approach</h3>
                    <p className="text-navy-text">We develop customized strategies based on your unique business goals and target audience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Results-Driven</h3>
                    <p className="text-navy-text">We focus on delivering measurable results that contribute to your business growth.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Transparent Communication</h3>
                    <p className="text-navy-text">We maintain open, honest communication throughout every project.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help your business grow through innovative digital solutions.
          </p>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-gold text-navy-blue font-bold rounded-md hover:bg-light-blue hover:text-white transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
