<script setup lang="ts">
import { useQueryClient } from 'vue-query'
import { filesize } from 'filesize'
import { Btn } from '@roku-ui/vue'
import type { PostPublic } from '../api'
import { v1UpdatePostRating, v1UpdatePostScore } from '../api'
import { baseUrl, useTagGroup } from '../shared'

defineProps<{
  post: PostPublic
}>()
const queryClient = useQueryClient()

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
  <div
    class="flex flex-col border-zinc-8 text-xs"
  >
    <FloatWindow
      ref="windowRef"
      :safe-margin="16"
    >
      <TagSelector
        :post-id="post.id"
      />
    </FloatWindow>
    <div class="flex justify-center">
      <img
        :src="`${baseUrl}/v1/thumbnails/${post.file_path}.${post.extension}`"
        class="h-40 rounded"
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
            :model-value="post.rating"
            highlight-selected-only
            :count="4"
            :colors="['green', 'yellow', 'orange', 'red']"
            :icons="['i-tabler-seeding', 'i-tabler-mood-heart', 'i-tabler-eye-off', 'i-tabler-eyeglass-off']"
            @select="async (d) => v1UpdatePostRating({
              baseUrl,
              path: {
                post_id: post.id,
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
            :model-value="post.score"
            :count="5"
            @select="(d) => onSelectScore(post.id, d)"
          />
        </div>
        <div v-if="post.size">
          Size
        </div>
        <div v-if="post.size">
          {{ filesize(post.size) }}
        </div>
        <div>Path</div>
        <div>
          {{ post.file_path }}
        </div>
        <div>
          Dimension
        </div>
        <div>
          {{ post.width }} x {{ post.height }}
        </div>
        <div>
          Format
        </div>
        <div class="uppercase">
          {{ post.extension }}
        </div>
        <div v-if="post.created_at">
          Created At
        </div>
        <div v-if="post.created_at">
          {{ timestampToTime(post.created_at) }}
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
        v-if="post.tags && post.tags.length"
        class="flex flex-wrap gap-2"
      >
        <div
          v-for="tag of post.tags"
          :key="tag.tag_info.name"
          class="cursor-pointer rounded bg-surface-high px-1 py-0.5"
          :style="{
            backgroundColor: getGroupColor(tag.tag_info.group_id),
          }"
          @pointerup="openWindow(post.id)"
        >
          {{ tag.tag_info.name }}
        </div>
        <div
          class="cursor-pointer rounded bg-surface-high px-1 py-0.5"
          @pointerup="openWindow(post.id)"
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
          class="my-2 w-full flex"
          @pointerup="openWindow(post.id)"
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
        <AutoGenerateTagBtn :post-id="post.id" />
      </div>
    </div>
  </div>
</template>
