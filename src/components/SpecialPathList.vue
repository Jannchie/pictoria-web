<script setup lang="ts">
import { useQuery } from 'vue-query'
import { baseUrl } from '../shared'
import { v1GetPostsCount } from '../api'

const { data: allCount } = useQuery(
  ['post-count'],
  async () => {
    const resp = await v1GetPostsCount({ baseUrl })
    return (resp.data as any).count
  },
)
</script>

<template>
  <div class="flex flex-col gap-1 text-sm select-none">
    <ListItem
      icon="i-tabler-photo"
      title="All"
      :extra-info="allCount"
    />
    <ListItem
      icon="i-tabler-clock"
      title="Recently"
    />
    <ListItem
      icon="i-tabler-arrows-cross"
      title="Random"
    />
  </div>
</template>
