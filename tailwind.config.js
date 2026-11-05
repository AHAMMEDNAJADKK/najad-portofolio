/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: '#F5F4F0',
          surface: '#FFFFFF',
          text: '#171916',
          muted: '#70736D',
          border: '#DDDED8',
          accent: '#315C45',
          
          // Dark theme variables
          darkBg: '#111311',
          darkSurface: '#191D19',
          darkText: '#F2F2EC',
          darkMuted: '#A0A49D',
          darkBorder: '#30362F',
          darkAccent: '#83A88B',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.18em',
      },
      maxWidth: {
        'site': '1440px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
