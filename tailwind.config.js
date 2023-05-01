/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          light: "#5BFF5C", // Light Matrix Green
          dark: "#006800", // Matrix Green
        },
        "primary-hover": {
          light: "#88FF88",
          dark: "#008000", // Dark Matrix Green
        },
        "primary-active": {
          light: "#22CC22",
          dark: "#004D00",
        },
        "primary-disabled": {
          light: "#AAFFAA",
          dark: "#336633",
        },
        secondary: {
          light: "#F5F5F5", // Light gray
          dark: "#2C2C2C", // Dark gray
        },
        "secondary-hover": {
          light: "#E0E0E0",
          dark: "#1A1A1A",
        },
        "secondary-active": {
          light: "#CCCCCC",
          dark: "#0D0D0D",
        },
        "secondary-disabled": {
          light: "#B3B3B3",
          dark: "#767676",
        },
        background: {
          primary: {
            light: "#F5F5F5", // Light gray
            dark: "#252525", // Dark gray
          },
          secondary: {
            light: "#E0E0E0",
            dark: "#1A1A1A",
          },
          tertiary: {
            light: "#CCCCCC",
            dark: "#0D0D0D",
          },
        },
        font: {
          primary: {
            light: "#FFFFFF", // White
            dark: "#F5F5F5", // Light gray
          },
          secondary: {
            light: "#FFFFFF", // White
            dark: "#B3B3B3",
          },
          tertiary: {
            light: "#FFFFFF", // White
            dark: "#696969",
          },
        },
      },

      animation: {
        "pan-overlay": "panOverlay 22s infinite linear",
        "pan-image": "panImage 15s linear infinite",
      },
      keyframes: {
        panOverlay: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "0% -100%" },
        },
        panImage: {
          "0%": { backgroundPosition: "36% 42%", backgroundSize: "100%" },
          "20%": { backgroundPosition: "30% 35%", backgroundSize: "100%" },
          "20.0001%": { backgroundPosition: "60% 85%", backgroundSize: "250%" },
          "40%": { backgroundPosition: "49% 81%", backgroundSize: "250%" },
          "40.0001%": { backgroundPosition: "80% 42%", backgroundSize: "150%" },
          "60%": { backgroundPosition: "84% 33%", backgroundSize: "150%" },
          "60.0001%": { backgroundPosition: "0% 0%", backgroundSize: "150%" },
          "80%": { backgroundPosition: "15% 4%", backgroundSize: "150%" },
          "80.0001%": { backgroundPosition: "80% 10%", backgroundSize: "150%" },
          "100%": { backgroundPosition: "72% 14%", backgroundSize: "150%" },
        },
      },
    },
  },
  plugins: [],
}
