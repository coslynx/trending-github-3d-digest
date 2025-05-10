module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-background': '#0D1117',
        'light-text': '#C9D1D9',
        'accent-teal': '#26A69A',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      screens: {
        'mobile': '768px',
        'tablet': '992px',
        'desktop': '1200px',
      },
    },
  },
  plugins: [],
}