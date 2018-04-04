export default {
  data () {
    return {
      elMask: document.createElement('div'),
      elMaskRendered: false
    }
  },
  created () {
    if (this.elMaskRendered) {
      this.elMask = document.createElement('div')
      document.body.appendChild(this.elMask)
      this.elMaskRendered = true
    } else {

    }
  }
}