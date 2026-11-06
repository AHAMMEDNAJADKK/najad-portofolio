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
          bg: '#F8F7F4',
          surface: '#FFFFFF',
          text: '#121513',
          muted: '#636966',
          border: '#DDDED8',
          accent: '#1F6B47',
          
          // Refined Senior-Grade Dark Theme (Deep Obsidian / Graphite)
          darkBg: '#090A0C',
          darkSurface: '#121417',
          darkSurfaceSubtle: '#181C20',
          darkText: '#F3F4F6',
          darkMuted: '#9CA3AF',
          darkBorder: '#20262B',
          darkBorderHover: '#2E3840',
          darkAccent: '#34D399',
          darkAccentMuted: 'rgba(52, 211, 153, 0.12)',
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
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
        'glow-accent': '0 0 25px -5px rgba(52, 211, 153, 0.25)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulseSlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
