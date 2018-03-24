import Vue from 'vue'
import Component from 'vue-class-component'
import VtMask from './VtMask.vue'

@Component
export class MyMixin extends Vue {
  elMask: HTMLDivElement = document.createElement('div')
  elMaskRendered: boolean = false

  created () {
    if (this.elMaskRendered) {
      this.elMask = document.createElement('div')
      document.body.appendChild(this.elMask)
      this.elMaskRendered = true
    } else {

    }
  }
}