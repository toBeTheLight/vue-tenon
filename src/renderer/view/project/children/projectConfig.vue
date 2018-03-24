<template>
  <div class="project-config" :class="{'list--open': listIsOpen === true}">
    <el-button
      class="project-new"
      v-if="!projectConfigured"
      type="success"
      icon="el-icon-circle-plus-outline"
      @click="$emit('beginCreate')"
    />
    <button class="project-all" v-else @click="toggleListState">
      <i class="el-icon-more"></i>
    </button>
    <div v-if="listIsOpen" class="project-list">
      <label class="project__title--now">
        <span>{{projectName}}</span>
      </label>
      <ul v-if="listIsOpen" class="project-list__wrapper">
        <li class="list__title">1</li>
        <li class="list__title">2</li>
        <li class="list__title">3</li>
      </ul>
      <div class="project"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ProjectCreate from './projectCreate.vue'
import { $Mask, VtMask } from '../../../components/vtMask/index'

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

  beginCreate () {
    this.$emit('beginCreate')
  }
  toggleListState () {
    this.listIsOpen = !this.listIsOpen
    $Mask.setState(this.listIsOpen)
  }
}
</script>

<style scoped lang="less">
@import url('~@/style/var.less');

.project-config {
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  z-index: 1000;
  transform: translate3d(-100%,0,0);
  transition: transform .3s linear;
}
.list--open {
  transform: translate3d(0,0,0);
  .project-all {
    transform: translate3d(130px,0,0);
  }
}
.project-new,.project-all{
  margin: 10px;
  transition: transform .3s linear;
  transform: translate3d(200px,0,0);
  z-index: 1001;
}
.project-all{
  position: absolute;
  z-index: 1001;
  left: 0;
  right: 0;
  padding: 12px 20px;
  font-size: 14px;
  color: @black;
  font-weight: 500;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}
.project-list {
  box-sizing: border-box;
  padding: 10px;
  height: 100%;
  background-color: @ghost;
  z-index: 1000;
}
.fly-enter-active,.fly-leave-active{
  transition: all .3s linear;
}
.fly-enter,.fly-leave-to{
  transform: translate3d(-100%,0,0);
}
.project__title--now {
  position: relative;
  display: inline-block;
  width: 180px;
  text-align: center;
  color: @black;
  border-bottom: 1px solid @gray;
  cursor: pointer;
  span {
    line-height: 40px;
    font-size: 25px;
    display: inline-block;
    width: 80%;
    .text-cut;
  }
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
