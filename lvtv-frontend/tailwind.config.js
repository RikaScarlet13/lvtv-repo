// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      FontFace: {
      'myFont': ['Poppins semi bold, sans-serif'],
        'aFont': ['Switzer regular, serif'],
    },
    },
  },
  plugins: [
    // Your plugins here
  ],
};
