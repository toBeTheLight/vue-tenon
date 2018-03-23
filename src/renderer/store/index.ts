import Vue from 'vue'
import Vuex from 'vuex'

import project from './mutations/project'
import state from './state'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: state,
  getters,
  mutations: {
    ...project
  }
})
