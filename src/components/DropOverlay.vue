<script setup lang="ts">
import { v1UploadFile } from '@/api'
import { useQueryClient } from 'vue-query'

const dropZoneRef = ref<HTMLElement | null>(null)
const isDraggingFiles = ref(false)
const dragEnterCount = ref(0)
const queryClient = useQueryClient()

async function traverseFileTree(item: any, path: string = '') {
  if (item.isFile) {
    item.file(async (file: File) => {
      await onUploadFile(file, path + file.name)
    })
  }
  else if (item.isDirectory) {
    const dirReader = item.createReader()
    dirReader.readEntries(async (entries: any[]) => {
      for (const entry of entries) {
        await traverseFileTree(entry, `${path + item.name}/`)
      }
    })
  }
}

async function onUploadFile(file: File, path: string | null) {
  await v1UploadFile({
    body: {
      file,
      path,
    },
  })
  queryClient.invalidateQueries(['posts'])
}

useEventListener(window, 'drop', async (event) => {
  event.preventDefault()
  dragEnterCount.value = 0
  isDraggingFiles.value = false
  const items = event.dataTransfer?.items
  if (items) {
    for (let i = 0; i < items.length; i++) {
      const item = items[i].webkitGetAsEntry()
      if (item) {
        await traverseFileTree(item)
      }
    }
  }
  // const files = event.dataTransfer?.files
  // if (files) {
  //   for (const file of files) {
  //     await onUploadFile(file, null)
  //   }
  // }
}, {
  passive: false,
  capture: true,
})

window.addEventListener('dragover', (e) => {
  e.preventDefault()
}, false)

useEventListener(window, 'dragend', () => {
  dragEnterCount.value = 0
})

useEventListener(window, 'dragenter', (event) => {
  dragEnterCount.value++
  if (event.dataTransfer?.types.includes('Files')) {
    isDraggingFiles.value = true
  }
  else {
    isDraggingFiles.value = false
  }
}, {
  passive: true,
  capture: true,
})
useEventListener(window, 'dragleave', (event) => {
  dragEnterCount.value--
  if (event.dataTransfer?.types.includes('Files')) {
    isDraggingFiles.value = true
  }
  else {
    isDraggingFiles.value = false
  }
}, {
  passive: true,
  capture: true,
})
</script>

<template>
  <div
    ref="dropZoneRef"
    :class="{
      hidden: dragEnterCount === 0 || !isDraggingFiles,
    }"
    class="pointer-events-none fixed z-10 h-100vh w-100vw flex items-center justify-center bg-primary-5/25 text-lg"
  >
    <div class="text-black">
      Drop files here to save them.
    </div>
  </div>
</template>
