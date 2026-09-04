/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D5000E',
          dark: '#A9000B',
          light: '#FFF0F1',
        },
        secondary: {
          DEFAULT: '#17BDE5',
          dark: '#0A8FAF',
          light: '#E6F9FD',
        },
        accent: {
          DEFAULT: '#FDDF02',
          dark: '#D9BE00',
          light: '#FFFBE0',
        },
        heading: '#17212B',
        body: '#53606B',
        muted: '#7B8790',
        background: '#F7F8FA',
        surface: '#FFFFFF',
        dark: {
          DEFAULT: '#111827',
          900: '#0B0F17',
          800: '#111827',
          700: '#1F2937',
          600: '#374151',
        },
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['"Playfair Display"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        md: ['1rem', { lineHeight: '1.5rem' }],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'premium': '0 10px 30px -10px rgba(17, 24, 39, 0.08)',
        'elevated': '0 20px 40px -15px rgba(17, 24, 39, 0.12)',
        'glow-red': '0 0 25px -5px rgba(213, 0, 14, 0.3)',
        'glow-blue': '0 0 25px -5px rgba(23, 189, 229, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
