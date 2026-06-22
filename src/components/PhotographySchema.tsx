'use client';

import { useEffect } from 'react';

const PhotographySchema = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Professional Photography & SEO Image Optimization',
      'description': 'Professional on-site photography with full SEO image optimization — alt tags, filenames, metadata, and compression — so every photo works harder for your business online. Serving Atlanta, Marietta, and all of Georgia.',
      'url': 'https://www.digitalmosaicstudios.com/services/photography',
      'provider': {
        '@type': 'Organization',
        'name': 'Digital Mosaic Studios',
        'url': 'https://www.digitalmosaicstudios.com',
        'telephone': '404-861-7744',
        'email': 'infodigitalmosaicstudios@gmail.com',
        'areaServed': [
          { '@type': 'City', 'name': 'Atlanta' },
          { '@type': 'City', 'name': 'Marietta' },
          { '@type': 'State', 'name': 'Georgia' }
        ]
      },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Photography & SEO Packages',
        'itemListElement': [
          {
            '@type': 'Offer',
            'name': 'Starter Session',
            'description': '4-hour on-site shoot. 20 professionally edited photos delivered with full SEO optimization — alt tags, compressed filenames, and metadata — ready to publish.',
            'price': '500',
            'priceCurrency': 'USD',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Starter Photography & SEO Bundle',
              'description': '4 hours on-site, 20 edited photos, full SEO image optimization'
            }
          },
          {
            '@type': 'Offer',
            'name': 'Growth Session',
            'description': '4–6 hour on-site shoot. 40 professionally edited photos with full SEO optimization package included.',
            'price': '1000',
            'priceCurrency': 'USD',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Growth Photography & SEO Bundle',
              'description': '4–6 hours on-site, 40 edited photos, full SEO image optimization'
            }
          },
          {
            '@type': 'Offer',
            'name': 'Full Day Package',
            'description': 'Full day of on-site coverage with your team or in-store. Comprehensive photo library plus complete SEO image optimization bundle.',
            'price': '1350',
            'priceCurrency': 'USD',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Full Day Photography & SEO Bundle',
              'description': 'Full day on-site, comprehensive photo library, full SEO image optimization'
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

export default PhotographySchema;
