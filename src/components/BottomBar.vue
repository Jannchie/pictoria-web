<script setup lang="ts">
import { selectedPostIdSet, usePosts } from '../shared'

const posts = usePosts()
</script>

<template>
  <div
    class="h-24px flex items-center border-t border-surface-border-high bg-surface-low px-1 text-xs text-surface-on-low"
  >
    All: {{ posts.length }}, Selected: {{ selectedPostIdSet.size }}
  </div>
</template>
