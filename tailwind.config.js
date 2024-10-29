/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        tektur: ['Tektur', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        glow: {
          '0%': {
            'box-shadow': '0 0 5px rgba(116, 0, 0, 0.5), 0 0 20px rgba(116, 0, 0, 0.3)',
          },
          '100%': {
            'box-shadow': '0 0 10px rgba(116, 0, 0, 0.8), 0 0 30px rgba(116, 0, 0, 0.5)',
          },
        },
      },
      aspectRatio: {
        'w-16': 16,
        'h-9': 9,
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};