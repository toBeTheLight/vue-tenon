// 页面级别
import { ADD_PAGE, SET_SELECT_PAGE } from './types'

export default {
  [ADD_PAGE] (state, pageName) {
      state.pageList[pageName] = pageName
  },
  [SET_SELECT_PAGE] (state, pageName) {
    state.selectedPageName = pageName
  }
}