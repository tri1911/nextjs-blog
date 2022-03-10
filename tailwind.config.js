module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        "3px": "3px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
    safelist: [
    {
      pattern: /bg-(red|green|blue|orange|lime|teal|cyan|pink|rose)-/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
      pattern: /text-(red|green|blue|orange|lime|teal|cyan|pink|rose)-/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
      pattern: /border-(red|green|blue|orange|lime|teal|cyan|pink|rose)-/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
  ],
};
