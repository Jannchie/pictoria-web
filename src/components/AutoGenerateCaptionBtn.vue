<script setup lang="ts">
import { v1CmdAutoCaption } from '@/api'
import { } from '@/shared'
import { Btn } from '@roku-ui/vue'
import { computed } from 'vue'
import { useMutation, useQueryClient } from 'vue-query'

const props = defineProps<{
  postId: number
}>()
const id = computed(() => props.postId)

const queryClient = useQueryClient()
const mutation = useMutation(
  () => v1CmdAutoCaption({ path: { post_id: id.value } }),
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
      class="i-tabler-message-2-bolt"
    />
    <div class="w-full">
      Auto Generate Caption
    </div>
  </Btn>
</template>
