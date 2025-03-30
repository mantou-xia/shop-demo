import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/font/iconfont.css'

const app = createApp(App)
app.use(createPinia())
app.use(ElementPlus)
app.use(router).mount('#app')