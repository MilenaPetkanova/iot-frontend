import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@/router'

import 'vuetify/styles' // Vuetify CSS
import '@mdi/font/css/materialdesignicons.css' // MDI icons CSS

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// import 'vue3-toastify/dist/index.css'
// import { ToastContainer, toast } from 'vue3-toastify'

import './assets/css/general.css'
import './assets/css/utilities.css'

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    global: {
      style: {
        fontFamily: 'SofiaSans, sans-serif'
      }
    }
  },
  theme: {
    defaultTheme: 'dark'
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi }
  }
})

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(vuetify)
// app.component('ToastContainer', ToastContainer)
app.mount('#app')
