<script setup lang="ts">
import { computed } from 'vue'
import type { Post } from '../api'
import { baseUrl, rightPanelData, selectedPostId, selectingPostId, unselectedPostId } from '../shared'

const props = defineProps<{
  post: Post

}>()
const post = computed(() => props.post)
function onPointerDown(e: PointerEvent) {
  e.stopPropagation()
  // 如果不是右键，则不执行
  if (e.button !== 0) {
    return
  }

  if (selectedPostId.value.has(post.value.id)) {
    selectedPostId.value.delete(post.value.id)
  }
  else {
    if (!e.ctrlKey) {
      selectedPostId.value = new Set([post.value.id])
    }
    else {
      if (selectedPostId.value.has(post.value.id)) {
        selectedPostId.value = new Set([...selectedPostId.value].filter(p => p !== post.value.id))
      }
      else {
        selectedPostId.value = new Set([...selectedPostId.value, post.value.id])
      }
    }
  }
  rightPanelData.value = [post.value]
}
const selected = computed(() => {
  return (selectedPostId.value.has(post.value.id) || selectingPostId.value.has(post.value.id)) && !unselectedPostId.value.has(post.value.id)
})
</script>

<template>
  <div
    class="post-item flex flex-col gap-1 items-center"
    :class="{ selected }"
  >
    <img
      :src="`${baseUrl}/v1/thumbnails/${post.file_path}.${post.extension}`"
      class="post-image rounded w-inherit select-all"
      draggable="true"
      @pointerdown="onPointerDown"
    >
    <div class="text-xs text-zinc-4 flex flex-col w-full text-center">
      <div class=" w-full truncate text-xs">
        <div class="filename-wrapper inline-block px-1 rounded">
          {{ post.file_path }}
        </div>
      </div>
      <div class="w-full truncate font-bold font-mono text-11px">
        {{ post.width }} x {{ post.height }}
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.selected .post-image {
  outline: 2px solid rgb(var(--r-color-primary-container)) !important;
}
.selected .filename-wrapper {
  background-color: rgb(var(--r-color-primary-container)) !important;
  color: rgb(var(--r-color-surface-on)) !important;
}
</style>
