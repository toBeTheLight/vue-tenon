import VtMask from './vtMask.vue'
import Vue from 'vue'

// typescript 无法正确推导，临时处理
declare interface MaskInstance extends VtMask{
  open(): Function
  close(): Function
  setState(): Function
  closeAll(): Function
}
import {Button} from 'element-ui'

// let maskPool: VtMask[] = []
let maskPool: MaskInstance[] = []

let $Mask = {
  open () {
    let mask: MaskInstance = new (Vue.extend(VtMask))()
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
  setState (state: boolean) {
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
