import type { RouteRecordRaw } from 'vue-router'
import { client } from '@/api/services.gen'
import App from '@/App.vue'
import { baseURL } from '@/shared'
import { highlightDirective } from '@/utils'
import { createApp } from 'vue'
import { VueQueryPlugin } from 'vue-query'
import { createRouter, createWebHistory } from 'vue-router'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import '@/style.css'

client.setConfig({
  baseURL,
  throwOnError: true,
})
const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('./views/Home.vue') },
  { path: '/dir/:folder*', component: () => import('./views/Home.vue'), name: 'dir' },
  { path: '/random', component: () => import('./views/Home.vue') },
  { path: '/tags', component: () => import('./views/Tags.vue'), name: 'tags' },
  { path: '/test', component: () => import('./views/Test.vue'), name: 'test' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
const app = createApp(App)
app.directive('highlight', highlightDirective)
app.use(VueQueryPlugin)
// app.use(VueQueryPlugin, { queryClientConfig: { defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } } } })
app.use(router)
app.mount('#app')
