<script setup lang="ts">
import { Pane, Splitpanes } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { useQuery } from 'vue-query'
import { baseUrl, waterfallItemWidth } from './shared'
import { v1GetFolders, v1UploadFile } from './api'

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

async function onUploadFile(file: File, relativePath: string) {
  // await v1UploadFile({
  //   baseUrl,
  //   body: {
  //     file,
  //     path: relativePath,
  //   },
  // })
  const formData = new FormData()
  formData.append('file', file)
  formData.append('path', relativePath)
  await fetch('http://localhost:8000/v1/upload', {
    method: 'POST',
    body: formData,
  })
}

const folders = useQuery(
  ['folders'],
  async () => {
    const resp = await v1GetFolders({ baseUrl })
    return resp.data
  },
)
</script>

<template>
  <div class="flex w-100vw h-100vh flex-col overflow-hidden select-none">
    <Splitpanes>
      <Pane
        :min-size="8"
        :size="12"
        :max-size="36"
        class="border-r border-surface-border-high p-2"
      >
        <div class="flex justify-center items-center h-36px text-xl font-black">
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
      <Pane>
        <header class="flex flex-col justify-center h-52px items-center">
          <div class="flex justify-center w-32">
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
      class="bg-surface-low text-surface-on-low h-24px border-t border-surface-border-high"
    >
      <!-- bottom -->
    </div>
  </div>
</template>

<style>
.splitpanes__splitter:hover:before {opacity: 1;}
.splitpanes--vertical > .splitpanes__splitter:before {left: -2px;right: -2px;height: 100%;}
.splitpanes--vertical .splitpanes__pane {
    transition: none;
}
</style>
