<template>
  <div class="project-config">
    <span @click="selectProjectPath">配置地址</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { remote } from 'electron'

@Component
export default class ProjectConfig extends Vue {
  selectProjectPath () {
    remote.dialog.showOpenDialog({
        properties: ['openDirectory']
      },  paths => {
        if (paths && paths.length) {
        console.log(paths)
      }
    })
  }
}
</script>

<style scoped lang="less">
.project-config{
  width: 200px;
  flex: none;
}
</style>
