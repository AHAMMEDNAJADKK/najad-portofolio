/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: '#080A09',
          surface: '#101412',
          elevated: '#141A17',
          card: '#121714',
          hover: '#18211D',
        },
        accent: {
          DEFAULT: '#24D18A',
          hover: '#1EB878',
          light: '#3FE39C',
          subtle: 'rgba(36, 209, 138, 0.08)',
          border: 'rgba(36, 209, 138, 0.25)',
        },
        text: {
          primary: '#EDEDEA',
          secondary: '#8E9892',
          muted: '#5A635E',
        },
        border: {
          DEFAULT: '#1C2420',
          subtle: '#151C18',
          light: '#28362F',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      }
    },
  },
  plugins: [],
}
