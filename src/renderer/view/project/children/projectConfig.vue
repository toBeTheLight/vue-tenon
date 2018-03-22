<template>
  <div class="project-config">
    <el-button 
      v-if="projectName === ''"
      type="success" 
      icon="el-icon-circle-plus-outline"
      @click="beginCreate"
    />
    <p v-if="projectName">{{projectName}}</p>
    <transition>
      <ProjectCreate @endCreate="endCreate" v-if="projectName === '' && beginCreateState"/>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ProjectCreate from './projectCreate.vue'

@Component({
  components: {
    ProjectCreate
  }
})
export default class ProjectConfig extends Vue {
  beginCreateState = false

  get projectName ():string {
    return this.$store.state.projectName
  }
  beginCreate ():void {
    this.beginCreateState = true
  }
  endCreate ():void {
    this.beginCreateState = false
  }
}
</script>

<style scoped lang="less">
.project-config{
  padding: 0 10px;
  line-height: 50px;
  background-color: #3369e7;
  flex: none;
}
</style>
