<script setup lang="ts">
import { computed } from 'vue'
import { filesize } from 'filesize'
import { baseUrl, rightPanelData } from '../shared'
import type { Post } from '../api'

const data = computed(() => rightPanelData.value)
function isPost(datum: any): datum is Post {
  return 'file_path' in datum
}

function timestampToTime(timestamp: number) {
  return new Date(timestamp * 1000).toLocaleString()
}
</script>

<template>
  <div
    v-for="datum, i of data"
    :key="i"
  >
    <div
      v-if="isPost(datum)"
      class="border-zinc-8 text-xs flex flex-col"
    >
      <div class="flex justify-center">
        <img
          :src="`${baseUrl}/v1/thumbnails/${datum.file_path}.${datum.extension}`"
          class="rounded h-40"
        >
      </div>
      <div>
        <div class="py-2 text-zinc-4 font-black">
          Basic Info
        </div>
        <div
          class="grid grid-cols-2 even:children:text-zinc-4"
        >
          <div>Rating</div>
          <div>
            {{ datum.rating }}
          </div>
          <div>
            Score
          </div>
          <div>
            {{ datum.score }}
          </div>
          <div v-if="datum.size">
            Size
          </div>
          <div v-if="datum.size">
            {{ filesize(datum.size) }}
          </div>
          <div>Path</div>
          <div>
            {{ datum.file_path }}
          </div>
          <div>
            Dimension
          </div>
          <div>
            {{ datum.width }} x {{ datum.height }}
          </div>
          <div>
            Format
          </div>
          <div class="uppercase">
            {{ datum.extension }}
          </div>
          <div v-if="datum.created_at">
            Created At
          </div>
          <div v-if="datum.created_at">
            {{ timestampToTime(datum.created_at) }}
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      {{ datum }}
    </div>
  </div>
</template>
