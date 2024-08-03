<script setup lang="ts">
import { computed } from 'vue'
import type { Post } from '../api'
import { baseUrl, rightPanelData } from '../shared'

const props = defineProps<{
  post: Post

}>()
const post = computed(() => props.post)
function onPointerDown() {
  rightPanelData.value = [post.value]
}
</script>

<template>
  <div
    class="post-item flex flex-col gap-1 items-center"
  >
    <img
      :src="`${baseUrl}/v1/thumbnails/${post.file_path}.${post.extension}`"
      class="post-image rounded w-inherit select-all"
      draggable="true"
      @pointerdown="onPointerDown"
    >
    <div class="text-xs text-zinc-4 flex flex-col w-full text-center">
      <div class="w-full truncate text-xs">
        {{ post.file_path }}
      </div>
      <div class="w-full truncate font-bold font-mono text-11px">
        {{ post.width }} x {{ post.height }}
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.selected.post-image {
  outline: 2px solid #f00 !important;
}
</style>
