import Vue from 'vue'
import axios from 'axios'

import '@/style/common.less'

import App from './App.vue'
import router from './router'
import store from './store'

import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(element)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.$http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
let root = new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
  methods: {
    console () {
      console.log(1)
    }
  }
}).$mount('#app')
