import { ADD_PAGE, SET_SELECT_PAGE } from './types'
import { State } from '../../types/store'

export default {
  [ADD_PAGE] (state: State, pageName: string) {
      state.pageList[pageName] = pageName
  },
  [SET_SELECT_PAGE] (state: State, pageName: string) {
    state.selectedPageName = pageName
  }
}