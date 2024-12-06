<script setup lang="ts">
import type { DirectorySummary } from '@/api'
import { v1GetFolders } from '@/api'

import { showPost } from '@/shared'
import { primaryColor, RokuProvider, TreeList } from '@roku-ui/vue'
import { useQuery } from '@tanstack/vue-query'
import { Pane, Splitpanes } from 'splitpanes'
import { RouterLink, useRoute } from 'vue-router'
import { useWatchRoute } from './composables'

import { showMenu } from './shared'
import 'splitpanes/dist/splitpanes.css'

useWatchRoute()

const folders = useQuery({
  queryKey: ['folders'],
  queryFn: async () => {
    const resp = await v1GetFolders({ })
    if (resp.error) {
      throw resp.error
    }
    return resp.data
  },
  staleTime: 1000 * 60 * 60,
})

export interface TreeListLinkData {
  title: string
  value: string
  attrs?: Record<string, any>
  is?: string | VNode
}

export interface TreeListHeaderData {
  title: string
}

export interface TreeListTitleData {
  title: string
  children: TreeListItemData[]
  open?: boolean
}

export type TreeListItemData = TreeListLinkData | TreeListHeaderData | TreeListTitleData
const route = useRoute()
const currentPath = computed(() => {
  if (!route.params.folder) {
    return '@'
  }
  if (typeof route.params.folder === 'string') {
    return route.params.folder
  }
  return route.params.folder.join('/')
})

primaryColor.value = '#bca4d2'
function convertPathToTree(path: DirectorySummary): TreeListItemData[] {
  if (!path) {
    return []
  }
  const children = path.children ?? []
  return children.map((child) => {
    if ((child.children?.length ?? 0) > 0) {
      return {
        title: child.name,
        children: convertPathToTree(child),
        open: true,
      }
    }
    return {
      title: child.name,
      value: child.path,
      is: RouterLink,
      attrs: {
        to: `/dir/${child.path === '.' ? '@' : child.path}`,
        class: 'truncate',
        onClick: () => {
          showPost.value = null
        },
      },
    }
  })
}
const folderTree = computed(() => {
  if (!folders.data.value) {
    return []
  }
  return [{
    title: 'Files',
    open: true,
    children: [{
      title: 'Root',
      value: '@',
      is: RouterLink,
      attrs: {
        to: '/dir/@',
        class: 'truncate',
        onClick: () => {
          showPost.value = null
        },
      },
    }, ...convertPathToTree(folders.data.value)],
  }]
})
</script>

<template>
  <!-- <ToastSystem /> -->
  <RokuProvider>
    <DropOverlay />
    <div class="h-100vh w-100vw flex flex-col select-none overflow-hidden">
      <FloatWindow v-model="showMenu">
        <div class="overflow-hidden rounded-lg bg-surface-base text-sm">
          <ListItem
            title="New Folder"
            icon="i-tabler-folder-plus"
          />
          <ListItem
            title="Delete Folder"
            icon="i-tabler-folder-x"
          />
        </div>
      </FloatWindow>
      <TagSelectorWindow />
      <!-- <DialogContainer /> -->
      <Splitpanes class="max-h-[calc(100vh-24px)]">
        <Pane
          :min-size="8"
          :size="12"
          :max-size="36"
          class="min-w-64 flex flex-col border-r border-surface p-2"
        >
          <div class="h-36px flex items-center justify-center text-xl font-black">
            Pictoria
          </div>
          <SpecialPathList />
          <ScrollArea class="pr-2">
            <TreeList
              :model-value="currentPath"
              class="truncate"
              :items="folderTree"
            />
          </ScrollArea>
        </Pane>
        <Pane class="relative">
          <RouterView />
        </Pane>
        <Pane
          :min-size="12"
          :size="12"
          :max-size="36"
          class="min-w-64 border-l border-surface p-1"
        >
          <RightPanel />
        </Pane>
      </Splitpanes>
      <BottomBar />
    </div>
  </RokuProvider>
</template>

<style>
.splitpanes__splitter:hover:before {
  opacity: 1;
  background-color: #e0e0e0;
}
.splitpanes--vertical > .splitpanes__splitter:before {left: -4px;right: -4px;height: 100%;}
.splitpanes--vertical .splitpanes__pane {
    transition: none;
    overflow: unset;
}
.splitpanes__splitter {
  width: 4px;
}
</style>
