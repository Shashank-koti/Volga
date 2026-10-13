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
          DEFAULT: '#C0020F',
          dark: '#96010B',
          light: '#E61E2C',
        },
        secondary: {
          DEFAULT: '#19ABCF',
          dark: '#1387A3',
          light: '#42C4E5',
        },
        accent: {
          DEFAULT: '#E25121',
          dark: '#B73D15',
          light: '#EA724A',
        },
        heading: '#FFFFFF',
        body: '#E5E7EB',
        muted: '#9CA3AF',
        background: '#070A0F',
        surface: '#0E131F',
        dark: {
          DEFAULT: '#0B0F17',
          900: '#05070B',
          800: '#0B0F17',
          700: '#141A26',
          600: '#1F283A',
        },
        border: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      fontSize: {
        md: ['1rem', { lineHeight: '1.5rem' }],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'premium': '0 10px 30px -10px rgba(17, 24, 39, 0.08)',
        'elevated': '0 20px 40px -15px rgba(17, 24, 39, 0.12)',
        'glow-red': '0 0 25px -5px rgba(192, 2, 15, 0.35)',
        'glow-blue': '0 0 25px -5px rgba(25, 171, 207, 0.35)',
        'glow-accent': '0 0 25px -5px rgba(226, 81, 33, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'flow-line': 'flowLine 3s linear infinite',
        'radar-ping': 'radarPing 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        flowLine: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        radarPing: {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '50%': { transform: 'scale(1.5)', opacity: '0' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
