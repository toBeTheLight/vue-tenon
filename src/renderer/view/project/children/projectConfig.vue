<template>
  <div class="project-config">
    <el-button 
      v-if="projectName === ''"
      type="success" 
      icon="el-icon-circle-plus-outline"
      @click="$emit('beginCreate')"
    />
    <p v-if="projectName">{{projectName}}</p>
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
  get projectName ():string {
    return this.$store.state.projectName
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
