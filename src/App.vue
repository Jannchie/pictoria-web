<script setup lang="ts">
import { Pane, Splitpanes } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { useQuery, useQueryClient } from 'vue-query'
import { baseUrl, selectedPostIdSet, showPost, waterfallItemWidth } from './shared'
import { v1DeletePost, v1GetFolders, v1UploadFile } from './api'

const dropArea = document.body as HTMLElement
dropArea.addEventListener('dragover', (event: DragEvent) => {
  event.preventDefault()
  dropArea.classList.add('dragover')
})

dropArea.addEventListener('dragleave', (_: DragEvent) => {
  dropArea.classList.remove('dragover')
})

dropArea.addEventListener('drop', async (event: DragEvent) => {
  event.preventDefault()
  dropArea.classList.remove('dragover')

  const items = event.dataTransfer?.items
  if (items) {
    for (let i = 0; i < items.length; i++) {
      const item = items[i].webkitGetAsEntry()
      if (item) {
        traverseFileTree(item)
      }
    }
  }
})

function traverseFileTree(item: any, path: string = '') {
  if (item.isFile) {
    item.file((file: File) => {
      onUploadFile(file, path + file.name)
    })
  }
  else if (item.isDirectory) {
    const dirReader = item.createReader()
    dirReader.readEntries((entries: any[]) => {
      for (const entry of entries) {
        traverseFileTree(entry, `${path + item.name}/`)
      }
    })
  }
}
const queryClient = useQueryClient()
async function onUploadFile(file: File, relativePath: string) {
  await v1UploadFile({
    baseUrl,
    body: {
      file,
      path: relativePath,
    },
  })
  queryClient.invalidateQueries(['posts'])
}

const folders = useQuery(
  ['folders'],
  async () => {
    const resp = await v1GetFolders({ baseUrl })
    return resp.data
  },
)
onKeyStroke('Delete', async () => {
  for (const post_id of selectedPostIdSet.value) {
    if (post_id === undefined) {
      continue
    }
    await v1DeletePost({
      baseUrl,
      path: {
        post_id,
      },
    })
  }
  queryClient.invalidateQueries(['posts'])
})
</script>

<template>
  <div class="h-100vh w-100vw flex flex-col select-none overflow-hidden">
    <TagSelectorWindow />
    <!-- <DialogContainer /> -->
    <Splitpanes>
      <Pane
        :min-size="8"
        :size="12"
        :max-size="36"
        class="border-r border-surface-border-high p-2"
      >
        <div class="h-36px flex items-center justify-center text-xl font-black">
          Pictoria
        </div>
        <SpecialPathList v-if="false" />
        <div v-if="folders.data.value">
          <FolderItem
            :folder="folders.data.value"
            :depth="0"
          />
        </div>
      </Pane>
      <Pane class="relative">
        <PostDetail
          v-if="showPost"
          :post="showPost"
        />
        <header class="h-60px flex flex-col items-center justify-center">
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
        <MainSection v-if="true" />
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
    <div
      class="h-24px border-t border-surface-border-high bg-surface-low text-surface-on-low"
    >
      <!-- bottom -->
    </div>
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
