<template>
  <div id="app" class="full">
    <VtTestBtn />
    <router-view></router-view>
  </div>
</template>

<script>
import VtTestBtn from './components/vtTestBtn.vue'
  export default {
    name: 'vue-tenon',
    components: {
      VtTestBtn
    }
  }
</script>

<style>
</style>
