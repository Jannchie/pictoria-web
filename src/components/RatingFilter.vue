<script setup lang="ts">
import { Btn } from '@roku-ui/vue'
import { computed, ref } from 'vue'
import { useQuery } from 'vue-query'
import { v1CountGroupByRating } from '../api'
import { baseUrl, postFilter } from '../shared'

const ratingFilterData = computed({
  get() {
    return postFilter.value.rating
  },
  set(val: number[]) {
    postFilter.value.rating = val
  },
})
function hasRating(rating: number) {
  return ratingFilterData.value.includes(rating)
}
function onPointerDown(rating: number) {
  if (hasRating(rating)) {
    ratingFilterData.value = ratingFilterData.value.filter(s => s !== rating)
  }
  else {
    ratingFilterData.value = [...ratingFilterData.value, rating]
  }
}
const filterWithoutRating = computed(() => {
  return {
    ...postFilter.value,
    rating: [],
  }
})
const scoreCountMutation = useQuery(['count', 'rating', filterWithoutRating], async () => {
  const resp = await v1CountGroupByRating({
    baseUrl,
    body: {
      ...postFilter.value,
    },
  })
  return resp.data
})
const scoreCountList = computed(() => {
  const resp = [0, 0, 0, 0, 0]
  const data = scoreCountMutation.data
  data.value?.forEach((d) => {
    resp[Number(d.rating)] = d.count
  })
  return resp
})

const btnText = computed(() => {
  const score = ratingFilterData.value
  if (score.length === 0) {
    return 'Rating'
  }
  else {
    return score.map(s => getRatingName(s)).join(', ')
  }
})
function getRatingName(rating: number) {
  switch (rating) {
    case 0:
      return 'Not Rating Yet'
    case 1:
      return 'General'
    case 2:
      return 'Sensitive'
    case 3:
      return 'Questionable'
    case 4:
      return 'Explicit'
    default:
      return 'Unknown'
  }
}
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
            v-for="rating in [1, 2, 3, 4, 0]"
            :key="rating"
            class="gap-2 flex text-xs py-1 px-2 hover:bg-surface-high rounded w-full cursor-pointer items-center"
            @pointerdown="onPointerDown(rating)"
          >
            <Checkbox
              class="flex-shrink-0 pointer-events-none"
              :value="hasRating(rating)"
            />
            <div class="flex gap-1 flex-grow h-16px">
              <template v-if="rating === 0">
                Not Scored Yet
              </template>
              <template v-else>
                {{ getRatingName(rating) }}
              </template>
            </div>
            <div
              v-if="scoreCountList[rating]"
              class="flex-shrink-0"
            >
              {{ scoreCountList[rating] }}
            </div>
          </div>
        </div>
      </template>
    </Popover>
  </div>
</template>
