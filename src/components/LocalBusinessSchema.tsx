'use client';

import { useEffect } from 'react';

const LocalBusinessSchema = () => {
  useEffect(() => {
    // Get environment variables
    const siteName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Digital Mosaic Studios';
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.digitalmosaicstudios.com';
    const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Professional website design, development, maintenance, social media management, and content creation services in Marietta, GA and surrounding areas.';
    const businessEmail = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'infodigitalmosaicstudios@gmail.com';
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
        }
      ],
      'sameAs': [
        'https://www.facebook.com/profile.php?id=61578329544080',
        'https://www.linkedin.com/company/digital-mosaic-studios-llc/'
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
        'name': 'Digital Marketing & Web Design Services',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Marketing Consultations',
              'description': 'Expert marketing consultations to help Atlanta and Georgia businesses develop effective strategies and grow.'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Marketing Audits',
              'description': 'Comprehensive marketing audits to identify opportunities and outperform competition in Marietta, Atlanta, and beyond.'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Custom SaaS Tools',
              'description': 'Custom SaaS tools built for Atlanta accountants, Georgia retailers, and businesses expanding beyond Georgia.'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Web Design',
              'description': 'Custom, responsive websites optimized for local SEO to help Marietta, Atlanta, and Georgia businesses convert visitors into customers.'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Analytics Services',
              'description': 'Google Analytics and custom dashboards to help Atlanta and Georgia businesses make data-driven decisions.'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'AI Prompting Lessons',
              'description': 'Learn to leverage AI tools for marketing, content creation, and workflow automation through local workshops for Georgia businesses.'
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
