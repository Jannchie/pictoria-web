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
interface WaterfallItem {
  rating: number[]
  score: number[]
  tags: string[]
}
export type RightPanelDatum = Post | ImageDatum | InputDatum
export const postFilter = ref<WaterfallItem>({
  rating: [],
  score: [],
  tags: [],
})
export const waterfallItemWidth = useStorage('pictoria.waterfallItemWidth', 400)
export const selectedPostId = ref<Set<number | undefined>>(new Set())
export const selectingPostId = ref<Set<number | undefined>>(new Set())
export const unselectedPostId = ref<Set<number | undefined>>(new Set())
