<template>
  <div id="app" class="full">
    <VtTestBtn />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import VtTestBtn from './components/vtTestBtn.vue'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'vue-tenon',
  components: {
    VtTestBtn
  }
})
export default class App extends Vue {
}
</script>

<style>
</style>
