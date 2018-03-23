import { projectPathPassed, projectNamePassed } from '../biz/projectCreate'
import { State } from './interface'
export default {
  projectConfigured (state: State) {
    return projectPathPassed(state.projectPath) && projectNamePassed(state.projectName)
  }
}