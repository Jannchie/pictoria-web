<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const showMenu = defineModel({
  default: false,
})
const menuRef = ref<HTMLElement | null>(null)
onClickOutside(menuRef, () => {
  showMenu.value = false
})
</script>

<template>
  <div class="relative">
    <slot name="trigger" />
    <div
      v-if="showMenu"
      ref="menuRef"
    >
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
