import { ADD_PROJECT, ADD_PAGE } from './types'
import { State, ProjectPayload } from '../../types/store'

export default {
  [ADD_PROJECT] (state: State, data: ProjectPayload) {
    state.projectName = data.projectName
    state.projectPath = data.projectPath
  },
} 
