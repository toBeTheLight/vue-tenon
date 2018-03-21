import Vue from 'vue'
import Router from 'vue-router'
import Project from '../view/project/project.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'project',
      component: Project
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
