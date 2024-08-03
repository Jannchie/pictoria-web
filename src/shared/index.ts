import { ref } from 'vue'
import type { Post } from '../api'

export const baseUrl = 'http://localhost:8000'
interface ImageDatum {
  src: string
}
interface InputDatum {
  label: string
  value: string
}
export type RightPanelDatum = Post | ImageDatum | InputDatum
export const rightPanelData = ref<RightPanelDatum[]>([])
export const waterfallItemWidth = ref(400)
export const selectedPostId = ref<Set<string | undefined>>(new Set())
export const selectingPostId = ref<Set<string | undefined>>(new Set())
export const unselectedPostId = ref<Set<string | undefined>>(new Set())
