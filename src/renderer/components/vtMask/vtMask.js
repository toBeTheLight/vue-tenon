import VtMask from './vtMask.vue'
import Vue from 'vue'

import {Button} from 'element-ui'

// let maskPool: VtMask[] = []
let maskPool = []

let $Mask = {
  open () {
    let mask = new (Vue.extend(VtMask))()
    let vm = mask.$mount()
    document.body.appendChild(vm.$el)
    maskPool.push(mask)
    mask.open()
    return mask
  },
  close () {
    let mask = maskPool.pop()
    if (mask) {
      mask.close()
    }
  },
  setState (state) {
    if (state) {
      this.open()
    } else {
      this.close()
    }
  },
  closeAll () {
    let mask = maskPool.pop()
    while(mask) {
      mask.close()
    }
  }
}

export default $Mask
