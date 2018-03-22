<template>
  <div class="page page-project">
    <ProjectConfig />
    <ProjectOverview />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ProjectConfig from './children/projectConfig.vue'
import ProjectOverview from './children/projectOverview.vue'

@Component({
  components: {
    ProjectConfig,
    ProjectOverview
  }
})
export default class Project extends Vue {
}
</script>

<style scoped lang="less">
.page-project{
  display: flex;
  flex-direction: column;
}
</style>
