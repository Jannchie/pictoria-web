<script setup lang="ts">
import type { Post } from '../api'
import { v1GetPosts } from '../api'
import { baseUrl, selectedPostId, selectingPostId, unselectedPostId as unselectingPostId, waterfallItemWidth } from '../shared'
import LazyWaterfall from './LazyWaterfall.vue'
import ScrollArea from './ScrollArea.vue'
import type { Area } from './SelectArea.vue'

const resp = await v1GetPosts({
  baseUrl,
})
const posts = computed<Post[]>(() => resp.data ?? [])
const items = computed(() => posts.value.map(post => ({
  width: post.width ?? 0,
  height: post.height ?? 0,
})))

const waterfallRef = ref<InstanceType<typeof LazyWaterfall> | null>(null)
const waterfallContentDom = computed(() => waterfallRef.value?.contentDom)
const waterfallWrapperDom = computed(() => waterfallRef.value?.wrapperDom)
const waterfallWrapperBounds = useElementBounding(waterfallWrapperDom)
const cols = computed(() => Math.floor((waterfallWrapperBounds.width.value + 20 - 8 * 2) / (waterfallItemWidth.value + 20)))
const layoutData = computed(() => {
  return waterfallRef.value?.layoutData
})

function onSelectChange(selectArea: Area, { shift, ctrl }: { shift: boolean, ctrl: boolean }) {
  // layoutData 是 x,y,width,height 的数组，selectArea 是 left,rihht,top,bottom 的对象。
  // 通过计算两者的交集，得到选中的元素 index
  const currentSelectingId: Set<number | undefined> = new Set()

  layoutData.value?.forEach((element, index) => {
    const elementLeft = element.x
    const elementRight = element.x + element.width
    const elementTop = element.y
    const elementBottom = element.y + element.height

    // Check if there is an intersection between the element and the selectArea
    const isIntersecting
    = !(elementLeft > selectArea.right
    || elementRight < selectArea.left
    || elementTop > selectArea.bottom
    || elementBottom < selectArea.top)
    // 如果按住了 shift，则是追加选择，如果按住了 ctrl，则是补集选择
    const post = posts.value[index]
    if (isIntersecting) {
      currentSelectingId.add(post.id)
    }
  })
  if (shift) {
    selectingPostId.value = new Set([...selectingPostId.value, ...currentSelectingId])
  }
  else if (ctrl) {
    // 如果原来已经选中了，则取消选中，否则添加选中
    currentSelectingId.forEach((postId) => {
      if (selectedPostId.value.has(postId)) {
        unselectingPostId.value.add(postId)
      }
      else {
        selectingPostId.value.add(postId)
      }
    })
  }
  else {
    selectedPostId.value = currentSelectingId
  }
}
function onSelectEnd() {
  // 将 selecting 和 unselected 应用到 selected，然后清空 selecting 和 unselected
  selectedPostId.value = new Set([...selectedPostId.value, ...selectingPostId.value].filter(id => !unselectingPostId.value.has(id)))
  selectingPostId.value = new Set()
  unselectingPostId.value = new Set()
}

function onSelectStart({ ctrl, shift }: {
  ctrl: boolean
  shift: boolean
}) {
  // 如果没有按住 ctrl 或 shift，则清空已选中的元素
  if (!ctrl && !shift) {
    selectedPostId.value = new Set()
  }
}
</script>

<template>
  <section class="relative h-[calc(100vh-52px-24px)]">
    <SelectArea
      :target="waterfallContentDom"
      @select-start="onSelectStart"
      @select-change="onSelectChange"
      @select-end="onSelectEnd"
    />
    <LazyWaterfall
      :is="ScrollArea"
      ref="waterfallRef"
      class="waterfall-wrapper select-none"
      :items="items"
      :item-width="waterfallItemWidth"
      :cols="cols"
      :gap="20"
      :padding-x="8"
      :y-gap="36"
    >
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </LazyWaterfall>
  </section>
</template>
