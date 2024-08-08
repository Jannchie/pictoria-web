<script setup lang="ts">
import { ref } from 'vue'
import type { DirectorySummary } from '../api'
import { postFilter } from '../shared'

defineProps<{
  folder: DirectorySummary
  depth: number
}>()
const collapsed = ref(false)
const folderItemRef = ref<HTMLElement | null>(null)
</script>

<template>
  <div>
    <div
      class="flex flex-shrink-0 items-center gap-0.5"
      :class="{
        'border-l border-surface-border-high': depth !== 0,
      }"
    >
      <i
        v-if="folder.children?.length"
        :class="collapsed ? 'i-tabler-chevron-down' : 'i-tabler-chevron-right'"
        class="absolute left-0 cursor-pointer text-xs"
        @click="collapsed = !collapsed"
      />
      <ListItem
        ref="folderItemRef"
        class="flex-grow"
        :active="postFilter.folder === folder.path"
        :icon="collapsed ? 'i-tabler-folder-open' : 'i-tabler-folder'"
        :title="folder.name "
        :extra-info="folder.file_count"
        @click="postFilter.folder = folder.path"
        @dblclick="collapsed = !collapsed"
      />
    </div>
    <div
      v-if="collapsed"
      class="pl-2"
    >
      <FolderItem
        v-for="subFolder in folder.children"
        :key="subFolder.path"
        :folder="subFolder"
        :depth="depth + 1"
      />
    </div>
  </div>
</template>
