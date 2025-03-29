import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative bg-navy-blue text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-light-blue to-navy-blue"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '60px 60px' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Grow Your Business with Stunning Digital Presence
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Professional web design and digital marketing solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/services" 
                className="px-8 py-4 bg-gold text-navy-blue font-bold rounded-md hover:bg-light-blue hover:text-white transition-colors duration-200 text-center"
              >
                Our Services
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-navy-blue transition-colors duration-200 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative h-96 w-full">
              <img
                src="/hero-image.jpg"
                alt="Digital Marketing Services"
                style={{ 
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
