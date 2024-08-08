<script setup lang="ts">
import { computed } from 'vue'

import { selectedPostIdSet } from '../shared'
import type { PostPublic } from '../api'
import { usePostQuery } from '../composables'

function isPost(datum: any): datum is PostPublic {
  return 'file_path' in datum
}
const id = computed<number>(() => selectedPostIdSet.value.values().next().value)
const { data: postData } = usePostQuery(id)
const data = computed(() => {
  if (postData.value) {
    return [postData.value]
  }
  else {
    return []
  }
})
</script>

<template>
  <div
    v-for="datum, i of data"
    :key="i"
  >
    <PostDetailPanel
      v-if="isPost(datum)"
      :post="datum"
    />
    <div v-else>
      {{ datum }}
    </div>
  </div>
</template>
