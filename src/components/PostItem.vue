<script setup lang="ts">
import { computed } from 'vue'
import { AspectRatio } from '@roku-ui/vue'
import type { Post } from '../api'
import { baseUrl, selectedPostId, selectingPostId, unselectedPostId } from '../shared'

const props = defineProps<{
  post: Post

}>()
const post = computed(() => props.post)
function onPointerUp(e: PointerEvent) {
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
}
const selected = computed(() => {
  return (selectedPostId.value.has(post.value.id) || selectingPostId.value.has(post.value.id)) && !unselectedPostId.value.has(post.value.id)
})
function onDragStart(e: DragEvent) {
  // 如果不是右键，则不执行
  if (e.button !== 0) {
    return
  }
  selectedPostId.value = new Set([post.value.id])
}

function getIconByExtension(extension: string) {
  switch (extension) {
    case 'mp3':
    case 'flac':
    case 'wav':
    case 'ogg':
      return 'i-tabler-music'
    case 'mp4':
    case 'webm':
    case 'mkv':
    case 'avi':
    case 'mov':
    case 'wmv':
    case 'flv':
      return 'i-tabler-video'
    case 'zip':
    case 'rar':
    case '7z':
    case 'tar':
    case 'gz':
    case 'bz2':
    case 'xz':
      return 'i-tabler-archive'
    case 'pdf':
      return 'i-tabler-file-pdf'
    case 'doc':
    case 'docx':
      return 'i-tabler-file-word'
    case 'xls':
    case 'xlsx':
      return 'i-tabler-file-excel'
    case 'ppt':
    case 'pptx':
      return 'i-tabler-file-powerpoint'
    case 'txt':
      return 'i-tabler-file-text'
    case 'html':
    case 'htm':
      return 'i-tabler-file-code'
    case 'json':
      return 'i-tabler-file-code'
    default:
      return 'i-tabler-file'
  }
}
</script>

<template>
  <div
    class="post-item flex flex-col gap-1 items-center"
    :class="{ selected }"
  >
    <img
      v-if="post.width && post.height"
      :src="`${baseUrl}/v1/thumbnails/${post.file_path}.${post.extension}`"
      class="post-content rounded w-inherit select-all"
      draggable="true"
      @dragstart="onDragStart"
      @pointerdown.stop="onPointerUp"
    >
    <AspectRatio
      v-else
      :ratio="1"
      class="post-content w-full h-full rounded-xl bg-surface-high"
    >
      <div class="p-12">
        <i
          class="w-full h-full"
          :class="getIconByExtension(post.extension)"
        />
      </div>
    </AspectRatio>
    <div class="text-xs text-zinc-4 flex flex-col w-full text-center">
      <div class=" w-full truncate text-xs">
        <div class="filename-wrapper inline-block px-1 rounded">
          {{ `${post.file_path}.${post.extension}` }}
        </div>
      </div>
      <div
        v-if="post.width && post.height"
        class="w-full truncate font-bold font-mono text-11px"
      >
        {{ post.width }} x {{ post.height }}
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.selected .post-content {
  outline: 2px solid rgb(var(--r-color-primary-container)) !important;
}
.selected .filename-wrapper {
  background-color: rgb(var(--r-color-primary-container)) !important;
  color: rgb(var(--r-color-surface-on)) !important;
}
</style>
