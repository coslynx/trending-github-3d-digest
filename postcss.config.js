module.exports = {
  plugins: [
    try {
      // Load and configure tailwindcss
      const tailwindcss = require('tailwindcss')('./tailwind.config.js');
      console.log('tailwindcss loaded successfully.');

      // Load and configure autoprefixer
      const autoprefixer = require('autoprefixer');
      console.log('autoprefixer loaded successfully.');

      return [
        tailwindcss, // Apply Tailwind CSS processing
        autoprefixer // Add vendor prefixes based on browser support
      ];
    } catch (error) {
      console.error('Error loading PostCSS plugins:', error);
      throw error; // Re-throw the error to prevent silent failure
    }
  ]
};