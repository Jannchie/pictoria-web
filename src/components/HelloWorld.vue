<script setup lang="ts">
const hello = useHelloWorld()
</script>

<template>
  <div class="bg-[#090909] text-[#E9994C] h-100vh w-100vw flex items-center justify-center">
    <div class="relative">
      <div class="text-[#cc4c19] font-bold absolute top-0 blur-20 text-nowrap pointer-event-none select-none">
        {{ hello }}
      </div>
      <div>
        {{ hello }}
      </div>
    </div>
  </div>
</template>
