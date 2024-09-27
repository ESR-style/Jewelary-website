// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          500: '#D4AF37',
          600: '#C19A2B',
        },
        silver: {
          500: '#C0C0C0',
          600: '#A8A8A8',
        },
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s forwards',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#D4AF37", // Gold
          "secondary": "#C0C0C0", // Silver
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff", // White
        },
      },
    ],
  },
}