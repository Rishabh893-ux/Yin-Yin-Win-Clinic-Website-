/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f4f6f6',
          100: '#e4e9ea',
          200: '#c9d4d5',
          300: '#a3b4b6',
          400: '#748a8d',
          500: '#576f72',
          600: '#485c5f',
          700: '#3d4d4f',
          800: '#2a3536',
          900: '#1c2425',
          950: '#0f1414',
        },
        teal: {
          50: '#effcfa',
          100: '#c9f6ef',
          200: '#95ede1',
          300: '#5cdccc',
          400: '#2fc2b1',
          500: '#17a394',
          600: '#0f8277',
          700: '#106862',
          800: '#12524e',
          900: '#124442',
          950: '#052827',
        },
        sand: {
          50: '#faf8f4',
          100: '#f4efe6',
          200: '#e8dcc8',
          300: '#dac5a3',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(15, 20, 20, 0.06), 0 8px 24px -8px rgba(15, 20, 20, 0.08)',
        card: '0 1px 2px rgba(15,20,20,0.04), 0 12px 32px -12px rgba(15,20,20,0.12)',
        lift: '0 20px 48px -16px rgba(15,20,20,0.22)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      maxWidth: {
        content: '78rem',
      },
    },
  },
  plugins: [],
}
