<script lang="ts" setup>
import DarkMode from "@/assets/img/dark_mode.svg?component"
import LightMode from "@/assets/img/light_mode.svg?component"

const getLocalTheme = () => localStorage.getItem("NUXT_PORTFOLIO_THEME")
let theme = ref(getLocalTheme() ?? "light")

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
if (darkThemeMq.matches) {
  document.documentElement.classList.add("dark")
} else {
  document.documentElement.classList.remove("dark")
}

const checkTheme = () => {
  if (!theme) {
    localStorage.setItem("NUXT_PORTFOLIO_THEME", "light")
  } else if (theme.value === "light") {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}

checkTheme()

const changeTheme = () => {
  localStorage.setItem(
    "NUXT_PORTFOLIO_THEME",
    localStorage.getItem("NUXT_PORTFOLIO_THEME") !== "light" ? "light" : "dark"
  )

  theme.value = localStorage.getItem("NUXT_PORTFOLIO_THEME")!
  checkTheme()
}
</script>

<template>
  <DarkMode
    v-if="theme === 'dark'"
    class="btn-theme"
    v-on:click="changeTheme"
  />
  <LightMode
    v-if="theme === 'light'"
    class="btn-theme"
    v-on:click="changeTheme"
  />
</template>
