import { createApp } from 'vue'
import './service/axios_demo'

import { globalRegister } from './global'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(globalRegister)

app.use(router)
app.use(store)

app.mount('#app')
