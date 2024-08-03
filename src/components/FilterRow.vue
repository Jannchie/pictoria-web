<script setup lang="ts">
import { Btn } from '@roku-ui/vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useQuery } from 'vue-query'
import { v1CountGroupByScore } from '../api'
import { baseUrl, postFilter } from '../shared'

const showMenu = ref(false)
const menuRef = ref<HTMLElement | null>(null)
onClickOutside(menuRef, () => {
  showMenu.value = false
})
const scoreFilterData = computed({
  get() {
    return postFilter.value.score
  },
  set(val: number[]) {
    postFilter.value.score = val
  },
})
function hasScore(score: number) {
  return scoreFilterData.value.includes(score)
}
function onPointerDown(score: number) {
  if (hasScore(score)) {
    scoreFilterData.value = scoreFilterData.value.filter(s => s !== score)
  }
  else {
    scoreFilterData.value = [...scoreFilterData.value, score]
  }
}

const scoreCountMutation = useQuery(['count', 'score'], async () => {
  const resp = await v1CountGroupByScore({
    baseUrl,
  })
  return resp.data
})
const scoreCountList = computed(() => {
  const resp = [0, 0, 0, 0, 0, 0]
  const data = scoreCountMutation.data
  data.value?.forEach((d) => {
    resp[Number(d.score)] = d.count
  })
  return resp
})
</script>

<template>
  <div class="w-full">
    <div class="relative">
      <Btn
        size="sm"
        class=""
        @click="showMenu = !showMenu"
      >
        <i class="i-tabler-star" />
        <span>
          Score
        </span>
      </Btn>
      <div
        v-if="showMenu"
        class="z-10 border-surface-border-base bg-surface-low p-1 min-w-52 absolute mt-2 border rounded"
      >
        <div
          ref="menuRef"
          class="z-10"
        >
          <div
            v-for="score in [5, 4, 3, 2, 1, 0]"
            :key="score"
            class="gap-2 flex text-xs py-1 px-2 hover:bg-surface-high rounded w-full cursor-pointer"
            @pointerdown="onPointerDown(score)"
          >
            <Checkbox
              class="flex-shrink-0 pointer-events-none"
              :value="hasScore(score)"
            />
            <div class="flex gap-1 flex-grow">
              <template v-if="score === 0">
                Not Scored Yet
              </template>
              <template v-else>
                <i
                  v-for="i in score"
                  :key="i"
                  class="i-tabler-star-filled"
                />
              </template>
            </div>
            <div
              v-if="scoreCountList[score]"
              class="flex-shrink-0"
            >
              {{ scoreCountList[score] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
