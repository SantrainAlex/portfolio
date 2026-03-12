import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#0F2340',
          800: '#1E3A5F',
          700: '#2A5080',
          600: '#3A6EA8',
          400: '#4A90D9',
          300: '#6AAEE8',
          100: '#E8F0FA',
        },
        neutral: {
          950: '#0D0D0D',
          900: '#1A1A1A',
          800: '#2D2D2D',
          700: '#404040',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
