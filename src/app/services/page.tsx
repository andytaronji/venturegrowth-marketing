import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Services | VentureGrowth Marketing",
  description: "Explore our comprehensive range of web design, development, maintenance, social media management, and content creation services.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Services Hero */}
      <section className="bg-navy-blue text-white py-20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Comprehensive digital solutions to help your business establish a powerful online presence and drive growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Website Design */}
      <section id="website-design" className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-blue mb-6">Website Design</h2>
              <p className="text-lg text-navy-text mb-6">
                Our website design services focus on creating visually stunning, user-friendly websites that align perfectly with your brand identity and business goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Custom Design</h3>
                    <p className="text-navy-text">Unique designs tailored to your brand identity and business needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">User Experience (UX) Design</h3>
                    <p className="text-navy-text">Intuitive navigation and user flows that enhance engagement and conversions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Responsive Design</h3>
                    <p className="text-navy-text">Websites that look and function perfectly on all devices and screen sizes.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 w-full">
              <img
                src="/website-design.jpg"
                alt="Website Design Services"
                style={{ 
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Website Development */}
      <section id="website-development" className="section-padding bg-light-gray">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 w-full">
              <img
                src="/website-development.jpg"
                alt="Website Development Services"
                style={{ 
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}
                className="rounded-lg shadow-xl"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-navy-blue mb-6">Website Development</h2>
              <p className="text-lg text-navy-text mb-6">
                We build robust, scalable websites using cutting-edge technologies that ensure optimal performance, security, and functionality.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Custom Web Applications</h3>
                    <p className="text-navy-text">Tailored web applications that meet your specific business requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">E-commerce Solutions</h3>
                    <p className="text-navy-text">Secure, user-friendly online stores that drive sales and enhance customer experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Content Management Systems</h3>
                    <p className="text-navy-text">Easy-to-use CMS implementations that allow you to update your website content effortlessly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Website Maintenance */}
      <section id="website-maintenance" className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-blue mb-6">Website Maintenance</h2>
              <p className="text-lg text-navy-text mb-6">
                Keep your website running smoothly with our comprehensive maintenance services that ensure security, performance, and up-to-date content.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Regular Updates</h3>
                    <p className="text-navy-text">Timely updates to software, plugins, and content to keep your website current.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Security Monitoring</h3>
                    <p className="text-navy-text">Proactive security measures to protect your website from threats and vulnerabilities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Performance Optimization</h3>
                    <p className="text-navy-text">Regular optimization to ensure fast loading times and smooth user experience.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 w-full">
              <img
                src="/website-maintenance.jpg"
                alt="Website Maintenance Services"
                style={{ 
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Media Management */}
      <section id="social-media" className="section-padding bg-light-gray">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 w-full">
              <img
                src="/social-media.jpg"
                alt="Social Media Management Services"
                style={{ 
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}
                className="rounded-lg shadow-xl"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-navy-blue mb-6">Social Media Management</h2>
              <p className="text-lg text-navy-text mb-6">
                Build and maintain a strong social media presence that engages your audience, builds brand awareness, and drives traffic to your website.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Content Strategy</h3>
                    <p className="text-navy-text">Strategic planning and creation of engaging content tailored to your target audience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Community Management</h3>
                    <p className="text-navy-text">Active engagement with your audience to build relationships and foster community.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Analytics & Reporting</h3>
                    <p className="text-navy-text">Regular performance analysis and reporting to track growth and optimize strategies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Creation */}
      <section id="content-creation" className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-blue mb-6">Content Creation</h2>
              <p className="text-lg text-navy-text mb-6">
                Compelling, high-quality content that engages your audience, establishes your expertise, and drives organic traffic to your website.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Blog Writing</h3>
                    <p className="text-navy-text">Informative, engaging blog posts that establish your authority and improve SEO.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Copywriting</h3>
                    <p className="text-navy-text">Persuasive copy for websites, landing pages, and marketing materials that convert visitors into customers.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-navy-blue">Visual Content</h3>
                    <p className="text-navy-text">Eye-catching graphics, infographics, and videos that enhance your message and increase engagement.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 w-full">
              <img
                src="/content-creation.jpg"
                alt="Content Creation Services"
                style={{ 
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our services can help your business grow.
          </p>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-gold text-navy-blue font-bold rounded-md hover:bg-light-blue hover:text-white transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
