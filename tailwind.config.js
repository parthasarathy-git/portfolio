/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      colors: {
        ink: "#14161c",
        panel: "#1b1e26",
        line: "#2c313c",
        text: "#d9dce3",
        dim: "#8a91a1",
        amber: "#ffb454",
        sky: "#7dcfff",
      },
    },
  },
  plugins: [],
};
