import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Photography & SEO Image Optimization | Atlanta, GA | Digital Mosaic Studios",
  description: "On-site professional photography bundled with full SEO image optimization — alt tags, metadata, filenames, and compression. 3 packages from $500. Serving Atlanta, Marietta & Georgia businesses.",
  keywords: "professional photography Atlanta, business photography Georgia, SEO image optimization, product photography Atlanta, commercial photography Marietta, photo SEO bundle, website photography Atlanta",
  alternates: {
    canonical: 'https://www.digitalmosaicstudios.com/services/photography',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitalmosaicstudios.com/services/photography',
    title: 'Professional Photography & SEO Image Optimization | Digital Mosaic Studios',
    description: 'On-site professional photography with full SEO image optimization. Packages from $500. Serving Atlanta, Marietta, and all of Georgia.',
    siteName: 'Digital Mosaic Studios',
    images: [
      {
        url: 'https://res.cloudinary.com/di4phdven/image/upload/c_fill,w_1200,h_630/f_auto/q_auto:best/v1/nice_vnyvxy',
        width: 1200,
        height: 630,
        alt: 'Digital Mosaic Studios - Professional Photography & SEO Image Optimization in Atlanta, Georgia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Photography & SEO Image Optimization | Digital Mosaic Studios',
    description: 'On-site professional photography with full SEO image optimization. Packages from $500. Atlanta, Marietta & Georgia.',
    images: ['https://res.cloudinary.com/di4phdven/image/upload/c_fill,w_1200,h_630/f_auto/q_auto:best/v1/nice_vnyvxy'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
