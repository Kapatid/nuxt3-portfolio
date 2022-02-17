<script setup>
import LightMode from "@/assets/img/light_mode.svg?component"
</script>

<template>
  <nav>
    <div>
      <h1>PORTFOLIO</h1>
      <ClientOnly>
        <ThemeSwitcher />
        <template #fallback><LightMode class="btn-theme" /></template>
      </ClientOnly>
    </div>
  </nav>
</template>
