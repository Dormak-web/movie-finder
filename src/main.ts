import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createPinia} from "pinia";

const pinia = createPinia()

createApp(App)
    .use(ElementPlus)
    .use(pinia)
    .use(router)
    .mount('#app')
