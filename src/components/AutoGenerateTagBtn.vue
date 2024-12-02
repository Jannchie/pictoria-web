<script setup lang="ts">
import { v1CmdAutoTags } from '@/api'
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
  () => {
    return v1CmdAutoTags({ path: { post_id: id.value } })
  },
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
    <div class="w-full overflow-hidden text-ellipsis text-nowrap">
      Auto Generate Tag
    </div>
  </Btn>
</template>
