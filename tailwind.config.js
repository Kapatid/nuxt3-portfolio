module.exports = {
  content: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      "theme-primary": "var(--primary)",
      "theme-secondary": "var(--secondary)",
      "theme-tertiary": "var(--tertiary)",
      "theme-background": "var(--background)",
      "theme-surface": "var(--surface)",
      "theme-error": "var(--error)",
      "theme-on-primary": "var(--on-primary)",
      "theme-on-secondary": "var(--on-secondary)",
      "theme-on-background": "var(--on-background)",
      "theme-on-surface": "var(--on-surface)",
      "theme-on-error": "var(--on-error)",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins Regular", "sans-serif"],
        anaheim: ["Anaheim", "sans-serif"],
        "pridi-extraLight": ["Pridi ExtraLight", "serif"],
        "josefinSans-italic": ["JosefinSans Italic", "sans-serif"],
        "josefinSans-boldItalic": ["JosefinSans BoldItalic", "sans-serif"],
        "josefinSans-bold": ["JosefinSans Bold", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        workSans: ["WorkSans", "sans-serif"],
      },
      screens: {
        wide: "1700px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
