/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "garbi-version-2-30-white": "#fff",
        "garbi-version-2-30-white-85": "#d9d9d9",
        "apple-style-dark-2": "#292929",
        "apple-style-white-2": "#f5f5f7",
        "garbi-version-2-60-black": "#000",
        "apple-style-dark-4": "#6e6e73",
        "apple-style-blue-1": "#2997ff",
        "apple-style-dark-3": "#121212",
        "dark-theme-10-2": "#ffe9bc",
        "garbi-version-2-30-white-40" : "#000",
      },
      spacing: {},
      fontFamily: {
        "roboto-semibold-sb20": "Roboto",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "4xl": "22px",
      "5xl": "24px",
      "6xl" : "30px",
      "21xl": "40px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
