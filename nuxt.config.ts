import { defineNuxtConfig } from "nuxt3"
import svgLoader from "vite-svg-loader"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  css: ["@/assets/scss/index.scss"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
  },
  privateRuntimeConfig: {
    GITHUB_URL: process.env.API_URL,
    GITHUB_TOKEN: process.env.API_TOKEN,
  },
  vite: {
    plugins: [svgLoader()],
  },
})
