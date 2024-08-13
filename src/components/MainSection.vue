<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { logicAnd } from '@vueuse/math'
import { useQuery } from 'vue-query'
import type { PostBase, PostWithTag } from '../api'
import { v1GetPosts } from '../api'

import { baseUrl, postFilter, postSort, postSortOrder, selectedPostIdSet, selectingPostIdSet, unselectedPostIdSet as unselectingPostId, usePosts, waterfallItemWidth } from '../shared'
import type LazyWaterfall from './LazyWaterfall.vue'
import ScrollArea from './ScrollArea.vue'
import type { Area } from './SelectArea.vue'

const getPostResp = useQuery(
  ['posts', postFilter],
  async () => {
    return await v1GetPosts({
      baseUrl,
      body: postFilter.value,
    })
  },
)

const posts = usePosts()
const items = computed(() => posts.value.map(post => ({
  width: post.width ?? 1,
  height: post.height ?? 1,
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
    selectingPostIdSet.value = new Set([...selectingPostIdSet.value, ...currentSelectingId])
  }
  else if (ctrl) {
    // 如果原来已经选中了，则取消选中，否则添加选中
    currentSelectingId.forEach((postId) => {
      if (selectedPostIdSet.value.has(postId)) {
        unselectingPostId.value.add(postId)
      }
      else {
        selectingPostIdSet.value.add(postId)
      }
    })
  }
  else {
    selectedPostIdSet.value = currentSelectingId
  }
}
function onSelectEnd() {
  // 将 selecting 和 unselected 应用到 selected，然后清空 selecting 和 unselected
  selectedPostIdSet.value = new Set([...selectedPostIdSet.value, ...selectingPostIdSet.value].filter(id => !unselectingPostId.value.has(id)))
  selectingPostIdSet.value = new Set()
  unselectingPostId.value = new Set()
}

function onSelectStart({ ctrl, shift }: {
  ctrl: boolean
  shift: boolean
}) {
  // 如果没有按住 ctrl 或 shift，则清空已选中的元素
  if (!ctrl && !shift) {
    selectedPostIdSet.value = new Set()
  }
}

const { Ctrl_A } = useMagicKeys()
const activeElement = useActiveElement()
const notUsingInput = computed(() =>
  activeElement.value?.tagName !== 'INPUT'
  && activeElement.value?.tagName !== 'TEXTAREA')

whenever(logicAnd(Ctrl_A, notUsingInput), () => {
  selectedPostIdSet.value = new Set(posts.value.map(post => post.id))
})
const route = useRoute()
const router = useRouter()
watchEffect(async () => {
  if (route.query.post_id) {
    // 如果有 post_id 参数，则选中这个 post，并且滚动到这个 post
    const postId = Number(route.query.post_id)
    const postIndex = posts.value.findIndex(post => post.id === postId)
    if (postIndex === -1) {
      await router.push({ query: { post_id: undefined } })
      return
    }
    if (postId) {
      const postLayout = waterfallRef.value?.layoutData?.[postIndex]
      if (postLayout) {
        const res = document.querySelector(`#post-item-${postId}`)
        if (!res) {
          waterfallWrapperDom.value?.scrollTo({
            top: postLayout.y,
            behavior: 'smooth',
          })
          selectedPostIdSet.value = new Set([postId])
        }
      }
    }
  }
})
// 如果 selectedPostIdSet 只有一个元素，则变更路由，但是不要滚动
watchEffect(() => {
  if (selectedPostIdSet.value.size === 1) {
    const postId = selectedPostIdSet.value.values().next().value
    if (postId) {
      router.push({ query: { post_id: postId } })
    }
  }
})
</script>

<template>
  <section
    class="relative h-[calc(100vh-60px-24px)]"
  >
    <div v-if="getPostResp.isLoading.value">
      <div class="flex flex-col items-center p-16 op-50">
        <i class="i-tabler-loader animate-spin text-2xl" />
        <div class="text-sm">
          Loading posts...
        </div>
      </div>
    </div>
    <div v-else-if="posts.length === 0">
      <div class="flex flex-col items-center p-16 op-50">
        <i class="i-tabler-alert-triangle text-2xl" />
        <div class="text-sm">
          No posts found
        </div>
      </div>
    </div>
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
      :gap="24"
      :padding-x="8"
      :padding-y="8"
      :y-gap="36"
    >
      <PostItem
        v-for="post in posts"
        :id="`post-item-${post.id}`"
        :key="post.id"
        :post="post as PostWithTag"
      />
    </LazyWaterfall>
  </section>
</template>
