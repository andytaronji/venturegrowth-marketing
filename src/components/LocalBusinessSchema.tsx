const schema = {
  '@context': 'https://schema.org',
  '@type': 'MarketingAgency',
  'name': 'Digital Mosaic Studios',
  'description': 'Premium web design, custom SaaS tools, and data-driven marketing for startups, small businesses, and growing companies in Atlanta, Georgia, and nationwide.',
  'url': 'https://www.digitalmosaicstudios.com',
  'logo': 'https://res.cloudinary.com/di4phdven/image/upload/v1752194892/u9524928111_A_crisp_white_circle_intersected_by_layered_geome_350a4477-3775-4097-b658-86a65017fdc3_3_vheyy9.png',
  'image': 'https://res.cloudinary.com/di4phdven/image/upload/c_fill,w_1200,h_630/f_auto/q_auto:best/v1/nice_vnyvxy',
  'telephone': '404-861-7744',
  'email': 'infodigitalmosaicstudios@gmail.com',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Marietta',
    'addressLocality': 'Marietta',
    'addressRegion': 'GA',
    'postalCode': '30062',
    'addressCountry': 'US',
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': '33.9526',
    'longitude': '-84.5499',
  },
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '09:00',
      'closes': '18:00',
    },
  ],
  'sameAs': [
    'https://www.facebook.com/profile.php?id=61578329544080',
    'https://www.linkedin.com/company/digital-mosaic-studios-llc/',
  ],
  'priceRange': '$$',
  'areaServed': [
    { '@type': 'City', 'name': 'Marietta', 'sameAs': 'https://en.wikipedia.org/wiki/Marietta,_Georgia' },
    { '@type': 'City', 'name': 'Roswell', 'sameAs': 'https://en.wikipedia.org/wiki/Roswell,_Georgia' },
    { '@type': 'City', 'name': 'Alpharetta', 'sameAs': 'https://en.wikipedia.org/wiki/Alpharetta,_Georgia' },
    { '@type': 'City', 'name': 'Woodstock', 'sameAs': 'https://en.wikipedia.org/wiki/Woodstock,_Georgia' },
    { '@type': 'City', 'name': 'Atlanta', 'sameAs': 'https://en.wikipedia.org/wiki/Atlanta' },
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
          'description': 'Expert marketing consultations to help startups, small businesses, and growing companies develop effective strategies and scale successfully.',
        },
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Marketing Audits',
          'description': 'Comprehensive marketing audits to identify opportunities and maximize ROI for small businesses and startups across all industries.',
        },
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Custom SaaS Tools',
          'description': 'Custom SaaS tools built for startups, small businesses, and growing companies to automate workflows and gain competitive advantages.',
        },
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Web Design',
          'description': 'Custom, responsive websites optimized for conversion to help startups and small businesses turn visitors into loyal customers.',
        },
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Analytics Services',
          'description': 'Google Analytics and custom dashboards to help startups and small businesses make data-driven decisions and scale efficiently.',
        },
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'AI Prompting Lessons',
          'description': 'Learn to leverage AI tools for marketing, content creation, and workflow automation to give your startup or small business a competitive edge.',
        },
      },
    ],
  },
};

const LocalBusinessSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
);

export default LocalBusinessSchema;
