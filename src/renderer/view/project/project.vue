<template>
  <div class="page page-project">
    <VtMask :show="beginCreateState"/>
    <ProjectConfig @beginCreate="beginCreate"/>
    <ProjectOverview />
    <ProjectCreate @endCreate="endCreate" :beginCreate="beginCreateState"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ProjectConfig from './children/projectConfig.vue'
import ProjectOverview from './children/projectOverview.vue'
import ProjectCreate from './children/projectCreate.vue'
import VtMask from '../../components/VtMask.vue'

@Component({
  components: {
    VtMask,
    ProjectConfig,
    ProjectOverview,
    ProjectCreate
  }
})
export default class Project extends Vue {
  beginCreateState = false

  beginCreate ():void {
    this.beginCreateState = true
  }
  endCreate ():void {
    this.beginCreateState = false
  }
}
</script>

<style scoped lang="less">
.page-project{
  display: flex;
  flex-direction: column;
}
</style>
