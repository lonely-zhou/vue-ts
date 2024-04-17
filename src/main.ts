import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
// router
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')
