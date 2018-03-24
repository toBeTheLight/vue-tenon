<template>
  <transition name="fade" @after-leave="destroy">
    <div class="full mask" v-if="openState"></div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: [
    'name'
  ],
  name: 'vt-mask'
})
export default class VtMask extends Vue {
  openState: boolean = false
  close () {
    this.openState = false
  }
  destroy () {
    console.log(this.$el)
    document.body.removeChild(this.$el)
    this.$destroy()
    console.log(1)
  }
  open () {
    if (this.openState) {
      return
    }
    this.openState = true
  }
  setState (state: boolean) {
    if (state) {
      this.open()
    } else {
      this.close()
    }
  }
}
</script>

<style scoped lang="less">
@import url("~@/style/var.less");
.mask{
  position: absolute;
  top: 0;
  left: 0;
  will-change: opacity;
  background: @maskColor;
  z-index: 999;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
  z-index: 1;
}
</style>
