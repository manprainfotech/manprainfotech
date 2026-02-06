import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        ink: "#0b0f17",
        steel: "#1b2435",
        mist: "#eef2f7",
        glacier: "#c7d2e5",
        aurora: "#84f6ff",
        neon: "#6ef1b7",
        dusk: "#5268ff",
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(1200px 600px at 10% -10%, rgba(110,241,183,0.35), transparent 60%)",
        "mesh": "radial-gradient(600px 400px at 80% 10%, rgba(82,104,255,0.28), transparent 50%), radial-gradient(500px 500px at 20% 20%, rgba(132,246,255,0.25), transparent 55%)",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(8,15,30,0.25)",
        card: "0 16px 40px rgba(12,18,32,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
