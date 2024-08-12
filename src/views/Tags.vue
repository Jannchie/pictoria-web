<script setup lang="ts">
import { useQuery } from 'vue-query'
import { TextField } from '@roku-ui/vue'
import type { TagResponse } from '../api'
import { v1GetTags } from '../api'
import { baseUrl, useTagGroup } from '../shared'
import ScrollArea from '../components/ScrollArea.vue'

const tagQuery = useQuery(['tags'], async () => {
  const resp = await v1GetTags({
    baseUrl,
  })
  if (resp.data) {
    return resp.data
  }
  return []
})
const search = ref('')
const tagData = computed(() => {
  return tagQuery.data.value?.map(d => ({ ...d })) ?? []
})
const tagDataSearched = computed(() => {
  return tagData.value.filter(d => d.tag_info.name.toLowerCase().includes(search.value.toLowerCase()))
})
const tagGroupByFirstChar = computed(() => {
  const resp: [string, TagResponse[]][] = []
  tagDataSearched.value.forEach((d) => {
    const firstChar = d.tag_info.name[0].toUpperCase()
    const index = resp.findIndex(r => r[0] === firstChar)
    if (index === -1) {
      resp.push([firstChar, [d]])
    }
    else {
      resp[index][1].push(d)
    }
  })
  return resp
})
const tagGroup = useTagGroup()
function getGroupColor(group_id?: number) {
  return tagGroup.value.find(g => g.id === group_id)?.color
}
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="mt-2 px-1">
      <TextField
        v-model="search"
        placeholder="Search"
      />
    </div>
    <VirtualScroll
      :is="ScrollArea"
      :items="tagGroupByFirstChar"
    >
      <template #default="{ item }">
        <div
          class="border-b border-b-surface-high py-2"
        >
          <div
            class="flex flex-col text-sm"
          >
            <div class="mb-2 mt-3 px-2 text-3xl">
              {{ item[0] }}
              <span class="text-xl">
                ({{ item[1].length }})
              </span>
            </div>
            <div class="flex flex-wrap gap-3 px-2 text-xs">
              <div
                v-for="tag of item[1]"
                :key="tag.tag_info.name"
                class="flex items-end gap-1"
              >
                <Tag
                  class="cursor-pointer"
                  rounded="lg"
                  :color="getGroupColor(tag.tag_info.group_id)"
                >
                  {{ tag.tag_info.name }}
                </Tag>
                <span class="op-75">
                  ({{ tag.count }})
                </span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </VirtualScroll>
  </div>
</template>
