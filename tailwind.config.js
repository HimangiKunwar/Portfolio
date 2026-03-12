/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#050810',
        surface: '#0d1117',
        neon: '#00ff87',
        glow: '#00d4ff',
        muted: '#8b92a8',
      },
      fontFamily: {
        display: ['Syne', 'Bebas Neue', 'sans-serif'],
        body: ['Inter', 'DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon': '0 0 40px rgba(0,255,135,0.1)',
        'glow': '0 0 30px rgba(0,212,255,0.15)',
      },
      backdropBlur: {
        'glass': '12px',
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
      },
    },
  },
  plugins: [],
}
