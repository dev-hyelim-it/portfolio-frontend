/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["grid-cols-1", "md:grid-cols-2"],
  theme: {
    extend: {},
  },
  plugins: [],
};
