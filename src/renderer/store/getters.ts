import { projectPathPassed, projectNamePassed } from '../biz/projectCreate'
import { State } from '../types/store'
export default {
  projectConfigured (state: State) {
    return projectPathPassed(state.projectPath) && projectNamePassed(state.projectName)
  }
}