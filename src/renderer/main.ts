import Vue from 'vue'
import axios from 'axios'

import '@/assets/less/common.less'

import App from './App.vue'
import router from './router'
import store from './store'

import element from 'element-ui'
Vue.use(element)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.$http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')