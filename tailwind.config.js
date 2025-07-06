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
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'light-accent': 'var(--light-accent)',
        'baby-blue': 'var(--baby-blue)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-secondary-light': 'var(--text-secondary-light)',
        'text-light': 'var(--text-light)',
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-tertiary': 'var(--bg-tertiary)',
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
        mono: ['Roboto Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      fontSize: {
        // Mobile-first responsive typography
        'body-sm': ['16px', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'body': ['18px', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'h1': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
}
