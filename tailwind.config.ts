import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#050B1A',
          800: '#0A1429',
          700: '#0F1D3A',
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.08)',
          whiteHover: 'rgba(255, 255, 255, 0.12)',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        cyan: {
          400: '#22D3EE',
          500: '#06B6D4',
        },
      },
      backdropBlur: {
        xl: '24px',
      },
      fontFamily: {
        arabic: ['IBM Plex Sans Arabic', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
