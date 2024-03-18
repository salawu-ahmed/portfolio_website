/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "borderColor": "var(--borderColor)",
        "title": "var(--title)",
        "subtitle": "var(--subtitle)",
        "custom-blue": "var(--custom-blue)",
      },
    },
  },
  plugins: [],
}

