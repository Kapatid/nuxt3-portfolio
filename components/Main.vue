<script lang="ts" setup></script>

<template>
  <main>
    <div class="cover">COVER</div>

    <div class="grid-repos">
      <Repos />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  @apply z-0 relative;

  .cover {
    @apply h-full
    z-20
    absolute
    hidden;
  }

  .grid-repos {
    @apply h-full w-11/12
    overflow-x-hidden
    overflow-y-auto
    flex
    justify-center;
  }
}
</style>
