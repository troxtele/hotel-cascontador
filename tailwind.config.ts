import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        exs: "340px",
      },
      fontFamily: {
        Montserrat: "Montserrat",
        openSans: "Open Sans",
      },
      colors: {
        primary: "#7fbee9",
        black: "#333",
      },
    },
  },
  plugins: [],
};
export default config;
