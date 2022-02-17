<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"

interface IGithubRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string
  created_at: string
  updated_at: string
  clone_url: string
  language: string
  topics: string[]
  forks: number
  homepage: string
  stargazers_count: number
  watchers_count: number
}

const { data: repos } = await useFetch<string, IGithubRepo[]>("/api/repos")
</script>

<template>
  <div class="box-repo" v-for="repo in repos">
    <h2>{{ repo.name }}</h2>
    <p>{{ repo.description }}</p>

    <swiper
      id="scroll-topics"
      :slides-per-view="'auto'"
      :free-mode="true"
      :direction="'horizontal'"
    >
      <swiper-slide v-for="topic in repo.topics">{{ topic }}</swiper-slide>
    </swiper>
  </div>
</template>
