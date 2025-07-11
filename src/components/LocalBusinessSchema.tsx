'use client';

import { useEffect } from 'react';

const LocalBusinessSchema = () => {
  useEffect(() => {
    // Get environment variables
    const siteName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Digital Mosaic Studios';
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.digitalmosaicstudios.com';
    const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Professional website design, development, maintenance, social media management, and content creation services in Marietta, GA and surrounding areas.';
    const businessEmail = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'taronjiandrew@gmail.com';
    const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '404-861-7744';
    const businessAddress = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || 'Marietta, GA 30062';
    
    // This code will only run on the client side
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': siteName,
      'description': siteDescription,
      'url': siteUrl,
      'logo': 'https://res.cloudinary.com/di4phdven/image/upload/v1752194892/u9524928111_A_crisp_white_circle_intersected_by_layered_geome_350a4477-3775-4097-b658-86a65017fdc3_3_vheyy9.png',
      'image': 'https://res.cloudinary.com/demo/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/samples/landscapes/landscape-panorama',
      'telephone': businessPhone,
      'email': businessEmail,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Marietta',
        'addressRegion': 'GA',
        'postalCode': '30062',
        'addressCountry': 'US'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '33.9526',  // Approximate coordinates for Marietta, GA
        'longitude': '-84.5499'
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '09:00',
          'closes': '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Saturday',
          'opens': '10:00',
          'closes': '16:00'
        }
      ],
      'sameAs': [
        'https://www.facebook.com/digitalmosaicstudios',
        'https://www.instagram.com/digitalmosaicstudios',
        'https://twitter.com/digitalmosaic',
        'https://www.linkedin.com/company/digital-mosaic-studios'
      ],
      'priceRange': '$$',
      'areaServed': [
        {
          '@type': 'City',
          'name': 'Marietta',
          'sameAs': 'https://en.wikipedia.org/wiki/Marietta,_Georgia'
        },
        {
          '@type': 'City',
          'name': 'Roswell',
          'sameAs': 'https://en.wikipedia.org/wiki/Roswell,_Georgia'
        },
        {
          '@type': 'City',
          'name': 'Alpharetta',
          'sameAs': 'https://en.wikipedia.org/wiki/Alpharetta,_Georgia'
        },
        {
          '@type': 'City',
          'name': 'Woodstock',
          'sameAs': 'https://en.wikipedia.org/wiki/Woodstock,_Georgia'
        },
        {
          '@type': 'City',
          'name': 'Atlanta',
          'sameAs': 'https://en.wikipedia.org/wiki/Atlanta'
        }
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Digital Services',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Custom SaaS Tools',
              'description': 'Take control and dominate your industry with custom tools built specifically to your industry and service offerings.'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Website Development',
              'description': 'Robust, scalable website development with cutting-edge technologies for optimal performance.'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Website Maintenance',
              'description': 'Regular updates, security patches, and performance optimization to keep your website running smoothly.'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Social Media Management',
              'description': 'Strategic planning and creation of engaging content tailored to your target audience.'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Content Creation',
              'description': 'Compelling, high-quality content that engages your audience and establishes your expertise.'
            }
          }
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      // Clean up
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default LocalBusinessSchema;
