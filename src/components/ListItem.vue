<script setup lang="ts">
defineProps<{
  title: string
  icon?: string
  extraInfo?: any
  active?: boolean
}>()
const emit = defineEmits<{
  dragover: [DragEvent]
  dragleave: [DragEvent]
  drop: [DragEvent]
}>()
const dragover = ref(false)
function onDragOver(event: DragEvent) {
  dragover.value = true
  emit('dragover', event)
}
function onDragleave(event: DragEvent) {
  dragover.value = false
  emit('dragleave', event)
}
function onDrop(event: DragEvent) {
  dragover.value = false
  emit('drop', event)
}
const folderItemRef = ref<HTMLElement | null>(null)
const hover = useElementHover(folderItemRef)
</script>

<template>
  <div
    ref="folderItemRef"
    class="flex items-center gap-1 py-1 px-2 rounded"
    :class="{
      'bg-surface-highest': active,
      'bg-surface-high': hover || dragover,
    }"
    @dragover="onDragOver"
    @dragleave="onDragleave"
    @drop="onDrop"
  >
    <i
      v-if="icon"
      class="flex-shrink-0"
      :class="icon"
    />
    <div class="flex-grow truncate">
      {{ title }}
    </div>
    <div
      v-if="extraInfo"
      class="text-surface-on-low text-xs font-mono flex-shrink-0"
    >
      {{ extraInfo }}
    </div>
  </div>
</template>
