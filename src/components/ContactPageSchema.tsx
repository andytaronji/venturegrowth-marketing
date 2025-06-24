'use client';

import { useEffect } from 'react';

const ContactPageSchema = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact Digital Mosaic Studios',
      'description': 'Contact Digital Mosaic Studios for web design & marketing consulting. Serving Atlanta metro area. Call 404-861-7744 for your free consultation!',
      'url': 'https://www.digitalmosaicstudios.com/contact',
      'mainEntity': {
        '@type': 'Organization',
        'name': 'Digital Mosaic Studios',
        'contactPoint': [
          {
            '@type': 'ContactPoint',
            'telephone': '404-861-7744',
            'contactType': 'customer service',
            'email': 'taronjiandrew@gmail.com',
            'availableLanguage': 'English',
            'hoursAvailable': [
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
            ]
          },
          {
            '@type': 'ContactPoint',
            'contactType': 'sales',
            'telephone': '404-861-7744',
            'email': 'taronjiandrew@gmail.com'
          }
        ],
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Marietta',
          'addressRegion': 'GA',
          'postalCode': '30062',
          'addressCountry': 'US'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '33.9526',
          'longitude': '-84.5499'
        },
        'areaServed': [
          'Marietta, GA',
          'Atlanta, GA',
          'Roswell, GA',
          'Alpharetta, GA',
          'Woodstock, GA'
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

export default ContactPageSchema;
