<script setup lang="ts">
const props = defineProps<{
  label?: string
  value?: boolean
}>()

const model = defineModel<boolean | undefined>({ default: undefined })
const value = computed(() => {
  return model.value ?? props.value ?? false
})
</script>

<template>
  <label class="inline-flex items-center cursor-pointer">
    <input
      v-model="model"
      type="checkbox"
      class="hidden"
    >
    <span
      class="w-3.5 h-3.5 inline-block rounded flex items-center justify-center"
      :class="[{
        'bg-primary-container hover:bg-primary-containerl': value,
        'bg-surface-highest border border-surface-8': !value,
      }]"
    >
      <i
        v-if="value"
        class="i-tabler-check"
      />
    </span>
    <span
      v-if="label"
      class="ml-2 text-gray-700"
    >
      {{ label }}
    </span>
  </label>
</template>
