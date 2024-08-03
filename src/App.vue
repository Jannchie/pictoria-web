<script setup lang="ts">
import { createClient } from '@hey-api/client-fetch'
import { Pane, Splitpanes } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { useMutation, useQuery, useQueryClient } from 'vue-query'
import { baseUrl, waterfallItemWidth } from './shared'
import { v1GetPostsCount } from './api'

const { data: allCount } = useQuery(
  ['post-count'],
  async () => {
    const resp = await v1GetPostsCount({ baseUrl })
    return resp.data.count
  },
)
createClient({ baseUrl })
</script>

<template>
  <div class="flex w-100vw h-100vh flex-col overflow-hidden select-none">
    <Splitpanes class="flex flex-grow">
      <Pane
        :min-size="8"
        :size="12"
        :max-size="36"
        class="border-r border-surface-border-high p-2"
      >
        <div class="flex flex-col gap-1 text-sm select-none">
          <ListItem
            icon="i-tabler-photo"
            title="All"
            :extra-info="allCount"
          />
          <ListItem
            icon="i-tabler-clock"
            title="Recently"
            extra-info="12,522"
          />
          <ListItem
            icon="i-tabler-arrows-cross"
            title="Random"
            extra-info="152,612"
          />
        </div>
      </Pane>
      <Pane class="flex-grow px-1">
        <header class="flex flex-col justify-center h-52px items-center">
          <div class="flex justify-center w-32">
            <Slider
              v-model="waterfallItemWidth"
              size="sm"
              :min="50"
              :max="800"
              :min-width="0"
              :tick-num="0"
            />
          </div>
          <FilterRow />
        </header>
        <Suspense>
          <MainSection />
        </Suspense>
      </Pane>
      <Pane
        :min-size="8"
        :size="12"
        :max-size="36"
        class="border-l border-surface-border-high p-1"
      >
        <RightPanel />
      </Pane>
    </Splitpanes>
    <div
      class="bg-surface-low text-surface-on-low "
    >
      bottom
    </div>
  </div>
</template>
