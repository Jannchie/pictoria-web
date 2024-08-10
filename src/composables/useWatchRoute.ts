import { useRoute } from 'vue-router'
import { postFilter } from '../shared'

export function useWatchRoute() {
  const route = useRoute()
  const currentPath = ref(route.path)
  watch(route, () => {
    console.log('route changed', { ...route }, currentPath.value)
    switch (route.name) {
      case 'dir':
        if (Array.isArray(route.params.folder)) {
          postFilter.value.folder = route.params.folder.join('/')
        }
        else {
          postFilter.value.folder = route.params.folder
        }
    }
  })
}
