import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.digitalmosaicsstudios.com';
  const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  
  // Define all the pages on the site
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/services', priority: '0.9', changefreq: 'monthly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  ];
  
  // Define service pages
  const servicePages = [
    { url: '/services/website-design', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/website-development', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/website-maintenance', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/social-media-management', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/content-creation', priority: '0.8', changefreq: 'monthly' },
  ];
  
  // Define location pages for local SEO
  const locationPages = [
    { url: '/locations/marietta-ga', priority: '0.7', changefreq: 'monthly' },
    { url: '/locations/atlanta-ga', priority: '0.7', changefreq: 'monthly' },
    { url: '/locations/roswell-ga', priority: '0.7', changefreq: 'monthly' },
    { url: '/locations/alpharetta-ga', priority: '0.7', changefreq: 'monthly' },
    { url: '/locations/woodstock-ga', priority: '0.7', changefreq: 'monthly' },
  ];
  
  // Combine all pages
  const allPages = [...pages, ...servicePages, ...locationPages];
  
  // Generate the XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n';
  xml += '        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"\n';
  xml += '        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"\n';
  xml += '        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"\n';
  xml += '        xmlns:pagemap="http://www.google.com/schemas/sitemap-pagemap/1.0"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n';
  xml += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
  xml += '                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';
  
  // Add each URL to the sitemap
  allPages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${page.url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  // Return the XML with the appropriate content type
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}
