import { ref } from 'vue'
import { useQuery } from 'vue-query'
import type { Post, PostPublic } from '../api'

import { v1GetPosts, v1GetTagGroups } from '../api'

export const baseUrl = 'http://localhost:4777'
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
  folder?: string
}
export type RightPanelDatum = Post | ImageDatum | InputDatum
export const postFilter = ref<WaterfallItem>({
  rating: [],
  score: [],
  tags: [],
})
export const waterfallItemWidth = useStorage('pictoria.waterfallItemWidth', 400)
export const selectedPostIdSet = ref<Set<number | undefined>>(new Set())
export const selectingPostIdSet = ref<Set<number | undefined>>(new Set())
export const unselectedPostIdSet = ref<Set<number | undefined>>(new Set())
export const currentPath = ref<string | symbol>('')

export function usePosts() {
  const getPostResp = useQuery(
    ['posts', postFilter],
    async () => {
      const resp = await v1GetPosts({
        baseUrl,
        body: postFilter.value,
      })
      return resp
    },
  )

  return computed<Array<Post>>(() => {
    const resp = getPostResp.data.value?.data ?? []
    return resp
  })
}

export function useTagGroup() {
  const tagGroupResp = useQuery(['tag-groups'], async () => {
    const resp = await v1GetTagGroups({ baseUrl })
    return resp.data
  }, {
    staleTime: Infinity,
  })
  return computed(() => tagGroupResp.data.value ?? [])
}

export const tagSelectorWindowRef = ref()
export function openTagSelectorWindow() {
  tagSelectorWindowRef.value?.toggle()
}

export const showPost = ref<PostPublic | null>(null)
