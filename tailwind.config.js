module.exports = {
  content: [
    './src/**/*.{js,html}',
    './public/**/*.html',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  plugins: [
    require('tw-elements/dist/plugin'),
    require('tailwind-scrollbar-hide'),
  ],
};
