'use client';

import { useEffect } from 'react';

const OrganizationSchema = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Digital Mosaic Studios',
      'alternateName': 'Digital Mosaic',
      'url': 'https://www.digitalmosaicstudios.com',
      'logo': 'https://res.cloudinary.com/di4phdven/image/upload/v1752194892/u9524928111_A_crisp_white_circle_intersected_by_layered_geome_350a4477-3775-4097-b658-86a65017fdc3_3_vheyy9.png',
      'description': 'Professional web design & marketing consulting in Marietta, GA. Custom websites, SaaS tools & digital marketing for Atlanta area businesses.',
      'foundingDate': '2020',
      'founders': [
        {
          '@type': 'Person',
          'name': 'Andrew Taronji'
        }
      ],
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Marietta',
        'addressRegion': 'GA',
        'postalCode': '30062',
        'addressCountry': 'US'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '404-861-7744',
        'contactType': 'customer service',
        'email': 'taronjiandrew@gmail.com',
        'availableLanguage': 'English'
      },
      'sameAs': [
        'https://www.facebook.com/digitalmosaicstudios',
        'https://www.instagram.com/digitalmosaicstudios',
        'https://twitter.com/digitalmosaic',
        'https://www.linkedin.com/company/digital-mosaic-studios'
      ],
      'areaServed': [
        'Marietta, GA',
        'Atlanta, GA',
        'Roswell, GA',
        'Alpharetta, GA',
        'Woodstock, GA',
        'Georgia',
        'United States'
      ],
      'serviceType': [
        'Web Design',
        'Web Development',
        'Marketing Consulting',
        'SaaS Development',
        'Digital Marketing',
        'Business Strategy Consulting'
      ]
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

export default OrganizationSchema;
