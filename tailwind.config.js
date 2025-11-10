export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-100': 'oklch(var(--b1) / <alpha-value>)',
        'base-200': 'oklch(var(--b2) / <alpha-value>)',
        'base-300': 'oklch(var(--b3) / <alpha-value>)',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dim"],
  },
}