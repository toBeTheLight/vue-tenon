<template>
  <div class="page page-project">
    <VtMask :show="showMask"/>
    <ProjectConfig @beginCreate="beginCreate" @showList="showList"/>
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
  showMask = false

  beginCreate ():void {
    this.beginCreateState = true
    this.showMask = true
  }
  endCreate ():void {
    this.beginCreateState = false
    this.showMask = false
  }
  showList (isShow: boolean):void {
    this.showMask = isShow
  }
}
</script>

<style scoped lang="less">
.page-project{
  display: flex;
  flex-direction: column;
}
</style>
