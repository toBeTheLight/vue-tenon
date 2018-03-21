<template>
  <div class="page page-project">
    <ProjectConfig />
    <ProjectOverView />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ProjectConfig from './children/projectConfig.vue'
import ProjectOverView from './children/projectOverview.vue'

@Component({
  components: {
    ProjectConfig,
    ProjectOverView
  }
})
export default class Project extends Vue {
  msg: string = '123'
}
</script>

<style scoped lang="less">
.page-project{
  display: flex;
}
</style>
