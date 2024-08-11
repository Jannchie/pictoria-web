<script setup lang="ts">
import { useQuery } from 'vue-query'
import type { TagResponse } from '../api'
import { v1GetTags } from '../api'
import { baseUrl, useTagGroup } from '../shared'

const tagQuery = useQuery(['tags'], async () => {
  const resp = await v1GetTags({
    baseUrl,
  })
  if (resp.data) {
    return resp.data
  }
  return []
})
const tagData = computed(() => {
  return tagQuery.data.value?.map(d => ({ ...d })) ?? []
})
const tagGroupByFirstChar = computed(() => {
  const resp: [string, TagResponse[]][] = []
  tagData.value.forEach((d) => {
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
    <div>
      Tag Manager
    </div>
    <div class="overflow-auto">
      <div
        v-for="item of tagGroupByFirstChar"
        :key="item[0]"
        class="border-b border-b-surface-high py-2"
      >
        <div
          class="flex flex-col text-sm"
        >
          <div class="mb-1 mt-3 px-2 text-3xl">
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
              <div
                class="cursor-pointer rounded bg-surface-high px-1 py-0.5"
                :style="{
                  backgroundColor: getGroupColor(tag.tag_info.group_id),
                }"
              >
                {{ tag.tag_info.name }}
              </div>
              <span class="op-75">
                ({{ tag.count }})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
