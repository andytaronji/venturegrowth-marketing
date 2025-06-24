'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const BreadcrumbSchema = () => {
  const pathname = usePathname();

  useEffect(() => {
    const generateBreadcrumbList = () => {
      const baseUrl = 'https://www.digitalmosaicstudios.com';
      const pathSegments = pathname.split('/').filter(segment => segment !== '');
      
      const breadcrumbItems = [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': baseUrl
        }
      ];

      let currentPath = baseUrl;
      pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const position = index + 2;
        
        let name = '';
        switch (segment) {
          case 'about':
            name = 'About Us';
            break;
          case 'services':
            name = 'Services';
            break;
          case 'contact':
            name = 'Contact Us';
            break;
          default:
            name = segment.charAt(0).toUpperCase() + segment.slice(1);
        }

        breadcrumbItems.push({
          '@type': 'ListItem',
          'position': position,
          'name': name,
          'item': currentPath
        });
      });

      return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbItems
      };
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(generateBreadcrumbList());
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [pathname]);

  return null;
};

export default BreadcrumbSchema;
