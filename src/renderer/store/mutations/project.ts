import { SET_NEW_PROJECT } from './types'
import { State, ProjectPayload } from '../../types/store'

export default {
  [SET_NEW_PROJECT] (state: State, data: ProjectPayload) {
    state.projectName = data.projectName
    state.projectPath = data.projectPath
  }
} 
