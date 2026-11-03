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
          main: '#080B0A',
          secondary: '#101613',
          card: '#121A16',
          elevated: '#17221D',
        },
        accent: {
          DEFAULT: '#24D18A',
          hover: '#1EB878',
          light: '#42E39F',
          glow: 'rgba(36, 209, 138, 0.15)',
          dim: 'rgba(36, 209, 138, 0.08)',
        },
        text: {
          primary: '#F5F7F6',
          secondary: '#A4AEA8',
          muted: '#6C7A73',
        },
        border: {
          DEFAULT: '#25342D',
          subtle: '#1C2722',
          light: '#31443B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(36, 209, 138, 0.2)',
        'glow-md': '0 0 35px -5px rgba(36, 209, 138, 0.25)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'radial-radial': 'radial-gradient(circle at top, rgba(36, 209, 138, 0.08), transparent 70%)',
      }
    },
  },
  plugins: [],
}
