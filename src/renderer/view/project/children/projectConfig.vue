<template>
  <div class="project-config">
    <el-button 
      v-if="!projectConfigured"
      type="success" 
      icon="el-icon-circle-plus-outline"
      @click="$emit('beginCreate')"
    />
    <label v-else class="project__title">{{projectName}}</label>
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
  get projectPath ():string {
    return this.$store.state.projectPath
  }
  get projectConfigured ():boolean {
    return this.$store.getters.projectConfigured
  }

  beginCreate ():void {
    this.$emit('beginCreate')
  }
}
</script>

<style scoped lang="less">
@import url('~@/style/var.less');

.project-config{
  position: absolute;
  left: 0;
  top: 0;
  padding: 0 10px;
  line-height: 50px;
  flex: none;
}
.project__title{
  font-size: 25px;
  color: @black;
}
</style>
