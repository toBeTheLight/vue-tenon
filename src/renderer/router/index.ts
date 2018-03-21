import Vue from 'vue'
import Router from 'vue-router'
import Projects from '../view/Projects.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'projects',
      component: Projects
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
