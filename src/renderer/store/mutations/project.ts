import { SET_NEW_PROJECT } from './types'
import { State, ProjectPayload } from '../interface'

export default {
  [SET_NEW_PROJECT] (state: State, data: ProjectPayload) {
    state.projectName = data.projectName
    state.projectPath = data.projectPath
  }
} 
