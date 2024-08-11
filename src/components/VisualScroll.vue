<script setup lang="ts" generic="T">
import { useElementBounding, useScroll } from '@vueuse/core'
import { type Component, computed, nextTick, ref, shallowRef, watchEffect } from 'vue'
import { useVirtual } from '../composables/useVirtual'

const props = withDefaults(defineProps<{
  is?: Component | string
  items?: T[]
  itemHeight?: number
}>(), {
  items: () => [],
  is: 'div',
})
const slotRefs = ref<HTMLDivElement[]>([])

const wrapper = ref<HTMLElement | null>(null)
const wrapperBounds = useElementBounding(wrapper)
const wrapperHeight = computed(() => wrapperBounds.height.value)

const slotRefsHeight = computed(() => slotRefs.value.map(el => el.clientHeight).reduce((a, b) => a + b, 0))
const currentStartIdx = ref(0)
const currentEndIdx = ref(0)

const scroll = useScroll(wrapper)
const scrollY = computed(() => scroll.y.value)

const calculatedHeightsTrue = shallowRef<number[]>([])
// watchEffect(() => {
//   calculatedHeights.value.length = props.items.length
// })
// const avgHeight = computed(() => {
//   if (props.itemHeight) {
//     return props.itemHeight
//   }
//   if (props.items.length === 0) {
//     return 20
//   }
//   return slotRefsHeight.value / props.items.length
// })
const calculatedHeights = computed(() => {
  return props.items.map((_, i) => {
    if (calculatedHeightsTrue.value[i]) {
      return calculatedHeightsTrue.value[i]
    }
    return 20
  })
})

const showItems = computed(() => props.items.slice(currentStartIdx.value, currentEndIdx.value))
watchEffect(() => {
  for (let i = 0; i < slotRefs.value.length; i++) {
    calculatedHeightsTrue.value[i + currentStartIdx.value] = slotRefs.value[i].clientHeight
  }
  calculatedHeightsTrue.value = [...calculatedHeightsTrue.value]
})

watchEffect(() => {
  const currentItem = props.items[currentEndIdx.value]
  if (slotRefsHeight.value < wrapperHeight.value && currentItem) {
    currentEndIdx.value++
  }
})

const currentAverageHeight = computed(() => {
  return slotRefsHeight.value / showItems.value.length
})

const remainItems = computed(() => props.items.slice(currentEndIdx.value))
const remainHeight = computed(() => remainItems.value.length * currentAverageHeight.value)
const paddingTop = computed(() => calculatedHeights.value.slice(0, currentStartIdx.value).reduce((a, b) => a + b, 0))

watchEffect(() => {
  // 根据滚动的位置，计算视口内元素的起始索引
  for (let i = 0; i < calculatedHeights.value.length; i++) {
    if (calculatedHeights.value.slice(0, i).reduce((a, b) => a + b, 0) > scrollY.value) {
      currentStartIdx.value = i - 1
      break
    }
  }
})

const calculatedSum = computed(() => calculatedHeights.value.reduce((a, b) => a + b, 0))
watchEffect(() => {
  if (calculatedSum.value < wrapperHeight.value + scrollY.value) {
    nextTick(() => {
      currentEndIdx.value++
    })
  }
  else {
    // 根据滚动的位置，计算视口内元素的结束索引
    for (let i = 0; i < calculatedHeights.value.length; i++) {
      if (calculatedHeights.value.slice(0, i).reduce((a, b) => a + b, 0) > wrapperHeight.value + scrollY.value) {
        currentEndIdx.value = i
        break
      }
    }
  }
})
</script>

<template>
  scrollY: {{ scrollY }},  calculated Sum: {{ calculatedSum }}, currentStartIdx: {{ currentStartIdx }}, currentEndIdx: {{ currentEndIdx }},
  <component
    :is="is"
    ref="wrapper"
    class="h-full overflow-auto"
  >
    <div
      :style="{
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${remainHeight}px`,
      }"
    >
      <div
        v-for="item, i of showItems"
        ref="slotRefs"
        :key="currentStartIdx + i"
      >
        <slot
          :item="item"
          :index="currentStartIdx + i "
        />
      </div>
    </div>
  </component>
</template>
