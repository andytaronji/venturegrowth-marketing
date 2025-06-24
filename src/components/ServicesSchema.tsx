'use client';

import { useEffect } from 'react';

const ServicesSchema = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Digital Marketing and Web Design Services',
      'description': 'Custom web design, SaaS development & marketing consulting services. Serving Atlanta, Marietta, Roswell & Alpharetta businesses.',
      'provider': {
        '@type': 'Organization',
        'name': 'Digital Mosaic Studios',
        'url': 'https://www.digitalmosaicstudios.com'
      },
      'areaServed': [
        {
          '@type': 'City',
          'name': 'Marietta',
          'sameAs': 'https://en.wikipedia.org/wiki/Marietta,_Georgia'
        },
        {
          '@type': 'City',
          'name': 'Atlanta',
          'sameAs': 'https://en.wikipedia.org/wiki/Atlanta'
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
        }
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Digital Services Catalog',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Custom SaaS Tools',
              'description': 'Take control and dominate your industry with custom tools built specifically to your industry and service offerings.',
              'category': 'Software Development'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Website Development',
              'description': 'Robust, scalable website development with cutting-edge technologies for optimal performance.',
              'category': 'Web Development'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Website Maintenance',
              'description': 'Regular updates, security patches, and performance optimization to keep your website running smoothly.',
              'category': 'Web Maintenance'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Social Media Management',
              'description': 'Strategic planning and creation of engaging content tailored to your target audience.',
              'category': 'Digital Marketing'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Content Creation',
              'description': 'Compelling, high-quality content that engages your audience and establishes your expertise.',
              'category': 'Content Marketing'
            }
          }
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default ServicesSchema;
