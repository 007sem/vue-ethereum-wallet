import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

const pinia = createPinia()
// pinia 持久化插件
pinia.use(piniaPluginPersistedstate)


app.use(router)
app.use(pinia)
app.mount('#app')
