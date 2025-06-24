'use client';

import { useEffect } from 'react';

const FAQSchema = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What services does Digital Mosaic Studios offer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'We offer comprehensive digital marketing and web design services including custom SaaS tools, website development, website maintenance, social media management, and content creation for businesses across the United States.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you serve businesses outside of Marietta, GA?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes! While we\'re based in Marietta, GA, we serve businesses throughout the Atlanta metropolitan area including Roswell, Alpharetta, Woodstock, and across the United States with our digital marketing and web design services.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How long does it take to build a custom website?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Website development timelines vary based on complexity and requirements. A typical business website takes 2-4 weeks, while custom SaaS tools and complex web applications may take 6-12 weeks. We provide detailed timelines during our consultation process.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you provide ongoing website maintenance?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, we offer comprehensive website maintenance services including regular updates, security patches, performance optimization, and content updates to keep your website running smoothly and securely.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What makes Digital Mosaic Studios different from other agencies?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'We combine strategic marketing consulting with technical web development expertise, offering both business strategy and implementation under one roof. Our focus on custom solutions and long-term partnerships sets us apart from typical agencies.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How do I get started with Digital Mosaic Studios?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Getting started is easy! Contact us at 404-861-7744 or through our contact form for a free consultation. We\'ll discuss your business goals, current challenges, and how our services can help you achieve growth.'
          }
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

export default FAQSchema;
