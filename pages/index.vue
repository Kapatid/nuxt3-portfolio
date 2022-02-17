<template>
  <Title>Portfolio</Title>
  <div class="app">
    <Nav />
    <Main />
  </div>
</template>

<style lang="scss">
.app {
  @apply w-full
  h-[98vh]
  grid
  grid-rows-[80px_1fr]
  sm:grid-rows-[110px_1fr];

  main,
  nav {
    @apply w-full
    h-full
    overflow-hidden
    grid
    place-items-center;
  }
}
</style>
