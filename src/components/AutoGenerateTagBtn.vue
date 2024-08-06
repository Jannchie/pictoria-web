<script setup lang="ts">
import { useMutation, useQueryClient } from 'vue-query'
import { computed } from 'vue'
import { Btn } from '@roku-ui/vue'
import { baseUrl } from '../shared'
import { v1CmdAutoTags } from '../api'

const props = defineProps<{
  postId: number
}>()
const id = computed(() => props.postId)

const queryClient = useQueryClient()
const mutation = useMutation(
  () => v1CmdAutoTags({ baseUrl, path: { post_id: id.value } }),
  {
    onSuccess: () => {
      queryClient.invalidateQueries(['post', id])
    },
  },
)
async function onAutoTag() {
  mutation.mutate()
}
</script>

<template>
  <Btn
    size="sm"
    class="w-full"
    @pointerdown="onAutoTag"
  >
    <i
      v-if="mutation.isLoading.value"
      class="i-svg-spinners-90-ring-with-bg"
    />
    <i
      v-else
      class="i-tabler-photo-pentagon"
    />
    Auto Generate Tag
  </Btn>
</template>
