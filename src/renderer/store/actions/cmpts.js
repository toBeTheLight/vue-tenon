import { SET_CMPT_TREE } from '../mutations/types'
let id = 0

export default {
  toSetCmptTree (context, {parent, cmpt, oldIndex, newIndex,}) {
    let method = ''
    if (cmpt.id === undefined) {
      cmpt = JSON.parse(JSON.stringify(cmpt))
      method = 'add'
    }
    context.commit(SET_CMPT_TREE, {
      index: newIndex,
      method: 'add',
      cmpt: cmpt,
      parent: parent,
      id: false
    })
  }
}