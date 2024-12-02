import type { PostPublic, PostWithTagPublic } from '@/api'
import { v1GetTagGroups, v1ListPosts } from '@/api'
import { useStorage } from '@vueuse/core'
import { computed, ref } from 'vue'
import { useQuery } from 'vue-query'

export const baseURL = 'http://localhost:4777'

interface ImageDatum {
  src: string
}
interface InputDatum {
  label: string
  value: string
}
interface PostFilter {
  rating: number[]
  score: number[]
  tags: string[]
  extension: string[]
  folder?: string
}
export type RightPanelDatum = PostPublic | ImageDatum | InputDatum
export const postFilter = ref<PostFilter>({
  rating: [],
  score: [],
  tags: [],
  extension: [],
})
export const waterfallItemWidth = useStorage('pictoria.waterfallItemWidth', 400)
export const selectedPostIdSet = ref<Set<number | undefined>>(new Set())
export const selectingPostIdSet = ref<Set<number | undefined>>(new Set())
export const unselectedPostIdSet = ref<Set<number | undefined>>(new Set())
export const currentPath = ref<string | symbol>('')
export const showNSFW = ref(false)

export const postSort = useLocalStorage<'id' | 'score' | 'rating' | 'created_at' | 'file_name'>('pictoria.posts.sort', 'id')
export const postSortOrder = useLocalStorage<'asc' | 'desc'>('pictoria.posts.sortOrder', 'desc')

export function usePostsQuery() {
  return useQuery(
    ['posts', postFilter, postSort, postSortOrder],
    async () => {
      const resp = await v1ListPosts({
        body: postFilter.value,
      })
      return resp.data?.sort((a, b) => {
        if (postSortOrder.value === 'asc') {
          const tmp = a
          a = b
          b = tmp
        }
        switch (postSort.value) {
          case 'score':
            return (b?.score ?? 0) - (a?.score ?? 0)
          case 'rating':
            return (b?.rating ?? 0) - (a?.rating ?? 0)
          case 'created_at':
            return (b?.created_at ?? 0) - (a?.created_at ?? 0)
          case 'file_name':
            return (b.file_name ?? '').localeCompare(a.file_name)
          default:
            return b.id - a.id
        }
      })
    },
    {
      refetchOnWindowFocus: false,
    },
  )
}
export function usePosts() {
  const postsQuery = usePostsQuery()
  return computed<Array<PostPublic>>(() => {
    return postsQuery.data.value ?? []
  })
}

export function useTagGroup() {
  const tagGroupResp = useQuery(['tag-groups'], async () => {
    const resp = await v1GetTagGroups({ })
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

export const showPost = ref<PostWithTagPublic | null>(null)

export const menuData = ref<any | null>(null)
export const showMenu = computed({ get: () => !!menuData.value, set: (val) => {
  if (!val) {
    menuData.value = null
  }
} })
