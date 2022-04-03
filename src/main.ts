import { createApp } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

// 防止用户刷新，重新请求数据
setupStore()
app.use(globalRegister)
app.use(store)
app.use(router)
app.mount('#app')
