<template>
  <div class="test-btn" :style="`right:${right}px;bottom:${bottom}px`" @mousedown="downHandler">
    <el-input type="text" v-model="targetRouter"/>
    <button @click="$router.push(targetRouter)">跳转</button>
    <button @click="$router.go(-1)">回退</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'
@Component({})
export default class TestBtn extends Vue {
  private targetRouter: string = ''
  private right: number = 10
  private bottom: number = 10
  private x: number = 0
  private y: number = 0
  private domWidth: number = 0
  private domHeight: number = 0
  private maxRight: number = 0
  private maxBottom: number = 0

  downHandler (e: MouseEvent) {
    this.x = e.clientX
    this.y = e.clientY
    this.$el.addEventListener('mousemove', this.moveHandler)
    document.body.addEventListener('mouseup', this.upHandler)
  }
  moveHandler (e: MouseEvent) {
    let right = this.right + this.x - e.clientX
    let bottom = this.bottom + this.y - e.clientY
    console.log('限制前', right, bottom)
    right = right < 0 ? 0 : right
    right = right > this.maxRight ? this.maxRight : right
    // right = Math.max(0, right)
    // right = Math.min(this.maxRight, right)
    bottom = Math.max(0, bottom)
    bottom = Math.min(this.maxBottom, bottom)
    console.log('限制后', right, bottom)
    this.right = right
    this.bottom = bottom
    this.x = e.clientX
    this.y = e.clientY
  }
  upHandler () {
    this.$el.removeEventListener('mousemove', this.moveHandler)
    document.body.removeEventListener('mouseup', this.upHandler)
  }
  resizeHandelr () {
    this.domWidth = this.domWidth || this.$el.clientWidth + 10
    this.domHeight = this.domHeight || this.$el.clientHeight + 10
    this.maxRight = document.body.clientWidth - this.domWidth
    this.maxBottom = document.body.clientHeight - this.domHeight
  }
  mounted () {
    this.$nextTick(() => {
      this.resizeHandelr()
      window.onresize = window.onresize || this.resizeHandelr
    })
  }
}
</script>

<style>
.test-btn {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 999;
  width: 200px;
  display: flex;
  flex-wrap: wrap;
}
</style>
