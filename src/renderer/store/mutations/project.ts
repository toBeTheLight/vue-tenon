import { SET_NEW_PROJECT } from './types'
import { State } from '../state'


interface ProjectPayload {
  projectName: string,
  projectPath: string
}

export default {
  [SET_NEW_PROJECT] (state: State, data: ProjectPayload) {
    state.projectName = data.projectName
    state.projectPath = data.projectPath
  }
} 
