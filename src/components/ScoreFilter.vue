<script setup lang="ts">
import { Btn } from '@roku-ui/vue'
import { computed } from 'vue'
import { useQuery } from 'vue-query'
import { v1CountGroupByScore } from '../api'
import { baseUrl, postFilter } from '../shared'

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
const filterWidthoutScore = computed(() => {
  return {
    ...postFilter.value,
    score: [],
  }
})
const scoreCountMutation = useQuery(['count', 'score', filterWidthoutScore], async () => {
  const resp = await v1CountGroupByScore({
    baseUrl,
    body: {
      ...postFilter.value,
    },
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

const btnText = computed(() => {
  const score = scoreFilterData.value
  if (score.length === 0) {
    return 'Score'
  }
  else {
    return score.map(s => s === 0 ? 'Not Scored Yet' : `${s} Star`).join(', ')
  }
})
</script>

<template>
  <div class="relative">
    <Popover position="bottom-start">
      <Btn
        size="sm"
      >
        <i class="i-tabler-star" />
        <span>
          {{ btnText }}
        </span>
      </Btn>
      <template #content>
        <div
          class="border-surface-border-base bg-surface-low p-1 min-w-52 border rounded"
        >
          <div
            v-for="score in [5, 4, 3, 2, 1, 0]"
            :key="score"
            class="gap-2 flex text-xs py-1 px-2 hover:bg-surface-high rounded w-full cursor-pointer items-center"
            @pointerdown="onPointerDown(score)"
          >
            <Checkbox
              class="flex-shrink-0 pointer-events-none"
              :value="hasScore(score)"
            />
            <div class="flex gap-1 flex-grow h-16px">
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
      </template>
    </Popover>
  </div>
</template>
