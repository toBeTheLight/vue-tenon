<template>
  <transition name="fade">
    <div class="project-create full">
      <el-card class="form">
        <span class="form__close" @click="endCreate"><i class="el-icon-close"></i></span>
        <div class="form-item form__path--select">
          <label class="form-label">选择项目路径：</label>
          <el-button type="primary" @click="selectDirPath">点击选择项目路径</el-button>
        </div>
        <div class="form-item form__path--temp">
          <label class="form-label">选择地址为：</label>
          <p>{{tempProjectPath || '未选择'}}</p>
        </div>
        <div class="form-item form__name--temp">
          <label class="form-label">项目名称：</label>
          <el-input v-model="tempProjectName" size="small" placeholder="字母开头的20位以下字母或数字"></el-input>
        </div>
        <div class="form-item form__tip">
          <p>当前信息保存后无法修改</p>
        </div>
        <div class="form-item form__btns">
          <el-button type="success" :disabled="!tempConfigPassed" @click="createNewProject">确定</el-button>
        </div>
      </el-card>
    </div>
  </transition >
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { selectDirPath, projectPathPassed, projectNamePassed } from '../../../biz/projectCreate'
import { ADD_PROJECT } from '../../../store/mutations/types'
import { $Mask, VtMask } from '../../../components/vtMask/index'

@Component({
  props:[
    'beginCreate'
  ]
})
export default class ProjectCreate extends Vue {
  tempProjectPath = ''
  tempProjectName = ''
  $mask: null | VtMask = null
  get tempConfigPassed () {
    return projectPathPassed(this.tempProjectPath) && projectNamePassed(this.tempProjectName)
  }
  async selectDirPath () {
    let { path, isEmpty } = await selectDirPath()
    if (!isEmpty) {
      this.$confirm('当前文件夹不为空，可能会覆盖文件夹内文件，是否继续')
        .then(() => {
          this.tempProjectPath = path
        })
        .catch(() => {
        })
    } else {
      this.tempProjectPath = path
    }
  }
  createNewProject ():void {
    this.$store.commit(ADD_PROJECT, {
      projectName: this.tempProjectName,
      projectPath: this.tempProjectPath
    })
    this.endCreate()
  }
  endCreate ():void {
    this.$emit('endCreate')
    $Mask.close()
  }
  created () {
    $Mask.open()
  }
}
</script>

<style lang="less" scoped>
@import url("~@/style/var.less");

.project-create {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  will-change: transform, opacity;
  z-index: 1000;
}
.fade-enter-active {
  animation: fade-in .3s;
}
.fade-leave-active {
  animation: fade-out .3s;
}
@keyframes fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}

.form{
  width: 500px;
  padding: 0px 10px;
  position: relative;
}
.form-label{
  display: block;
  line-height: 30px;
  font-size: 14px;
}
.form__close{
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 20px;
  cursor: pointer;
}
.form__path--temp{
  p{
    .text-cut;
    color: @pathColor;
    font-size: 12px;
    line-height: 20px;
  }
}

.form__name--temp{
  margin-top: 10px;
}
.form__tip{
  color: @warnColor;
  font-size: 12px;
  line-height: 20px;
}
.form__btns{
  text-align: center;
}
</style>
