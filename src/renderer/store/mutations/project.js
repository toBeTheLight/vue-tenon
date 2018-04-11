// 项目级别
import { ADD_PROJECT, ADD_PAGE } from './types'

export default {
  [ADD_PROJECT] (state, data) {
    state.projectName = data.projectName
    state.projectPath = data.projectPath
  },
} 
