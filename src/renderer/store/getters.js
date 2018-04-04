import { projectPathPassed, projectNamePassed } from '../biz/projectCreate'
export default {
  projectConfigured (state) {
    return projectPathPassed(state.projectPath) && projectNamePassed(state.projectName)
  }
}