<script setup lang="ts">
import { computed } from 'vue'
import { filesize } from 'filesize'
import { Btn } from '@roku-ui/vue'
import { useMutation, useQuery, useQueryClient } from 'vue-query'
import { baseUrl, selectedPostId } from '../shared'
import type { PostPublic } from '../api'
import { v1CmdAutoTags, v1GetPost, v1UpdatePostRating, v1UpdatePostScore } from '../api'
import Rating from './Rating.vue'

const id = computed<number>(() => selectedPostId.value.values().next().value)
function isPost(datum: any): datum is PostPublic {
  return 'file_path' in datum
}

const queryClient = useQueryClient()
const { data: postData } = useQuery(
  ['post', id],
  async () => {
    const resp = await v1GetPost({ baseUrl, path: { post_id: id.value } })
    return resp.data
  },
)
const data = computed(() => {
  if (postData.value) {
    return [postData.value]
  }
  else {
    return []
  }
})

const mutation = useMutation(
  () => v1CmdAutoTags({ baseUrl, path: { post_id: id.value } }),
  {
    onSuccess: () => {
      queryClient.invalidateQueries(['post', id])
    },
  },
)
async function onAutoTag() {
  mutation.mutate()
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
              @select="async (d) => await v1UpdatePostScore({
                baseUrl,
                path: {
                  post_id: datum.id,
                },
                body: {
                  score: d,
                },
              })"
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
      <div>
        <div
          v-if="datum.tags"
          class="py-2 text-zinc-4 font-black"
        >
          Tags
        </div>

        <div class="flex gap-2 flex-wrap">
          <div
            v-for="tag, t of datum.tags"
            :key="t"
            class="bg-surface-high px-1 py-0.5 rounded"
          >
            {{ tag.tag_info.name }}
          </div>
        </div>
      </div>
      <div>
        <div class="py-2 text-zinc-4 font-black">
          Command
        </div>
        <div>
          <Btn
            size="sm"
            @pointerdown="onAutoTag"
          >
            Auto Tag
          </Btn>
        </div>
      </div>
    </div>
    <div v-else>
      {{ datum }}
    </div>
  </div>
</template>
