<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useElementBounding, useMouse } from '@vueuse/core'
import type { PostPublic } from '../api'
import { baseUrl } from '../shared'

const props = defineProps<{
  post: PostPublic
}>()
const post = computed(() => props.post)
const imgSrc = computed(() => `${baseUrl}/v1/images/${post.value.file_path}.${post.value.extension}`)
const imgWrapperRef = ref<HTMLDivElement | null>(null)
const { width: imgWrapperWidth, height: imgWrapperHeight, left: imgWrapperLeft, top: imgWrapperTop } = useElementBounding(imgWrapperRef)
const imgContentWidth = computed(() => {
  return post.value.width!
})
const imgContentHeight = computed(() => {
  return post.value.height!
})
const imgWrapperRatio = computed(() => {
  return imgWrapperWidth.value / imgWrapperHeight.value
})
const imgContentRatio = computed(() => {
  return imgContentWidth.value / imgContentHeight.value
})

const initScale = computed(() => {
  if (imgWrapperRatio.value < imgContentRatio.value) {
    return imgWrapperWidth.value / imgContentWidth.value
  }
  return imgWrapperHeight.value / imgContentHeight.value
})
const scale = ref(initScale.value)

watchEffect(() => {
  scale.value = initScale.value
})
const scaleStr = computed(() => {
  return Number(scale.value * 100).toFixed(0)
})

const scaledInitWidth = computed(() => {
  return imgContentWidth.value * initScale.value
})

const scaledInitHeight = computed(() => {
  return imgContentHeight.value * initScale.value
})

const scaledWidth = computed(() => {
  return imgContentWidth.value * scale.value
})
const scaledHeight = computed(() => {
  return imgContentHeight.value * scale.value
})

const x = ref(0)
const y = ref(0)
watchEffect(() => {
  if (scaledInitWidth.value < imgWrapperWidth.value) {
    x.value = (imgWrapperWidth.value - scaledInitWidth.value) / 2
  }
  else {
    x.value = 0
  }
  if (scaledInitHeight.value < imgWrapperHeight.value) {
    y.value = (imgWrapperHeight.value - scaledInitHeight.value) / 2
  }
  else {
    y.value = 0
  }
})

const mouse = useMouse({ type: 'client' })
const mx = computed(() => mouse.x.value - imgWrapperLeft.value)
const my = computed(() => mouse.y.value - imgWrapperTop.value)
// function toCenter() {
//   x.value = (imgWrapperWidth.value - scaledWidth.value) / 2
//   y.value = (imgWrapperHeight.value - scaledHeight.value) / 2
// }
function onWheel(e) {
  e.preventDefault()

  // 计算缩放前鼠标相对于图片的位置
  const offsetX = (mx.value - x.value) / scale.value
  const offsetY = (my.value - y.value) / scale.value

  // 更新缩放比例
  const delta = e.deltaY
  const newScale = Math.max(0.1, Math.min(8, scale.value * (1 - delta / 1000)))
  scale.value = newScale

  // 计算缩放后图片左上角的位置
  x.value = mx.value - offsetX * newScale
  y.value = my.value - offsetY * newScale
}
const movingCanvas = ref(false)

function onPointerDown(e: PointerEvent) {
  if (e.buttons === 1) {
    e.preventDefault()
    movingCanvas.value = true
  }
}

function onPointermove(e: PointerEvent) {
  if (e.buttons === 1 && movingCanvas.value) {
    x.value = x.value + e.movementX
    y.value = y.value + e.movementY
  }
}

function onPointerUp() {
  movingCanvas.value = false
}

const miniMapScale = computed(() => {
  // 缩略图比例要基于容器的宽高
  const maxWidth = 150 // 比如缩略图最大宽度为150px
  const maxHeight = 150 // 比如缩略图最大高度为150px
  const widthRatio = maxWidth / imgContentWidth.value
  const heightRatio = maxHeight / imgContentHeight.value
  return Math.min(widthRatio, heightRatio)
})

const miniMapWidth = computed(() => imgContentWidth.value * miniMapScale.value)
const miniMapHeight = computed(() => imgContentHeight.value * miniMapScale.value)

const miniMapViewBox = computed(() => ({
  width: imgWrapperWidth.value * miniMapScale.value / scale.value,
  height: imgWrapperHeight.value * miniMapScale.value / scale.value,
  x: -x.value * miniMapScale.value / scale.value,
  y: -y.value * miniMapScale.value / scale.value,
}))

const dragging = ref(false)
const startMiniMapViewBox = { x: 0, y: 0 }

function onMiniMapMouseDown(e) {
  dragging.value = true
  startMiniMapViewBox.x = -x.value * miniMapScale.value / scale.value
  startMiniMapViewBox.y = -y.value * miniMapScale.value / scale.value
}

function onMiniMapMouseMove(e) {
  if (dragging.value) {
    const offsetX = e.movementX / miniMapScale.value
    const offsetY = e.movementY / miniMapScale.value

    x.value -= offsetX * scale.value
    y.value -= offsetY * scale.value
  }
}

function onMiniMapMouseUp() {
  dragging.value = false
}

function onMiniMapClick(e) {
  if (!dragging.value) {
    const rect = e.target.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const clickY = e.clientY - rect.top

    const offsetX = (clickX / miniMapScale.value) - (imgWrapperWidth.value / (2 * scale.value))
    const offsetY = (clickY / miniMapScale.value) - (imgWrapperHeight.value / (2 * scale.value))

    x.value = -offsetX * scale.value
    y.value = -offsetY * scale.value
  }
}
</script>

<template>
  <div
    class="absolute inset-0 z-10000 flex flex-col bg-surface-lowest"
  >
    <div class="h-52px w-full flex-shrink-0 border-b border-b-surface-border-high">
      {{ scaleStr }}%
    </div>
    <div
      ref="imgWrapperRef"
      class="relative h-full w-full flex-grow overflow-hidden"
      @pointerdown.stop="onPointerDown"
      @pointermove.stop="onPointermove"
      @pointerup.stop="onPointerUp"
      @wheel.stop="onWheel"
    >
      <!-- Cover -->
      <img
        class="absolute object-contain"
        :draggable="false"
        :style="{
          minWidth: `${imgContentWidth * scale}px`,
          minHeight: `${imgContentHeight * scale}px`,
          width: `${scaledWidth}px`,
          height: `${scaledHeight}px`,
          left: `${x}px`,
          top: `${y}px`,
        }"
        :src="imgSrc"
      >

      <!-- 缩略图 -->
      <div
        class="absolute bottom-4 left-4 z-200 border-2 border-gray-300 bg-white p-1"
        @mousedown.stop="onMiniMapMouseDown"
        @mouseup.stop="onMiniMapMouseUp"
        @mousemove.stop="onMiniMapMouseMove"
        @mouseleave.stop="onMiniMapMouseUp"
        @click.stop="onMiniMapClick"
      >
        <div
          class="relative"
          :style="{
            width: `${miniMapWidth}px`,
            height: `${miniMapHeight}px`,
            overflow: 'hidden',
          }"
        >
          <img
            :draggable="false"
            class="absolute object-contain"
            :src="imgSrc"
            :style="{
              width: `${miniMapWidth}px`,
              height: `${miniMapHeight}px`,
            }"
          >
          <!-- 显示视口框 -->
          <div
            class="absolute border-2 border-red-500"
            :style="{
              width: `${miniMapViewBox.width}px`,
              height: `${miniMapViewBox.height}px`,
              left: `${miniMapViewBox.x}px`,
              top: `${miniMapViewBox.y}px`,
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
