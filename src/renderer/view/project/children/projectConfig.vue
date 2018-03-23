<template>
  <div class="project-config" :class="{'list--open': listIsOpen === true}">
    <el-button
      class="project-new"
      v-if="!projectConfigured"
      type="success"
      icon="el-icon-circle-plus-outline"
      @click="$emit('beginCreate')"
    />
    <div v-else class="project-list" :class="{'list--open': listIsOpen === true}">
      <label class="list__title--active" @click="toggleListState">
        <span>{{projectName}}</span>
        <i class="list__switch el-icon-caret-bottom"></i>
      </label>
    </div>
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
  listIsOpen: boolean = false

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
  toggleListState () {
    this.listIsOpen = !this.listIsOpen
    this.$emit('showList', this.listIsOpen)
  }
}
</script>

<style scoped lang="less">
@import url('~@/style/var.less');

.project-config {
  position: absolute;
  left: 0;
  top: 0;
  flex: none;
}
.project-new{
  margin: 10px;
}
.project-list {
  width: 180px;
  padding: 10px;
  .text-cut;
}
.list--open{
  background-color: @ghost;
  height: 100%;
}
.list__title--active {
  position: relative;
  display: inline-block;
  font-size: 25px;
  line-height: 40px;
  width: 100%;
  text-align: center;
  color: @black;
  border-bottom: 1px solid @gray;
  cursor: pointer;
}
.list__switch {
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto 0;
  font-size: 12px;
  height: 12px;
}
</style>
