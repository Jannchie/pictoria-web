import { createApp } from 'vue'
import { VueQueryPlugin } from 'vue-query'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './style.css'

const app = createApp(App)
app.use(VueQueryPlugin)
app.mount('#app')
