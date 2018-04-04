import { ADD_PAGE, SET_SELECT_PAGE } from '../mutations/types'

export default {
  toAddPage (context, pageName) {
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