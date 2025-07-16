import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1025px",
      xl: "1280px",
      xl2: "1360px",
    },
    extend: {
      lineClamp: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    styled: true,
    themes: ["light", "dark"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};

export default config;
