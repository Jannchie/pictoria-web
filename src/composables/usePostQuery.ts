import type { MaybeRef } from 'vue'
import { useQuery } from 'vue-query'
import { v1GetPost } from '../api'
import { baseUrl } from '../shared'

export function usePostQuery(id: MaybeRef<number | undefined>) {
  return useQuery(
    ['post', id],
    async () => {
      const post_id = unref(id)
      if (post_id === undefined) {
        return
      }
      const resp = await v1GetPost({
        baseUrl,
        path: { post_id },
      })
      return resp.data
    },
    {
      staleTime: Infinity,
    },
  )
}
