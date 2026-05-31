/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Fredoka One'", "cursive"],
        body: ["'Nunito'", "sans-serif"],
      },
      colors: {
        candy: {
          pink: "#FF6B9D",
          purple: "#C77DFF",
          blue: "#48CAE4",
          yellow: "#FFD60A",
          mint: "#52E5A5",
          orange: "#FF9A3C",
        },
      },
      keyframes: {
        "card-flip": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "60%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "star-pop": {
          "0%": { transform: "scale(0) rotate(-30deg)", opacity: "0" },
          "60%": { transform: "scale(1.3) rotate(10deg)" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
      },
      animation: {
        "card-flip": "card-flip 0.3s ease-in-out",
        "bounce-in": "bounce-in 0.4s cubic-bezier(0.68,-0.55,0.27,1.55)",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        wiggle: "wiggle 0.4s ease-in-out",
        "star-pop": "star-pop 0.5s cubic-bezier(0.68,-0.55,0.27,1.55)",
      },
    },
  },
  plugins: [],
};
