<script setup lang="ts">
import { v1GetFolders } from '@/api'

import { primaryColor, RokuProvider } from '@roku-ui/vue'
import { Pane, Splitpanes } from 'splitpanes'
import { useQuery } from 'vue-query'
import { useWatchRoute } from './composables'
import { showMenu } from './shared'

import 'splitpanes/dist/splitpanes.css'

useWatchRoute()
const folders = useQuery(
  ['folders'],
  async () => {
    const resp = await v1GetFolders({ })
    if (resp.error) {
      throw resp.error
    }
    return resp.data
  },
  {
    staleTime: 1000 * 60 * 60,
  },
)

primaryColor.value = '#bca4d2'
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
          class="flex flex-col border-r border-surface p-2"
        >
          <div class="h-36px flex items-center justify-center text-xl font-black">
            Pictoria
          </div>
          <ScrollArea class="pr-2">
            <SpecialPathList />
            <div
              v-if="folders.data.value"
              class="mt-1 overflow-y-auto text-sm"
            >
              <FolderItem
                :folder="folders.data.value"
                :depth="0"
              />
            </div>
          </ScrollArea>
        </Pane>
        <Pane class="relative">
          <RouterView />
        </Pane>
        <Pane
          :min-size="8"
          :size="12"
          :max-size="36"
          class="border-l border-surface p-1"
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
