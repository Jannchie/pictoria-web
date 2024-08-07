import { createApp } from 'vue'
import { VueQueryPlugin } from 'vue-query'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './style.css'
import { highlightDirective } from './utils'

const app = createApp(App)
app.directive('highlight', highlightDirective)
app.use(VueQueryPlugin)
app.mount('#app')
