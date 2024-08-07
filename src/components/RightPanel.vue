<script setup lang="ts">
import { computed } from 'vue'
import { filesize } from 'filesize'
import { Btn } from '@roku-ui/vue'
import { useQueryClient } from 'vue-query'
import { baseUrl, selectedPostIdSet, useTagGroup } from '../shared'
import type { PostPublic } from '../api'
import { v1UpdatePostRating, v1UpdatePostScore } from '../api'
import { usePostQuery } from '../composables'
import Rating from './Rating.vue'
import AutoGenerateTagBtn from './AutoGenerateTagBtn.vue'

const id = computed<number>(() => selectedPostIdSet.value.values().next().value)
function isPost(datum: any): datum is PostPublic {
  return 'file_path' in datum
}

const queryClient = useQueryClient()
const { data: postData } = usePostQuery(id)
const data = computed(() => {
  if (postData.value) {
    return [postData.value]
  }
  else {
    return []
  }
})
const tagGroup = useTagGroup()
function getGroupColor(group_id?: number) {
  return tagGroup.value.find(g => g.id === group_id)?.color
}

function timestampToTime(timestamp: number) {
  return new Date(timestamp * 1000).toLocaleString()
}
async function onSelectScore(post_id: number, score: number = 0) {
  await v1UpdatePostScore({
    baseUrl,
    path: {
      post_id,
    },
    body: {
      score,
    },
  })
  queryClient.invalidateQueries(['count', 'score'])
}
const selectedPostId = ref<number>()
const windowRef = ref()
function openWindow(postId: number) {
  selectedPostId.value = postId
  windowRef.value?.toggle()
}
</script>

<template>
  <FloatWindow
    ref="windowRef"
    :safe-margin="16"
  >
    <TagSelector
      :post-id="id"
    />
  </FloatWindow>
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
            <Rating
              :model-value="datum.rating"
              highlight-selected-only
              :count="4"
              :colors="['green', 'yellow', 'orange', 'red']"
              :icons="['i-tabler-seeding', 'i-tabler-mood-heart', 'i-tabler-eye-off', 'i-tabler-eyeglass-off']"
              @select="async (d) => v1UpdatePostRating({
                baseUrl,
                path: {
                  post_id: datum.id,
                },
                body: {
                  rating: d,
                },
              })"
            />
          </div>
          <div>
            Score
          </div>
          <div>
            <Rating
              :model-value="datum.score"
              :count="5"
              @select="(d) => onSelectScore(datum.id, d)"
            />
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
      <div class="flex flex-col gap-1">
        <div
          class="py-2 text-zinc-4 font-black"
        >
          Tags
        </div>
        <div
          v-if="datum.tags && datum.tags.length"
          class="flex gap-2 flex-wrap"
        >
          <div
            v-for="tag of datum.tags"
            :key="tag.tag_info.name"
            class="bg-surface-high px-1 py-0.5 rounded cursor-pointer"
            :style="{
              backgroundColor: getGroupColor(tag.tag_info.group_id),
            }"
            @pointerup="openWindow(datum.id)"
          >
            {{ tag.tag_info.name }}
          </div>
          <div
            class="bg-surface-high px-1 py-0.5 rounded cursor-pointer"
            @pointerup="openWindow(datum.id)"
          >
            <i class="i-tabler-plus" />
          </div>
        </div>
        <div
          v-else
          class="h-14 flex flex-col items-center justify-center text-surface-on-low"
        >
          <div class="flex flex-col items-center">
            <i class="i-tabler-bookmark-off" />
            <div>
              No Tags
            </div>
          </div>
          <Btn
            size="sm"
            class="w-full flex items-c"
            @pointerup="openWindow(datum.id)"
          >
            <i class="i-tabler-bookmark-plus" />
            Add Tag
          </Btn>
        </div>
      </div>
      <div>
        <div class="py-2 text-zinc-4 font-black">
          Command
        </div>
        <div>
          <AutoGenerateTagBtn :post-id="id" />
        </div>
      </div>
    </div>
    <div v-else>
      {{ datum }}
    </div>
  </div>
</template>
