/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "noto-sans": "var(--font-noto-sans)",
    },
    extend: {
      // Your existing extensions
      animation: {
        mover: "mover 1s infinite alternate",
      },
      keyframes: {
        mover: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
