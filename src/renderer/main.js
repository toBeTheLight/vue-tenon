import Vue from 'vue'
import axios from 'axios'

import '@/style/common.less'

import App from './App.vue'
import router from './router'
import store from './store'

import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import CmptTemp from './components/cmptTemp.vue'
import Draggable from 'vuedraggable'

Vue.use(element)
// 全局注册此库公用组件

Vue.component('CmptTemp', CmptTemp)
Vue.component('Draggable', Draggable)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.$http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
let root = new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app')
