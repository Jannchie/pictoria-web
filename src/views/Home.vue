<script setup lang="ts">
import { v1DeletePost } from '@/api'
import { selectedPostIdSet, showPost, waterfallItemWidth } from '@/shared'
import { useQueryClient } from 'vue-query'
import PostDetail from '../components/PostDetail.vue'
import 'splitpanes/dist/splitpanes.css'

const queryClient = useQueryClient()

onKeyStroke('Delete', async () => {
  for (const post_id of selectedPostIdSet.value) {
    if (post_id === undefined) {
      continue
    }
    await v1DeletePost({
      path: {
        post_id,
      },
    })
  }
  queryClient.invalidateQueries(['posts'])
  queryClient.invalidateQueries(['count', 'score'])
  queryClient.invalidateQueries(['count', 'rating'])
  queryClient.invalidateQueries(['count', 'extension'])
})

useEventListener('wheel', (event) => {
  if (event.ctrlKey) {
    event.preventDefault()
    if (event.deltaY < 0) {
      waterfallItemWidth.value = Math.min(waterfallItemWidth.value + 50, 800)
    }
    else {
      waterfallItemWidth.value = Math.max(waterfallItemWidth.value - 50, 50)
    }
  }
}, { passive: false })
</script>

<template>
  <PostDetail
    v-if="showPost"
    :post="showPost"
  />
  <header
    class="h-60px flex flex-col items-center justify-center"
  >
    <div class="w-32 flex flex-grow items-center justify-center">
      <Slider
        v-model="waterfallItemWidth"
        size="sm"
        :min="50"
        :max="800"
        :min-width="0"
        :tick-num="0"
      />
    </div>
    <FilterRow />
  </header>
  <MainSection />
</template>
