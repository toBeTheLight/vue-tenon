import { ActionContext, Commit } from "vuex";
import { ADD_PAGE, SET_SELECT_PAGE } from '../mutations/types'
import { State } from '../../types/store'

export default {
  toAddPage (context: ActionContext<State, Object>, pageName: string) {
    return new Promise((resolve, reject) => {
      context.commit(ADD_PAGE, pageName)
      if (context.state.pageList[pageName]) {
        // 有则不创建
      } else {
        context.commit(ADD_PAGE, pageName)
      }
      context.commit(SET_SELECT_PAGE, pageName)
      resolve()
    }) 
  }
}