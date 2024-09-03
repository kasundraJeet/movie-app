/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vibrantCoral: "var(--vibrant-coral)",
        lushGreen: "var(--lush-green)",
        goldenYellow: "var(--golden-yellow)",
        fieryRed: "var(--fiery-red)",
        lightText: "var(--light-text)",
        subtleText: "var(--subtle-text)",
        deepSpace: "var(--deep-space)",
        peachBlush: "var(--peach-blush)",
        softPeach: "var(--soft-peach)",
        paleGray: "var(--pale-gray)",
        charcoalGray: "var(--charcoal-gray)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
