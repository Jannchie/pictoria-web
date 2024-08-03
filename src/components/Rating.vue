<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  count?: number
  icon?: string | string[]
  highlightSelectedOnly?: boolean
  unselectable?: boolean
}>()
const emit = defineEmits<{
  select: [number]
}>()
const count = computed(() => props.count ?? 5)
const model = defineModel({
  default: 0,
})
const highlightSelectedOnly = computed(() => {
  return props.highlightSelectedOnly ?? false
})
const unselectable = computed(() => {
  return props.unselectable ?? false
})
const hoverIndex = ref(-1)
const defaultIcon = 'i-tabler-star'
const defaultActionIcon = 'i-tabler-star-filled'

function getIcon(index: number) {
  return index < model.value ? defaultActionIcon : defaultIcon
}

const icons = computed(() => {
  if (!props.icon) {
    return Array.from({ length: count.value }).map((_, index) => getIcon(index))
  }
  if (typeof props.icon === 'string') {
    return Array(count.value).map(_ => props.icon)
  }
  return Array.from({ length: count.value }).map((_, index) => props.icon[index] ?? defaultIcon)
})

const activeCls = 'text-orange-6'
const inactiveCls = 'text-surface-on-low'
const hoverCls = 'text-orange-6'
function getCls(idx: number) {
  if (highlightSelectedOnly.value) {
    if (hoverIndex.value !== -1) {
      if (hoverIndex.value === idx + 1) {
        return [hoverCls, defaultActionIcon]
      }
      return [inactiveCls, defaultIcon]
    }
    else {
      if (model.value === idx + 1) {
        return [activeCls, defaultActionIcon]
      }
      return [inactiveCls, defaultIcon]
    }
  }
  if (hoverIndex.value !== -1) {
    if (hoverIndex.value > idx) {
      return [hoverCls, defaultActionIcon]
    }
    else {
      return [inactiveCls, defaultIcon]
    }
  }
  else {
    if (model.value >= idx + 1) {
      return [activeCls, defaultActionIcon]
    }
    return [inactiveCls, defaultIcon]
  }
}
function onPointerDown(i: number) {
  if (model.value === i && unselectable.value) {
    emit('select', 0)
    model.value = 0
  }
  else {
    emit('select', i + 1)
    model.value = i + 1
  }
}
</script>

<template>
  <div class="flex gap-1 cursor-pointer">
    <i
      v-for="ico, i in icons"
      :key="i"
      :class="getCls(i)"
      @mouseover="hoverIndex = i + 1"
      @mouseleave="hoverIndex = -1"
      @pointerdown="onPointerDown(i)"
    />
  </div>
</template>
