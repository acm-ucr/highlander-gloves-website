/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "archivo-narrow": ["var(--font-archivo-narrow)"],
        "archivo-black": ["var(--font-archivo-black)"],
        "anek-telegu": ["var(--font-anek-telegu)"],
        anton: ["var(--font-anton)", "sans-serif"],
        "asap-condensed": ["var(--font-asap-condensed)"],
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    textShadow: {
      default: "7px 6px 0 black",
      footerMobile: "4px 3px 0 black",
    },
  },
  plugins: [require("tailwindcss-textshadow"), require("tailwindcss-animate")],
};
