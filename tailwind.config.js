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
        "headerBg": "var(--headerBg)",
        "salmon": "var(--salmon)",
        "custom-blue": "var(--custom-blue)",
      },
      animation: {
        'spin-fast': 'spin .5s linear infinite',
        'modalMenu': 'modalMenu .7s 1'
      },
      keyframes: {
        modalMenu: {
          '0%': {scale:0,},
          '50%': {scale:1.5,},
          '100%': {scale:1,}
        }
      }
    },
  },
  plugins: [],
}

