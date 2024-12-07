import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "1rem",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        xxl: "100%"
      },
    },
    screens: {
      xxl: '1400px',
      xl: "1200px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
    },
  },
  plugins: [],
};

export default config;
