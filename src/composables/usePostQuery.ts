import type { MaybeRef } from 'vue'
import { v1GetPost } from '@/api'
import { } from '@/shared'
import { useQuery } from 'vue-query'

export function usePostQuery(id: MaybeRef<number | undefined>) {
  return useQuery(
    ['post', id],
    async () => {
      const post_id = unref(id)
      if (post_id === undefined) {
        return
      }
      const resp = await v1GetPost({

        path: { post_id },
      })
      return resp.data
    },
    {
      staleTime: Infinity,
    },
  )
}
