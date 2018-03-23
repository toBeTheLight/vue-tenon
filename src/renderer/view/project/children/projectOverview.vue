<template>
  <div class="project-overview full">
    <ul class="pages" v-if="projectConfigured">
      <li class="page"></li>
    </ul>
    <h2 v-else class="overview__tip--no">配置你的第一个项目吧</h2>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class ProjectOverview extends Vue {
  get projectConfigured ():boolean {
    return this.$store.getters.projectConfigured
  }
}
</script>
<style lang="less" scoped>
@import url('~@/style/var.less');
.project-overview{
  background-color: @ghost;
  display: flex;
  height: 100%;
  overflow: auto;
}
.overview__tip--no{
  margin: auto;
}
</style>