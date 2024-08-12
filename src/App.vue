<script setup lang="ts">
import { Pane, Splitpanes } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { useQuery } from 'vue-query'
import { baseUrl } from './shared'
import { v1GetFolders } from './api'
import { useDropToUpload, useWatchRoute } from './composables'

useDropToUpload()
useWatchRoute()
const folders = useQuery(
  ['folders'],
  async () => {
    const resp = await v1GetFolders({ baseUrl })
    return resp.data
  },
)
</script>

<template>
  <div class="h-100vh w-100vw flex flex-col select-none overflow-hidden">
    <TagSelectorWindow />
    <!-- <DialogContainer /> -->
    <Splitpanes class="max-h-[calc(100vh-24px)]">
      <Pane
        :min-size="8"
        :size="12"
        :max-size="36"
        class="flex flex-col border-r border-surface-border-high p-2"
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
        class="border-l border-surface-border-high p-1"
      >
        <RightPanel />
      </Pane>
    </Splitpanes>
    <BottomBar />
  </div>
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
