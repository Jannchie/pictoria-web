<script setup lang="ts">
defineProps<{
  title: string
  icon?: string
  extraInfo?: any
}>()
</script>

<template>
  <div class="flex items-center gap-1 py-1 px-2 hover:bg-surface-highest rounded">
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
