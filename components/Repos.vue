<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"

const { data: repos } = await useFetch<string, IGithubRepo[]>("/api/repos")
</script>

<template>
  <TransitionGroup name="repos-list" tag="section">
    <div
      class="box-repo"
      v-for="(repo, index) in repos"
      :key="repo.id"
      :data-index="index"
    >
      <div class="repo-texts">
        <h2>{{ repo.name }}</h2>
        <p>{{ repo.description }}</p>
      </div>

      <swiper
        class="scroll-topics"
        :slides-per-view="'auto'"
        :free-mode="true"
        :direction="'horizontal'"
        v-if="repo.topics"
      >
        <swiper-slide class="repo-topic" v-for="topic in repo.topics">{{
          topic
        }}</swiper-slide>
      </swiper>

      <div v-if="repo.topics.length === 0" class="absolute bottom-5 font-bold">
        No topics 🤔
      </div>
    </div>
  </TransitionGroup>
</template>

<style lang="scss">
.repos-list-move,
.repos-list-enter-active,
.repos-list-leave-active {
  transition: all 0.5s ease;
}

.repos-list-enter-from,
.repos-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.repos-list-leave-active {
  position: absolute;
}

section {
  @apply grid w-full h-max gap-5 justify-center;
  grid-template-columns: repeat(auto-fit, 16rem);
}

.box-repo {
  @apply rounded-lg
  m-4
  inline-block
  relative
  overflow-hidden
  h-64 w-64 
  border-2 p-4
  cursor-pointer;

  .repo-texts {
    @apply h-5/6;
    h2 {
      @apply text-3xl truncate;
    }

    p {
      @apply line-clamp-4;
    }
  }

  .scroll-topics {
    .repo-topic {
      @apply bg-theme-on-background 
      font-semibold
      w-auto mr-3
      px-3
      select-none
      p-2 
      rounded-full  
      text-theme-background
      text-xs;
    }
  }
}
</style>
