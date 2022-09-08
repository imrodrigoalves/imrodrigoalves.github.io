import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import UI from '@indielayer/ui'
// import '@indielayer/ui/styles'
import './assets/styles.css'

const app = createApp(App)

app.use(router)

app.use(UI, {
    prefix: 'X',
  })
  
app.mount('#app')
