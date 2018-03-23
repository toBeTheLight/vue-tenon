<template>
  <transition name="fade">
    <div class="full mask" v-if="show"></div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'vt-mask',
  props: [
    'show'
  ]
})
export default class Mask extends Vue {
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
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  z-index: 1;
  
}
</style>
