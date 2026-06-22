'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import PhotographySchema from '@/components/PhotographySchema';
import EnhancedCTASection from '@/components/EnhancedCTASection';
import { useGSAPAnimation } from '@/components/GSAPProvider';

/* ─── Data ─── */
const packages = [
  {
    name: 'Starter Session',
    price: '$500',
    duration: '4 Hours On-Site',
    photos: '20 Professionally Edited Photos',
    highlight: false,
    badge: null,
    features: [
      '4 hours of on-site coverage',
      '20 high-resolution edited photos delivered',
      'SEO-optimized filenames for every image',
      'Alt tag copywriting (keyword-targeted)',
      'Image metadata & EXIF optimization',
      'WebP compression for fast page loads',
      'Delivered in web-ready & print-ready formats',
    ],
    cta: 'Book Starter',
    description: 'Perfect for businesses that need a fresh batch of professional imagery for their website or a new product/service launch.',
  },
  {
    name: 'Growth Session',
    price: '$1,000',
    duration: '4–6 Hours On-Site',
    photos: '40 Professionally Edited Photos',
    highlight: true,
    badge: 'Most Popular',
    features: [
      '4–6 hours of on-site coverage',
      '40 high-resolution edited photos delivered',
      'SEO-optimized filenames for every image',
      'Alt tag copywriting (keyword-targeted)',
      'Image metadata & EXIF optimization',
      'WebP compression for fast page loads',
      'Delivered in web-ready & print-ready formats',
      'Priority delivery within 5 business days',
    ],
    cta: 'Book Growth',
    description: 'Ideal for growing businesses that need a comprehensive image library covering multiple products, team members, or service areas.',
  },
  {
    name: 'Full Day Package',
    price: '$1,350',
    duration: 'Full Day On-Site',
    photos: 'Comprehensive Photo Library',
    highlight: false,
    badge: 'Best Value',
    features: [
      'Full day working alongside your team',
      'Comprehensive library of edited photos',
      'Complete SEO image optimization bundle',
      'SEO-optimized filenames for every image',
      'Alt tag copywriting (keyword-targeted)',
      'Image metadata & EXIF optimization',
      'WebP compression for fast page loads',
      'Delivered in web-ready & print-ready formats',
      'Priority delivery within 5 business days',
      'Strategic shot list consultation included',
    ],
    cta: 'Book Full Day',
    description: 'Our most comprehensive offering — a full day in the field or in-store, capturing your brand story end to end. Best for rebrands, grand openings, or full website overhauls.',
  },
];

const seoFeatures = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: 'SEO-Optimized Filenames',
    description: "Every image is renamed with keyword-rich, descriptive filenames before it ever touches your website — so Google knows exactly what it's looking at.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    ),
    title: 'Alt Tag Copywriting',
    description: 'We write targeted alt text for every photo — improving accessibility and giving search engines clear context to rank your images in Google Image Search.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Metadata & EXIF Data',
    description: "We embed title, description, copyright, and geo data directly into each image's metadata — an often-overlooked SEO signal that sets your photos apart.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'WebP Compression',
    description: 'Images are converted and compressed to next-gen WebP format — cutting load times dramatically without sacrificing quality. Faster pages = higher Lighthouse scores.',
  },
];

