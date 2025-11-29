/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        background: 'hsl(var(--color-background) / <alpha-value>)',
        'background-alt': 'hsl(var(--color-background-alt) / <alpha-value>)',
        text: 'hsl(var(--color-text) / <alpha-value>)',
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
      },
      fontFamily: {
        heading: ['Pacifico', 'cursive'],
        body: ['Quicksand', 'sans-serif'],
      },
      backgroundImage: {
        'cookie-texture': "url('/assets/images/textures/cookie-texture.png')",
        'wafer-texture': "url('/assets/images/textures/wafer-texture.png')",
      },
      keyframes: {
        'cart-bump': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
        },
      },
      animation: {
        'cart-bump': 'cart-bump 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
}
