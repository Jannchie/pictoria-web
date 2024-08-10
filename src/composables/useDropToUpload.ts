import { useQueryClient } from 'vue-query'
import { v1UploadFile } from '../api'
import { baseUrl } from '../shared'

export function useDropToUpload() {
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
}
