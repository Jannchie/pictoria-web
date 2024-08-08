<script setup lang="ts">
const props = defineProps<{
  label?: string
  value?: boolean
}>()

const model = defineModel<boolean | undefined>('value', { default: undefined })
const value = computed(() => {
  return model.value ?? props.value ?? false
})
</script>

<template>
  <label class="inline-flex cursor-pointer items-center">
    <input
      v-model="model"
      type="checkbox"
      class="hidden"
    >
    <span
      class="inline-block h-3.5 w-3.5 flex items-center justify-center rounded"
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
