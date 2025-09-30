/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        'sans': ['Crimson Text', 'Times', 'serif'],
        'heading': ['Playfair Display', 'serif'],
        'body': ['Crimson Text', 'serif'],
      },
      colors: {
        'news-primary': '#1a1a1a',
        'news-secondary': '#f5f5f5',
        'news-accent': '#d4af37',
        'news-text': '#333333',
        'news-light': '#ffffff',
        'news-dark': '#0f0f0f',
      },
      typography: {
        DEFAULT: {
          css: {
            'max-width': 'none',
            color: '#333',
            h1: {
              fontFamily: 'Playfair Display, serif',
            },
            h2: {
              fontFamily: 'Playfair Display, serif',
            },
            h3: {
              fontFamily: 'Playfair Display, serif',
            },
            h4: {
              fontFamily: 'Playfair Display, serif',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}