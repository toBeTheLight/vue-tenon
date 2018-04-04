<template>
  <div class="project-config">
    <el-button
      class="project-btn--new"
      v-if="!projectConfigured"
      type="success"
      icon="el-icon-circle-plus-outline"
      @click="$emit('beginCreate')"
    />
    <button class="project-btn--all" :class="{open: listIsOpen}" v-else @click="toggleListState">
      <i :class="listIsOpen ? 'el-icon-back' : 'el-icon-more'"></i>
    </button>
    <transition name="fly">
      <div v-if="listIsOpen" class="project-list">
        <label class="project-list__header">
          <span>{{projectName}}</span>
        </label>
        <ul v-if="listIsOpen" class="project-list__body">
          <li class="list__title" v-for="(item, i) in projectList" :key="i">{{item}}</li>
        </ul>
        <div class="project-list__footer">
          <el-button type="success" size="small" icon="el-icon-plus" disabled round>创建项目</el-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ProjectCreate from './projectCreate.vue'
import { $Mask, VtMask } from '../../../components/vtMask/index'

export default {
  data () {
    return {
      listIsOpen: false,
      projectList: ['it\'s demo', 'it\'s demo', 'it\'s demo', 'it\'s demo']
    }
  },
  computed: {
    projectName () {
      return this.$store.state.projectName
    },
    projectPath () {
      return this.$store.state.projectPath
    },
    projectConfigured () {
      return this.$store.getters.projectConfigured
    }
  },
  methods: {
    beginCreate () {
      this.$emit('beginCreate')
    },
    toggleListState () {
      this.listIsOpen = !this.listIsOpen
      $Mask.setState(this.listIsOpen)
    }
  },
  components: {
    ProjectCreate
  }
}
</script>

<style scoped lang="less">
@import url('~@/style/var.less');

.project-config {
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 100;
}
.project-btn--new, .project-btn--all {
  margin: 10px;
  transition: transform .3s linear;
  z-index: 101;
}
.project-btn--all {
  position: absolute;
  z-index: 101;
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
  transition: transform .3s ease-in;
  &.open {
    transform: translate3d(130px,0,0);
  }
}
.project-list {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 200px;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  background-color: @ghost;
  z-index: 100;
}
.list__title{
  .text-cut;
}
.fly-enter-active,.fly-leave-active {
  transition: all .3s linear;
}
.fly-enter,.fly-leave-to{
  transform: translate3d(-100%,0,0);
}
.project-list__header {
  display: inline-block;
  position: relative;
  width: 180px;
  flex: none;
  text-align: center;
  color: @black;
  border-bottom: 1px solid @gray;
  cursor: pointer;
  span {
    line-height: 40px;
    font-size: 25px;
    font-weight: 700;
    display: inline-block;
    width: 80%;
    .text-cut;
  }
}
.project-list__body {
  overflow: auto;
  margin-top: 10px;
  height: 100%;
  font-size: 14px;
  line-height: 30px;
  color: @pathColor;
}
.project-list__footer {
  text-align: center;
  flex: none;
}
</style>
