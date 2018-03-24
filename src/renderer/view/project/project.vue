<template>
  <div class="page page-project">
    <ProjectConfig @beginCreate="beginCreate" ref="config"/>
    <ProjectOverview />
    <ProjectCreate @endCreate="endCreate" v-if="beginCreateState"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ProjectConfig from './children/projectConfig.vue'
import ProjectOverview from './children/projectOverview.vue'
import ProjectCreate from './children/projectCreate.vue'

@Component({
  components: {
    ProjectConfig,
    ProjectOverview,
    ProjectCreate
  }
})
export default class Project extends Vue {
  beginCreateState = false
  showMask = false

  beginCreate ():void {
    this.beginCreateState = true
    this.showMask = true
  }
  endCreate ():void {
    this.beginCreateState = false
    this.showMask = false
  }
}
</script>

<style scoped lang="less">
.page-project{
  display: flex;
  flex-direction: column;
}
</style>
