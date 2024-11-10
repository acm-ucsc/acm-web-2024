import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient": "linear-gradient(to right, #0f9fa0, #f5f5f5)",
      },
      colors: {
        primary: "#1d1d1d",
        secondary: "#0f9fa0",
        accent: "#9c27b0",
        muted: "#6c757d",
        danger: "#dc3545",
        success: "#28a745",
        warning: "#ffc107",
        info: "#17a2b8",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
