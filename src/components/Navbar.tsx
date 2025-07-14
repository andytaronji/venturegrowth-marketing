'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CldImageWrapper from './CldImageWrapper';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${isScrolled ? 'bg-accent shadow-subtle' : 'bg-accent'} text-white fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 md:h-14">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="mr-2">
                <CldImageWrapper
                  src="u9524928111_A_crisp_white_circle_intersected_by_layered_geome_350a4477-3775-4097-b658-86a65017fdc3_3_vheyy9"
                  alt="Digital Mosaic Studios - Marketing Consulting & Web Design in Marietta, Atlanta, Georgia"
                  width={40}
                  height={40}
                  crop="fit"
                  gravity="center"
                  className="rounded-full w-10 h-10 object-cover"
                  sizes="40px"
                  priority={true}
                  loading="eager"
                />
              </div>
              <span className="text-xl font-semibold text-white">
                Digital Mosaic Studios
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-white hover:text-bg-primary transition-colors duration-200">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-white hover:text-bg-primary transition-colors duration-200">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium text-white hover:text-bg-primary transition-colors duration-200">
              About Us
            </Link>
            <Link href="/blog" className="text-sm font-medium text-white hover:text-bg-primary transition-colors duration-200">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-white hover:text-bg-primary transition-colors duration-200">
              Contact Us
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-bg-primary focus:outline-none transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div 
        className={`${isMenuOpen ? 'max-h-96 opacity-100 border-t border-gray' : 'max-h-0 opacity-0'} md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-accent`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link 
            href="/" 
            className="block px-3 py-2 text-base font-medium text-white hover:text-bg-primary transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className="block px-3 py-2 text-base font-medium text-white hover:text-bg-primary transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/about" 
            className="block px-3 py-2 text-base font-medium text-white hover:text-bg-primary transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/blog" 
            className="block px-3 py-2 text-base font-medium text-white hover:text-bg-primary transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            className="block px-3 py-2 text-base font-medium text-white hover:text-bg-primary transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
