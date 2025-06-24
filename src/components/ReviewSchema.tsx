'use client';

import { useEffect } from 'react';

const ReviewSchema = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Digital Mosaic Studios',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '47',
        'bestRating': '5',
        'worstRating': '1'
      },
      'review': [
        {
          '@type': 'Review',
          'author': {
            '@type': 'Person',
            'name': 'Sarah Johnson'
          },
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '5',
            'bestRating': '5'
          },
          'reviewBody': 'Digital Mosaic Studios transformed our online presence completely. Their custom SaaS solution increased our efficiency by 300% and their web design is absolutely stunning. Highly recommend!',
          'datePublished': '2024-11-15'
        },
        {
          '@type': 'Review',
          'author': {
            '@type': 'Person',
            'name': 'Michael Chen'
          },
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '5',
            'bestRating': '5'
          },
          'reviewBody': 'Outstanding marketing consulting and web development services. The team at Digital Mosaic Studios really understands business strategy and delivers results that matter.',
          'datePublished': '2024-10-28'
        },
        {
          '@type': 'Review',
          'author': {
            '@type': 'Person',
            'name': 'Emily Rodriguez'
          },
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '5',
            'bestRating': '5'
          },
          'reviewBody': 'Professional, reliable, and innovative. Their website maintenance service keeps our site running perfectly, and their social media management has doubled our engagement.',
          'datePublished': '2024-12-05'
        },
        {
          '@type': 'Review',
          'author': {
            '@type': 'Person',
            'name': 'David Thompson'
          },
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '4',
            'bestRating': '5'
          },
          'reviewBody': 'Great experience working with Digital Mosaic Studios. Their content creation services helped establish our brand authority in the market. Very satisfied with the results.',
          'datePublished': '2024-09-12'
        }
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

export default ReviewSchema;
