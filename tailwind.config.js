/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "apple-style-white-2": "#f5f5f7",
        "garbi-version-2-30-white-85": "#d9d9d9",
        "apple-style-dark-2": "#292929",
        "garbi-version-2-30-white": "#fff",
        "garbi-version-2-60-black": "#000",
        "apple-style-dark-4": "#6e6e73",
        "apple-style-dark-3": "#121212",
        "apple-style-blue-1": "#2997ff",
        "dark-theme-10-2": "#ffe9bc",
      },
      spacing: {},
      fontFamily: {
        "roboto-semibold-sb20": "Roboto",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      "21xl": "35px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
