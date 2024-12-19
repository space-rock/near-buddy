import type { Config } from "tailwindcss";

import colors from "tailwindcss/colors";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      red: colors.red,
      green: colors.green,
      violet: {
        50: "#F8F5FF",
        100: "#EEE6FF",
        200: "#D9C8FE",
        300: "#C1A4FE",
        400: "#A277FD",
        500: "#6016FC",
        600: "#4F03F2",
        700: "#4503D4",
        800: "#3902B0",
        900: "#29027E",
        950: "#11011E",
      },
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
