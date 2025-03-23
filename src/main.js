import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())
installElementPlus(app)
app.use(router).mount('#app')
