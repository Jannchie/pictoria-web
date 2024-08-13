<script setup lang="ts">
import { computed } from 'vue'
import { AspectRatio } from '@roku-ui/vue'
import type { PostBase } from '../api'
import { baseUrl, selectedPostIdSet, selectingPostIdSet, showNSFW, showPost, unselectedPostIdSet } from '../shared'

const props = defineProps<{
  post: PostBase

}>()
const post = computed(() => props.post)
function onPointerDown(e: PointerEvent) {
  if (e.button !== 0) {
    return
  }
  if (selectedPostIdSet.value.has(post.value.id)) {
    if (!e.ctrlKey) {
      selectedPostIdSet.value = new Set([post.value.id])
    }
    else {
      selectedPostIdSet.value = new Set([...selectedPostIdSet.value].filter(p => p !== post.value.id))
    }
  }
  else {
    if (!e.ctrlKey) {
      selectedPostIdSet.value = new Set([post.value.id])
    }
    else {
      if (selectedPostIdSet.value.has(post.value.id)) {
        selectedPostIdSet.value = new Set([...selectedPostIdSet.value].filter(p => p !== post.value.id))
      }
      else {
        selectedPostIdSet.value = new Set([...selectedPostIdSet.value, post.value.id])
      }
    }
  }
}
const selected = computed(() => {
  return (selectedPostIdSet.value.has(post.value.id) || selectingPostIdSet.value.has(post.value.id)) && !unselectedPostIdSet.value.has(post.value.id)
})

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
    class="post-item flex flex-col items-center gap-1"
    :class="{ selected }"
  >
    <AspectRatio
      v-if="post.width && post.height"
      :ratio="post.width / post.height"
      class="w-full rounded-lg bg-surface-high"
    >
      <div class="post-content overflow-clip rounded-lg">
        <img
          :src="`${baseUrl}/v1/thumbnails/${post.file_path}/${post.file_name}.${post.extension}`"
          class="w-inherit select-all rounded-lg"
          draggable="true"
          :class="{ blur: ((post.rating ?? 0) >= 3) && !showNSFW }"
          @pointerdown="onPointerDown"
          @dblclick="showPost = post"
        >
      </div>
    </AspectRatio>
    <AspectRatio
      v-else
      :ratio="1"
      class="post-content h-full w-full rounded-lg bg-surface-high"
    >
      <div class="p-12">
        <i
          class="h-full w-full"
          :class="getIconByExtension(post.extension)"
        />
      </div>
    </AspectRatio>
    <div class="w-full flex flex-col text-center text-xs text-zinc-4">
      <div class="w-full truncate text-xs">
        <div class="filename-wrapper inline rounded px-1">
          {{ `${post.file_name}.${post.extension}` }}
        </div>
      </div>
      <div
        v-if="post.width && post.height"
        class="w-full truncate text-11px font-bold font-mono"
      >
        {{ post.width }} x {{ post.height }}
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.selected .post-content {
  outline: 4px solid rgb(var(--r-color-primary-container)) !important;
}
.selected .filename-wrapper {
  background-color: rgb(var(--r-color-primary-container)) !important;
  color: white !important;
}
</style>
