import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// IMPORTANTE: Este es el plugin
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

const app = createApp(App)

app.use(router)
// Usar el plugin de manera global
app.use(VueTelInput)

app.mount('#app')
