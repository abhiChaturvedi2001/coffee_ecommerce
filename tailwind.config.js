/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner_bg: 'url("https://monfee-store-demo.myshopify.com/cdn/shop/files/slideshow-v51.jpg?v=1613542798")'
      }
    },
  },
  plugins: [],
}