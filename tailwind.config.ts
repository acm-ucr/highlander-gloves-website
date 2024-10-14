/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "archivo-narrow": ["var(--font-archivo-narrow)"],
        "archivo-black": ["var(--font-archivo-black)"],
        "anek-telegu": ["var(--font-anek-telegu)"],
        "anton": ["var(--font-anton)", "sans-serif"]
      },
      colors: {
        hlg: {
          "light-gray": "#D9D9D9",
          "dark-gray": "#161616",
          "red-100": "#D42C3C",
          "red-200": "#882424",
          "red-300": "#441212",
        },
      },
    },
  },
  plugins: [],
};
