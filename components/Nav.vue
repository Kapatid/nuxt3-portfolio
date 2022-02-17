<script setup>
import LightMode from "@/assets/img/light_mode.svg?component"
</script>

<template>
  <nav>
    <div id="center-nav">
      <h1>PORTFOLIO</h1>
      <ClientOnly>
        <ThemeSwitcher />
        <template #fallback><LightMode class="btn-theme" /></template>
      </ClientOnly>
    </div>
  </nav>
</template>

<style lang="scss">
nav {
  #center-nav {
    @apply items-center flex w-11/12;

    h1 {
      @apply text-2xl;
    }

    .btn-theme {
      @apply w-14 h-14 cursor-pointer ml-auto;
    }
  }
}
</style>
