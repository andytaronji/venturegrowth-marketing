'use client';

import { useEffect } from 'react';

const AboutPageSchema = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'name': 'About Digital Mosaic Studios',
      'description': 'Meet Digital Mosaic Studios\' expert team. Marketing consultants & web developers serving Atlanta, Marietta, Roswell & surrounding areas since 2020.',
      'url': 'https://www.digitalmosaicstudios.com/about',
      'mainEntity': {
        '@type': 'Organization',
        'name': 'Digital Mosaic Studios',
        'description': 'Digital Mosaic Studios is a premier web design and digital marketing agency specializing in custom solutions for businesses in the Atlanta metropolitan area.',
        'foundingDate': '2020',
        'founder': {
          '@type': 'Person',
          'name': 'Andrew Taronji',
          'jobTitle': 'Founder & Lead Developer'
        },
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
          'contactType': 'customer service'
        },
        'knowsAbout': [
          'Web Design',
          'Web Development',
          'Digital Marketing',
          'SaaS Development',
          'Business Strategy',
          'Content Creation',
          'Social Media Management'
        ],
        'memberOf': {
          '@type': 'Organization',
          'name': 'Georgia Business Community'
        }
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

export default AboutPageSchema;
