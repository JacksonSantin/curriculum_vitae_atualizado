import '@mdi/font/css/materialdesignicons.css'

import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import vuetify from './plugins/vuetify'
import router from './router'
import Prism from 'prismjs';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/command-line/prism-command-line.css';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/components/prism-markdown';

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

Vue.config.productionTip = false
Vue.use(VueSweetalert2, options);


new Vue({
  router,
  vuetify,
  Prism,
  render: h => h(App)
}).$mount('#app')