/* ─── Component ─── */
export default function PhotographyPageClient() {
  const { gsap } = useGSAPAnimation();

  // Refs for GSAP hero animation
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroDescRef = useRef<HTMLParagraphElement>(null);
  const heroBadgeRef = useRef<HTMLSpanElement>(null);
  const heroBreadcrumbRef = useRef<HTMLElement>(null);
  const heroButtonsRef = useRef<HTMLDivElement>(null);

  // Refs for section pop-in
  const seoSectionRef = useRef<HTMLElement>(null);
  const seoCTARef = useRef<HTMLDivElement>(null);
  const packagesSectionRef = useRef<HTMLElement>(null);
  const packagesHeaderRef = useRef<HTMLDivElement>(null);
  const whySectionRef = useRef<HTMLElement>(null);
  const whyCardRef = useRef<HTMLDivElement>(null);

  /* Hero entrance animation (GSAP) — matches EnhancedServicesHero pattern */
  useEffect(() => {
    if (!gsap) return;
    const els = [heroBreadcrumbRef.current, heroBadgeRef.current, heroTitleRef.current, heroDescRef.current, heroButtonsRef.current].filter(Boolean);
    gsap.set(els, { opacity: 0, y: 30, scale: 0.97 });
    gsap.to(els, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.75,
      ease: 'power2.out',
      stagger: 0.12,
    });
  }, [gsap]);

  /* IntersectionObserver pop-in for below-fold sections */
  useEffect(() => {
    const observables: Array<{ section: HTMLElement | null; target: HTMLElement | null; delay?: number }> = [
      { section: seoSectionRef.current, target: seoCTARef.current },
      { section: packagesSectionRef.current, target: packagesHeaderRef.current },
      { section: whySectionRef.current, target: whyCardRef.current },
    ];

    const observers = observables.map(({ section, target }) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && target) {
              target.classList.add('is-visible');
            }
          });
        },
        { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
      );
      if (section) observer.observe(section);
      return { observer, section };
    });

    return () => {
      observers.forEach(({ observer, section }) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <PhotographySchema />

      <div className="relative min-h-screen overflow-hidden bg-dark-solid">
        {/* Ambient background orbs */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-20 left-20 w-16 h-16 bg-white opacity-3 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent opacity-8 rounded-full blur-2xl" />
          <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-white opacity-4 rounded-full blur-lg" />
          <div className="absolute bottom-1/2 left-1/3 w-20 h-20 bg-light-accent opacity-6 rounded-full blur-xl" />
        </div>

        <div className="relative z-10">

          {/* ─── HERO ─── */}
          <section className="relative text-white min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-20 right-10 w-32 h-32 bg-accent opacity-10 rounded-full blur-2xl" />
              <div className="absolute bottom-20 left-10 w-40 h-40 bg-light-accent opacity-5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
              <nav ref={heroBreadcrumbRef} aria-label="Breadcrumb" className="flex justify-center mb-8">
                <ol className="flex items-center space-x-2 text-sm text-white/60 font-figtree">
                  <li><Link href="/" className="hover:text-white transition-colors duration-200" style={{ color: 'inherit' }}>Home</Link></li>
                  <li><span className="mx-1">/</span></li>
                  <li><Link href="/services" className="hover:text-white transition-colors duration-200" style={{ color: 'inherit' }}>Services</Link></li>
                  <li><span className="mx-1">/</span></li>
                  <li className="text-white/90">Photography</li>
                </ol>
              </nav>

              <span
                ref={heroBadgeRef}
                className="inline-block px-4 py-1.5 mb-6 text-xs font-figtree font-semibold tracking-widest uppercase text-accent border border-accent/40 rounded-full bg-accent/10"
              >
                New Service
              </span>

              <h1
                ref={heroTitleRef}
                className="font-figtree text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
              >
                Professional Photography
                <span className="block text-accent mt-2">Built for the Web</span>
              </h1>

              <p
                ref={heroDescRef}
                className="text-lg sm:text-xl md:text-2xl text-white font-figtree font-medium max-w-3xl mx-auto leading-relaxed mb-10"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
              >
                We don&apos;t just take great photos — we optimize every single one for search engines.
                Alt tags, filenames, metadata, and compression included in every package.
              </p>

              <div ref={heroButtonsRef} className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="#packages"
                  className="px-8 py-4 font-figtree font-semibold rounded-full bg-accent text-white hover:bg-light-accent transition-all duration-200 transform hover:scale-105 shadow-button hover:shadow-button-hover text-base"
                  style={{ color: '#ffffff' }}
                >
                  View Packages
                </a>
                <Link
                  href="/contact"
                  className="px-8 py-4 font-figtree font-semibold rounded-full bg-transparent border-2 border-white text-white hover:bg-white transition-all duration-200 transform hover:scale-105 text-base"
                  style={{ color: '#ffffff' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#1e3a8a')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </section>

          {/* ─── SEO FEATURES ─── */}
          <section ref={seoSectionRef} className="section-padding px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div
                ref={seoCTARef}
                className="bg-white/10 backdrop-blur-sm rounded-xl shadow-luxury overflow-hidden"
                data-animate="pop-in"
              >
                <div className="gradient-border-card-content">
                  <div className="p-8 md:p-12">
                    <div className="text-center mb-10">
                      <h2
                        className="font-figtree text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
                        style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                      >
                        Every Package Includes Full SEO Optimization
                      </h2>
                      <p className="text-white font-figtree text-lg max-w-2xl mx-auto" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                        Most photographers hand you raw files. We hand you photos that are already optimized to rank — and to load fast on your website.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {seoFeatures.map((feature, i) => (
                        <div
                          key={i}
                          className="bg-white/5 border border-white/20 rounded-2xl p-6 hover:bg-white/10 hover:border-accent/50 transition-all duration-300"
                        >
                          <div className="text-accent mb-4">{feature.icon}</div>
                          <h3
                            className="font-figtree font-semibold text-white text-lg mb-2"
                            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
                          >
                            {feature.title}
                          </h3>
                          <p className="font-figtree text-white/80 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── PRICING PACKAGES ─── */}
          <section id="packages" ref={packagesSectionRef} className="section-padding px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div ref={packagesHeaderRef} data-animate="pop-in">
                <div className="text-center mb-12">
                  <h2
                    className="font-figtree text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                  >
                    Choose Your Package
                  </h2>
                  <p className="text-white font-figtree text-lg max-w-xl mx-auto" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                    Transparent pricing. No hidden fees. SEO optimization included in every tier.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                  {packages.map((pkg, i) => (
                    <div
                      key={i}
                      className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                        pkg.highlight
                          ? 'bg-accent border-2 border-accent shadow-2xl md:scale-105'
                          : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:border-accent/50 shadow-luxury'
                      }`}
                    >
                      {pkg.badge && (
                        <div className={`text-center py-1.5 text-xs font-figtree font-bold tracking-widest uppercase ${
                          pkg.highlight ? 'bg-white/20 text-white' : 'bg-accent text-white'
                        }`}>
                          {pkg.badge}
                        </div>
                      )}

                      <div className="gradient-border-card-content flex-1 flex flex-col">
                        <div className="p-7 flex flex-col flex-grow">
                          <div className="mb-5">
                            <h3
                              className="font-figtree font-bold text-xl text-white mb-1"
                              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
                            >
                              {pkg.name}
                            </h3>
                            <div className="flex items-end gap-1 mb-3">
                              <span className={`font-figtree font-black text-4xl ${pkg.highlight ? 'text-white' : 'text-accent'}`}>
                                {pkg.price}
                              </span>
                              <span className="font-figtree text-sm mb-1 text-white/60">flat rate</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-figtree font-medium text-white/70 mb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {pkg.duration}
                            </div>
                            <div className="flex items-center gap-2 text-sm font-figtree font-medium text-white/70">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {pkg.photos}
                            </div>
                          </div>

                          <p className="font-figtree text-sm leading-relaxed mb-5 text-white/75">{pkg.description}</p>

                          <ul className="space-y-2.5 mb-7 flex-grow">
                            {pkg.features.map((feature, j) => (
                              <li key={j} className="flex items-start gap-2.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className={`h-4 w-4 mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-white' : 'text-accent'}`}
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="font-figtree text-sm text-white/85">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <Link
                            href="/contact"
                            className={`block text-center px-6 py-3.5 font-figtree font-semibold rounded-full transition-all duration-200 transform hover:scale-105 text-sm shadow-button hover:shadow-button-hover ${
                              pkg.highlight
                                ? 'bg-white hover:bg-white/90'
                                : 'bg-accent hover:bg-light-accent'
                            }`}
                            style={{ color: pkg.highlight ? '#0066CC' : '#ffffff' }}
                            onMouseEnter={e => { e.currentTarget.style.color = pkg.highlight ? '#0066CC' : '#ffffff'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = pkg.highlight ? '#0066CC' : '#ffffff'; }}
                          >
                            {pkg.cta}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-center text-white/40 font-figtree text-sm mt-8">
                  All packages include travel within metro Atlanta. Additional travel fees may apply outside the Atlanta metro area.{' '}
                  <Link href="/contact" style={{ color: 'var(--accent)' }}>Contact us for a custom quote.</Link>
                </p>
              </div>
            </div>
          </section>

          {/* WHY PHOTOS + SEO */}
          <section ref={whySectionRef} className="section-padding px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div
                ref={whyCardRef}
                className="bg-white/10 backdrop-blur-sm rounded-xl shadow-luxury overflow-hidden"
                data-animate="pop-in"
              >
                <div className="gradient-border-card-content">
                  <div className="p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                      <div>
                        <h2 className="font-figtree text-2xl sm:text-3xl font-bold text-white mb-5" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                          Why Photos + SEO Together?
                        </h2>
                        <p className="text-white/80 font-figtree text-base leading-relaxed mb-4">
                          A beautiful photo that is not optimized is invisible to search engines. Most businesses pay a photographer, then hire an SEO specialist separately — and even then, image optimization is often skipped.
                        </p>
                        <p className="text-white/80 font-figtree text-base leading-relaxed mb-4">
                          We bundle both into one seamless workflow. Your photos arrive ready to publish — with keyword-optimized filenames, descriptive alt tags, embedded metadata, and compressed file sizes that protect your Lighthouse scores.
                        </p>
                        <p className="text-white/80 font-figtree text-base leading-relaxed">
                          The result: faster pages, better rankings, and imagery that works as hard as you do.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { stat: '20+', label: 'Photos — Starter' },
                          { stat: '40+', label: 'Photos — Growth' },
                          { stat: '100%', label: 'SEO Optimized' },
                          { stat: 'WebP', label: 'Next-Gen Format' },
                        ].map((item, i) => (
                          <div key={i} className="bg-white/5 border border-white/20 rounded-2xl p-5 text-center hover:bg-white/10 transition-all duration-300">
                            <div className="font-figtree font-black text-3xl text-accent mb-1">{item.stat}</div>
                            <div className="font-figtree text-xs text-white/60 font-medium uppercase tracking-wider">{item.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <EnhancedCTASection
            title="Ready to Elevate Your Brand's Photography?"
            description="On-site, professional, and SEO-optimized from day one. Serving Atlanta, Marietta, and all of Georgia. Book your free consultation to get started."
            buttons={[
              { text: 'Book Your Session', href: '/contact', variant: 'primary' },
              { text: 'See All Services', href: '/services', variant: 'secondary' },
            ]}
          />
        </div>
      </div>
    </>
  );
}
