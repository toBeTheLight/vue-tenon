<template>
  <div class="test-btn" :style="`right:${right}px;bottom:${bottom}px`" @mousedown="downHandler">
    <el-input type="text" v-model="targetRouter"/>
    <button @click="$router.push(targetRouter)">跳转</button>
    <button @click="$router.go(-1)">回退</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      targetRouter: '',
      right: 10,
      bottom: 10,
      x: 0,
      y: 0,
      domWidth: 0,
      domHeight: 0,
      maxRight: 0,
      maxBottom: 0
    }
  },
    methods: {
    downHandler (e) {
      this.x = e.clientX
      this.y = e.clientY
      this.$el.addEventListener('mousemove', this.moveHandler)
      document.body.addEventListener('mouseup', this.upHandler)
    },
    moveHandler (e) {
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
    },
    upHandler () {
      this.$el.removeEventListener('mousemove', this.moveHandler)
      document.body.removeEventListener('mouseup', this.upHandler)
    },
    resizeHandelr () {
      this.domWidth = this.domWidth || this.$el.clientWidth + 10
      this.domHeight = this.domHeight || this.$el.clientHeight + 10
      this.maxRight = document.body.clientWidth - this.domWidth
      this.maxBottom = document.body.clientHeight - this.domHeight
    }
  },  
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
