// 组件树
import { SET_CMPT_TREE, SET_CMPT_ID} from './types'

export default {
  [SET_CMPT_TREE] (state, {method, parent, cmpt, index, id}) {
    if (parent === 'root') {
      parent = state.cmptTree
    }
    cmpt.id = cmpt.id || state.id++
    switch (method) {
      case 'add':
        parent.splice(index, 0, cmpt)
    }
  }
}