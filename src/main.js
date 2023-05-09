import '@mdi/font/css/materialdesignicons.css'

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-json'

Vue.config.productionTip = false

new Vue({
  vuetify,
  Prism,
  render: h => h(App)
}).$mount('#app')
