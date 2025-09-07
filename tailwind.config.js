/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Accessible core brand colors
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'light-accent': 'var(--light-accent)',
        'baby-blue': 'var(--baby-blue)',
        
        // Text colors with proper contrast ratios
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-secondary-light': 'var(--text-secondary-light)',
        'text-light': 'var(--text-light)',
        
        // Background colors
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-tertiary': 'var(--bg-tertiary)',
      },
      fontFamily: {
        // Consistent typography system using Figtree
        'figtree': ['Figtree', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
        sans: ['Figtree', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
        mono: ['Roboto Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      fontSize: {
        // Enhanced typography scale for luxury feel
        'xs': ['12px', { lineHeight: '1.4', letterSpacing: '0.025em' }],
        'sm': ['14px', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'base': ['16px', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'lg': ['18px', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'xl': ['20px', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['24px', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
        '3xl': ['30px', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        '4xl': ['36px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        '5xl': ['48px', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '6xl': ['60px', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        '7xl': ['72px', { lineHeight: '1.0', letterSpacing: '-0.04em' }],
        
        // Luxury-specific sizes
        'luxury-hero': ['64px', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '700' }],
        'luxury-title': ['42px', { lineHeight: '1.15', letterSpacing: '-0.03em', fontWeight: '600' }],
        'luxury-subtitle': ['28px', { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '500' }],
        'luxury-body': ['18px', { lineHeight: '1.65', letterSpacing: '-0.01em', fontWeight: '400' }],
        'luxury-caption': ['14px', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '500' }],
      },
      letterSpacing: {
        'luxury-tight': '-0.04em',
        'luxury-normal': '-0.02em',
        'luxury-wide': '0.02em',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 25px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.15)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'button-hover': '0 4px 8px rgba(0, 0, 0, 0.15)',
        'luxury': '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'luxury-hover': '0 8px 30px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.15)',
        'luxury-inset': 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'luxury-fade-in': 'luxuryFadeIn 0.8s ease-out',
        'luxury-slide-up': 'luxurySlideUp 0.8s ease-out',
        'luxury-scale': 'luxuryScale 0.6s ease-out',
        'luxury-glow': 'luxuryGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        luxuryFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        luxurySlideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        luxuryScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        luxuryGlow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
