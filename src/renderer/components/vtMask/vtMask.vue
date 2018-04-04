<template>
  <transition name="fade" @after-leave="destroy">
    <div class="full mask" v-if="openState"></div>
  </transition>
</template>

<script>

export default {
  name: 'vt-mask',
  props: [
    'name'
  ],
  data () {
    return {
      openState: false
    }
  },
  methods: {
    close () {
      this.openState = false
    },
    destroy () {
      document.body.removeChild(this.$el)
      this.$destroy()
    },
    open () {
      if (this.openState) {
        return
      }
      this.openState = true
    },
    setState (state) {
      if (state) {
        this.open()
      } else {
        this.close()
      }
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
  z-index: 99;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
  z-index: 1;
}
</style>
