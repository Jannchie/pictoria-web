<script setup lang="ts">
import { computed } from 'vue'

import { selectedPostIdSet, showPost } from '../shared'
import type { PostBase } from '../api'

function isPost(datum: any): datum is PostBase {
  return 'file_path' in datum
}
const id = computed<number | undefined>(() => {
  const selected = selectedPostIdSet.value.values().next().value
  if (selected) {
    return selected
  }
  else if (showPost.value) {
    return showPost.value.id
  }
  return undefined
})
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
  <template
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
  </template>
</template>
