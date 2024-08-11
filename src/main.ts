import { createApp } from 'vue'
import { VueQueryPlugin } from 'vue-query'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './style.css'
import { highlightDirective } from './utils'

const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('./views/Home.vue') },
  { path: '/dir/:folder*', component: () => import('./views/Home.vue'), name: 'dir' },
  { path: '/random', component: () => import('./views/Home.vue') },
  { path: '/tags', component: () => import('./views/Tags.vue'), name: 'tags' },
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
