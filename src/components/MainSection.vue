<script setup lang="ts">
import type { Post } from '../api'
import { v1GetPosts } from '../api'
import { baseUrl, waterfallItemWidth } from '../shared'
import LazyWaterfall from './LazyWaterfall.vue'
import ScrollArea from './ScrollArea.vue'

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
</script>

<template>
  <section class="relative h-[calc(100vh-24px-24px)]">
    <SelectArea
      :target="waterfallContentDom"
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
